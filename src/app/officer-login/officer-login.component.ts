import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../constants/CustomValidators';
import {OfficerLoginModel} from '../models/OfficerLoginModel';
import {AuthService} from '../services/auth.service';
import {AuthGuardService} from '../services/auth-guard.service';

@Component({
  selector: 'app-officer-login',
  templateUrl: './officer-login.component.html',
  styleUrls: ['./officer-login.component.css']
})
export class OfficerLoginComponent implements OnInit {

  officerLoginModel: OfficerLoginModel;
  officerLoginForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private authService: AuthService,
              private authGuardService: AuthGuardService) {

    this.createValidForm();
  }

  ngOnInit() {
  }

  createValidForm() {
    this.officerLoginForm = this.formBuilder.group({
      email: ['', CustomValidators.emailValidator],
      password: ['', [Validators.required]],
    });
  }


  attemptLogin() {
    this.router.navigate(['/officerView']);
  }

  setLoginInfo() {
    this.authGuardService.officerLoginModel = this.officerLoginForm.value;
  }

}
