import { Component, OnInit } from '@angular/core';
import {
  Validators,
  FormGroup,
  FormBuilder,
  ValidatorFn,
  AbstractControl,
  ValidationErrors,
} from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

function patternValidator(regex: RegExp, error: ValidationErrors): ValidatorFn {
  return (control: AbstractControl): ValidationErrors => {
    if (!control.value) {
      return null;
    }

    // test the value of the control against the regexp supplied
    const valid = regex.test(control.value);
    // if true, return no error (no error), else return error passed in the second parameter
    return valid ? null : error;
  };
}

function comparePasswords(control: AbstractControl): ValidationErrors {
  const password = control.get('password');
  const confirmPassword = control.get('confirmPassword');
  return password.value === confirmPassword.value
    ? null
    : { passwordsDiffer: true };
}

function serverSideValidateUsername(
  checkAvailabilityFn: (n: string) => Observable<boolean>
): ValidatorFn {
  return (control: AbstractControl): Observable<ValidationErrors> => {
    return checkAvailabilityFn(control.value).pipe(
      map((available) => {
        if (available) {
          return null;
        }
        return { userAlreadyExists: true };
      })
    );
  };
}
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  public user: FormGroup;
  public errorMessage: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.user = this.fb.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: [
        '',
        [Validators.required, Validators.email],
        serverSideValidateUsername(this.authService.checkUserNameAvailability),
      ],
      passwordGroup: this.fb.group(
        {
          password: [
            '',
            [
              Validators.required,
              Validators.minLength(8),
              patternValidator(/\d/, { hasNumber: true }),
              patternValidator(/[A-Z]/, { hasUpperCase: true }),
              patternValidator(/[a-z]/, { hasLowerCase: true }),
            ],
          ],
          confirmPassword: ['', Validators.required],
        },
        { validator: comparePasswords }
      ),
    });
  }

  getErrorMessage(errors: any) {
    if (!errors) {
      return null;
    }
    if (errors.required) {
      return 'Is verplicht in te vullen!';
    } else if (errors.minlength) {
      return `Tenminste ${errors.minlength.requiredLength} karakters nodig, (u heeft ${errors.minlength.actualLength}).`;
    } else if (errors.hasNumber) {
      return `Tenminste 1 nummer nodig!`;
    } else if (errors.hasUpperCase) {
      return `Tenminste 1 hoofdletter nodig!`;
    } else if (errors.hasNumber) {
      return `Tenminste 1 kleine letter nodig!`;
    } else if (errors.userAlreadyExists) {
      return `Gebruiker bestaat al!`;
    } else if (errors.email) {
      return `Geen geldige e-mailadres!`;
    } else if (errors.passwordsDiffer) {
      return `Uw passwoord komt niet overeen!`;
    }
     return '';
  }

  onSubmit() {
    this.authService
      .register(
        this.user.value.firstname,
        this.user.value.lastname,
        this.user.value.email,
        this.user.value.passwordGroup.password
      )
      .subscribe(
        (val) => {
          if (val) {
            if (this.authService.redirectUrl) {
              this.router.navigateByUrl(this.authService.redirectUrl);
              this.authService.redirectUrl = undefined;
            } else {
              this.router.navigate(['/keramiek/shopping-cart']);
            }
          } else {
            this.errorMessage = `Could not login`;
          }
        },
        (err: HttpErrorResponse) => {
          console.log(err);
          if (err.error instanceof Error) {
            this.errorMessage = `Error while trying to login user ${this.user.value.email}: ${err.error.message}`;
          } else {
            this.errorMessage = `Error ${err.status} while trying to login user ${this.user.value.email}: ${err.error}`;
          }
        }
      );
  }
}
