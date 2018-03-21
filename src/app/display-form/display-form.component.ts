import {Component} from '@angular/core';
import {MatDialog} from '@angular/material';

@Component({
  selector: 'app-display-form',
  templateUrl: './display-form.component.html',
  styleUrls: ['./display-form.component.css']
})

export class DisplayFormComponent {

  data = [
    {heading: 'Customer type', value: 'Private'},
    {heading: 'Asset type', value: 'Vehicle'},
    {heading: 'Make', value: 'Audi'},
    {heading: 'Model', value: 'A4'},
    {heading: 'Year', value: '1995'},
    {heading: 'Engine power', value: '90kW'},
    {heading: 'Asset price', value: '2000'},
    {heading: 'Advance payment percentage', value: '10%'},
    {heading: 'Advance payment amount', value: '100'},
    {heading: 'Lease period', value: '12'},
    {heading: 'Margin', value: '3.2'},
    {heading: 'Contract fee', value: '200EUR default min 3.2%'},
    {heading: 'Payment date', value: '15 or 30'}
  ];
  // data[0].value
  constructor() {
  }

}

//   constructor(public dialog: MatDialog) {
//   }
//
//   openDialog() {
//     //document.getElementById('popup').hidden = false;
//     const dialogRef = this.dialog.open(DialogFormComponent);
//
//     dialogRef.afterClosed().subscribe(result => {
//       console.log(`Dialog result: ${result}`);
//     });
//   }
// }
//
// @Component({
//   selector: 'app-dialog-form',
//   templateUrl: 'dialog-form.html',
// })
// export class DialogFormComponent {}
//
