import {Component} from '@angular/core';

@Component({
  selector: 'app-dialog-form',
  templateUrl: 'dialog-form/dialog-form.html',
  styleUrls: ['./dialog-form.css']
})
export class DialogFormComponent {
  leasingModel = {
    customerType: 'private',
    assetType: 'vehicle',
    carBrand: 'Honda',
    carModel: 'civic',
    manufacturedDate: '2004-01-01',
    enginePower: 78,
    assetPrice: 5001,
    advancePaymentPercentage: 30,
    advancePaymentAmount: 400,
    leasePeriodInMonths: 20,
    margin: 30,
    contractFee: 200,
    paymentDate: 15,
  };
  data = [
    {heading: 'Customer type', value: 'Private'},
    {heading: 'Asset type', value: 'Vehicle'},
    {heading: 'Car brand', value: 'Audi'},
    {heading: 'Car model', value: 'A4'},
    {heading: 'Manufactured date', value: '1995'},
    {heading: 'Engine power', value: '90kW'},
    {heading: 'Asset price', value: '2000'},
    {heading: 'Advance payment percentage', value: '10%'},
    {heading: 'Advance payment amount', value: '100'},
    {heading: 'Lease period in month', value: '12'},
    {heading: 'Margin', value: '3.2'},
    {heading: 'Contract fee', value: '200EUR default min 3.2%'},
    {heading: 'Payment date', value: '15 or 30'}
  ];

  constructor() {
    this.data[0].value = this.leasingModel.customerType;
    this.data[1].value = this.leasingModel.assetType;
    this.data[2].value = this.leasingModel.carBrand;
    this.data[3].value = this.leasingModel.carModel;
    this.data[4].value = this.leasingModel.manufacturedDate;
    this.data[5].value = String(this.leasingModel.enginePower);
    this.data[6].value = String(this.leasingModel.assetPrice);
    this.data[7].value = String(this.leasingModel.advancePaymentPercentage);
    this.data[8].value = String(this.leasingModel.advancePaymentAmount);
    this.data[9].value = String(this.leasingModel.leasePeriodInMonths);
    this.data[10].value = String(this.leasingModel.margin);
    this.data[11].value = String(this.leasingModel.contractFee);
    this.data[12].value = String(this.leasingModel.paymentDate);
  }
}
