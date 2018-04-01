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
    console.log(this.status);

    if (this.status === "DENIED") {
      this.action = "deny";
      console.log("in deny", this.status);
    }
    else {
      this.action = "approve";
      console.log(this.status);
    }

  }

  returnYes() {

    if (this.status === "APPROVED") {
      this.choice = "APPROVED";
      console.log("in return yes", this.choice);
      this.dialogRef.close(this.choice);
    }

    else {
      this.choice = "DENIED";
      console.log("in return no", this.choice);
      this.dialogRef.close(this.choice);
    }
  }

  returnNo() {
    this.choice = "no";
    console.log("just retured no");
    this.dialogRef.close(this.choice);
  }

}
