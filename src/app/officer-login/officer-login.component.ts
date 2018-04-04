import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-officer-login',
  templateUrl: './officer-login.component.html',
  styleUrls: ['./officer-login.component.css']
})
export class OfficerLoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  attemptLogin() {
    this.router.navigate(['/officerView']);
  }

}
