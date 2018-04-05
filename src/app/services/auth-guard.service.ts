import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {OfficerLoginModel} from '../models/OfficerLoginModel';

@Injectable()
export class AuthGuardService implements CanActivate {

  officerLoginModel: OfficerLoginModel;

  constructor(private router: Router,
              private authService: AuthService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    if (this.officerLoginModel === undefined || this.officerLoginModel === null) {
      this.navigateToLogin();
      return false;

    } else {
      this.callBackendForLogin(url);
    }

  }

  navigateToLogin() {
    this.router.navigate(['/officerLogin']);
  }

  callBackendForLogin(url: string) {
    this.authService.login(this.officerLoginModel).then(loginStatus => {
      const loginReturn: any = loginStatus;

      if (loginReturn.hasLoggedIn) {
        this.authService.isLoggedIn = true;
        this.router.navigate([url]);

      } else {
        this.authService.isLoggedIn = false;
      }

    }, error => {
      console.log('Error in auth-guard.service checkLogin()');
      this.navigateToLogin();
      return false;
    });
  }
}
