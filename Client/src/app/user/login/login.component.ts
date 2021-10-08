import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public user: any;
  public errorMsg: string = '';

  model: any = {}
  constructor(
    private authService: AuthenticationService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() : void {
    this.user = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      // remember: ['']
    });
  }

  onSubmit() {
    this.authService.login(this.user.value.username, 
            this.user.value.password).subscribe(val => {
      if (val) {
        if (this.authService.redirectUrl) {
          this.router.navigateByUrl(this.authService.redirectUrl);
          this.authService.redirectUrl = undefined;
        } else {
          this.router.navigate(['/keramiek/shopping-cart']);
        }
      }
      console.log(this.model)
    },
    (err: HttpErrorResponse) => {
      console.log(err);
      if (err.error instanceof Error) {
        this.errorMsg = `Error while trying to login user ${this.user.value.username}: ${err.error.message}`;
      } else {
        this.errorMsg = `Error ${err.status} while trying to login user ${this.user.value.username}: ${err.error}`;
      }
    }
  );
  }

}
