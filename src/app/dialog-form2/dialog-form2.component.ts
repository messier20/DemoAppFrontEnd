import {Component, Input, OnInit} from '@angular/core';
import {ApplicationInfoComponent} from "../officer-view/application-info/application-info.component";

@Component({
  selector: 'app-dialog-form2',
  templateUrl: './dialog-form2.component.html',
  styleUrls: ['./dialog-form2.component.css']
})
export class DialogForm2Component implements OnInit {

  @Input() lease;
  // @Input() sm;
  // appInfo: ApplicationInfoComponent;

  constructor() { }

  ngOnInit() {
    // this.appInfo.getAllsm().then( data => {
    //   this.sm = data;
    // });

  }

}
