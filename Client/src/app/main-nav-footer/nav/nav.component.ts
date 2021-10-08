import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from 'src/app/user/authentication.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {

  loggedInUser$ = this._authenticationService.user$;

  constructor(
    private _authenticationService: AuthenticationService,
    private _router: Router
  ) {}

  logout() {
    this._authenticationService.logout();
    this._router.navigate(['/login']);
  }
  login() {
    console.log('login');
    this._router.navigate(['/login']);
  }
  

}
