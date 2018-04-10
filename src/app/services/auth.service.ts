import {Injectable} from '@angular/core';
import {BackendService} from './backend.service';
import {OfficerLoginModel} from '../models/OfficerLoginModel';

@Injectable()
export class AuthService {

  isLoggedIn = false;

  constructor(private backendService: BackendService) {
  }

  login(loginModel: OfficerLoginModel) {
    return this.backendService.loginUser(loginModel);
  }

  logout() {
    this.isLoggedIn = false;
  }

}
