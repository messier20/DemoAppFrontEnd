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
    let url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    // Store the attempted URL for redirecting
    this.authService.redirectUrl = url;

    if (this.officerLoginModel === undefined || this.officerLoginModel === null) {
      this.navigateToLogin();
      return false;
    }

    // Navigate to the login page with extras
    if (this.authService.login(this.officerLoginModel)) {
      return true;

    } else {
      this.navigateToLogin();
      return false;
    }
  }

  navigateToLogin() {
    this.router.navigate(['/officerLogin']);
  }
}
