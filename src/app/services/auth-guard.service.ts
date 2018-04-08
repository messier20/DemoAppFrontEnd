import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {AuthService} from './auth.service';
import {OfficerLoginModel} from '../models/OfficerLoginModel';
import {DataStorageService} from './data-storage-service.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router: Router,
              private authService: AuthService,
              private dataStorage: DataStorageService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const url: string = state.url;

    return this.checkLogin(url);
  }

  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) {
      return true;
    }

    if (this.dataStorage.officerLoginModel === undefined || this.dataStorage.officerLoginModel === null) {
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
    this.authService.login(this.dataStorage.officerLoginModel).then(loginStatus => {
      const loginReturn: any = loginStatus;

      if (loginReturn.hasLoggedIn) {
        this.authService.isLoggedIn = true;
        this.dataStorage.wrongLoginCredentials = false;
        this.router.navigate([url]);

      } else {
        this.dataStorage.wrongLoginCredentials = true;
        this.authService.isLoggedIn = false;
        this.navigateToLogin();
      }

    }, error => {
      console.log('Error in auth-guard.service checkLogin()');
      this.dataStorage.wrongLoginCredentials = true;
      this.navigateToLogin();
      return false;
    });
  }
}
