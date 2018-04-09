import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {CustomValidators} from '../constants/CustomValidators';
import {OfficerLoginModel} from '../models/OfficerLoginModel';
import {AuthService} from '../services/auth.service';
import {AuthGuardService} from '../services/auth-guard.service';
import {DataStorageService} from '../services/data-storage-service.service';

@Component({
  selector: 'app-officer-login',
  templateUrl: './officer-login.component.html',
  styleUrls: ['./officer-login.component.css']
})
export class OfficerLoginComponent implements OnInit {

  officerLoginModel: OfficerLoginModel;
  officerLoginForm: FormGroup;
  wrongLoginCredentials: boolean;

  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private dataStorage: DataStorageService) {

    this.createValidForm();
  }

  ngOnInit() {
    this.wrongLoginCredentials = this.dataStorage.wrongLoginCredentials;
  }

  createValidForm() {
    this.officerLoginForm = this.formBuilder.group({
      email: ['', CustomValidators.emailValidator],
      password: ['', [Validators.required]],
    });
  }


  attemptLogin() {
    this.router.navigate(['/officerView']).then();
    setTimeout(() => {
      this.wrongLoginCredentials = true; // this.dataStorage.wrongLoginCredentials;
    }, 500);
  }

  setLoginInfo() {
    this.dataStorage.officerLoginModel = this.officerLoginForm.value;
  }

}
