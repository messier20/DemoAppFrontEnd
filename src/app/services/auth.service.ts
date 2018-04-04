import {Injectable} from '@angular/core';

@Injectable()
export class AuthService {

  isLoggedIn = false;
  redirectUrl: string;

  constructor() {
  }

  // login(): Promise<boolean> {
  // }
  login() {
    return true;
  }

  logout() {
    this.isLoggedIn = false;
  }

}
