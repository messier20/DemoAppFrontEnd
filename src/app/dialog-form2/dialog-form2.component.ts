import {Component, EventEmitter, Inject, Input, OnInit, Output} from '@angular/core';
import {ApplicationInfoComponent} from "../officer-view/application-info/application-info.component";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material";

@Component({
  selector: 'app-dialog-form2',
  templateUrl: './dialog-form2.component.html',
  styleUrls: ['./dialog-form2.component.css']
})
export class DialogForm2Component implements OnInit {

  status;
  choice;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any,
              public dialogRef: MatDialogRef<DialogForm2Component>) {

    this.status = this.data.status;
    this.choice = this.data.choice;

  }

  action;

  ngOnInit() {

    if(this.status){
      this.action = "approve";
    }
    else this.action="deny"

  }

  returnYes() {

      this.dialogRef.close(this.status);

  }


}
