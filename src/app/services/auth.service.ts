import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';
import {OfficerLoginModel} from '../models/OfficerLoginModel';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;

  constructor(private backendService: BackendService) {
  }

  login(loginModel: OfficerLoginModel): Promise<Object> {
    return this.backendService.loginUser(loginModel);

      // .then(loginStatus => {
      //
      //   console.log('Server has returned');
      //   console.log(loginStatus);
      //
      //   const loginReturn: any = loginStatus;
      //   return loginReturn.hasLoggedIn;
      //
      // }, error => {
      //   console.log('Error in BackendService.login()');
      //   return false;
      // });
  }

  logout() {
    this.isLoggedIn = false;
  }

}
