import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../constants/CustomValidators';

@Component({
  selector: 'app-officer-login',
  templateUrl: './officer-login.component.html',
  styleUrls: ['./officer-login.component.css']
})
export class OfficerLoginComponent implements OnInit {

  officerLoginForm: FormGroup;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {

    this.createValidForm();
  }

  ngOnInit() {
  }

  createValidForm() {
    this.officerLoginForm = this.formBuilder.group({
      email: ['', CustomValidators.emailValidator],
      passwordField: ['', [Validators.required]],
    });
  }


  attemptLogin() {
    this.router.navigate(['/officerView']);
  }

  setLoginInfo() {

  }

}
