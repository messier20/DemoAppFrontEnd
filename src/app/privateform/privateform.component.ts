import {Component, OnInit} from '@angular/core';
import {LeasingModel} from '../models/LeasingModel';
import {CarList} from '../models/CarList';
import {Router} from '@angular/router';
import {DataStorageService} from '../services/data-storage-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";


@Component({
  selector: 'app-privateform',
  templateUrl: './privateform.component.html',
  styleUrls: ['./privateform.component.css']
})
export class PrivateformComponent implements OnInit {


  leasingModel: LeasingModel;
  leasingForm: FormGroup;


  availableCustomerTypes = ['Private', 'Business'];
  availableAssetTypes = ['Vehicle'];
  cars;
  model: String[];
  availableDays = [15, 30];

  numb;
  // assetPrice;

  constructor(private router: Router,
              private dataService: DataStorageService, private formBuilder: FormBuilder) {
    this.cars = new CarList().cars;
    this.createValidForm();
  }

  ngOnInit() {
    this.leasingModel = new LeasingModel();
  }

  selectBrandHandler() {
    this.check();
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].make === this.leasingModel.carBrand) {
        this.model = this.cars[i].model;
        break;
      }
    }
  }

  calcContractFee() {

    this.check();
    console.log(" in calcContract");

    // console.log(this.leasingModel.con)
    this.leasingModel.contractFee = (this.leasingModel.assetPrice * 0.01).toFixed(2);
    if (Number.parseFloat(this.leasingModel.contractFee)< 200) {
      this.leasingModel.contractFee = (200).toFixed(2);
    }

    console.log("contractFee", this.leasingModel.contractFee);
  }

  calcAdvancePaymentAmount() {
    this.check();
    console.log(" in advancePayment");
    this.leasingModel.advancePaymentAmount = (this.leasingModel.assetPrice * this.leasingModel.advancePaymentPercentage / 100).toFixed(2);
  }

  submitForm() {
    console.log('Customer type: ' + this.leasingModel.customerType);
    console.log('Asset type: ' + this.leasingModel.assetType);
    console.log('Engine power: ' + this.leasingModel.enginePower);
    console.log('Asset price: ' + this.leasingModel.assetPrice);
    console.log('Advance payment percentage: ' + this.leasingModel.advancePaymentPercentage);
    console.log('Lease period in months: ' + this.leasingModel.leasePeriodInMonths);
    console.log('Margin: ' + this.leasingModel.margin);
    console.log('Payment date: ' + this.leasingModel.paymentDate);
    if(this.leasingModel.customerType === this.availableCustomerTypes[1]){
      this.router.navigate(['/businessPersonalForm']);
    } else {
      this.router.navigate(['/privatePersonalForm']);
    }
    // this.fakeData = {
    //   customerType: 'private',
    //   assetType: 'vehicle',
    //   carBrand: 'Honda',
    //   carModel: 'civic',
    //   manufacturedDate: '2004-01-01',
    //   enginePower: 78,
    //   assetPrice: 5001,
    //   advancePaymentPercentage: 30,
    //   advancePaymentAmount: 400,
    //   leasePeriodInMonths: 20,
    //   margin: 30,
    //   contractFee: 200,
    //   paymentDate: 15,
    // };


    // this.leasingModel = new LeasingModel(this.leasingForm.value);
    this.dataService.setLeasingModel(this.leasingModel);

  }

  createValidForm() {
    this.leasingForm = this.formBuilder.group({
      customerType: ['', [Validators.required]],
      assetType: ['', [Validators.required]],
      // carBrand: ['', [Validators.required]],
      carBrand: [''],
      // carModel: ['', [Validators.required]],
      carModel: [''],
      manufacturedDate: ['', [Validators.required]],
      enginePower: ['', [Validators.required]],
      // advancePaymentAmount: ['', [Validators.required]],
      advancePaymentAmount: [''],
      leasePeriodInMonths: ['', [Validators.required]],
      // contractFee: ['', [Validators.required]],
      contractFee: [''],
      paymentDate: ['', [Validators.required]],
      assetPrice: ['', [Validators.required, Validators.min(5000)]],
      advancePaymentPercentage: ['', [Validators.required, Validators.min(10)]],
      margin: ['', [Validators.required]],
      // contractFee: ['', [Validators.required, Validators]]

      // numb: [this.numb, [Validators.required, Validators.min(200)]]
    })
    // this.leasingModel.assetPrice = this.assetPrice;
  }




  check() {
    // this.leasingModel.assetPrice = this.leasingForm.get('assetPrice').value;
    // this.leasingModel.advancePaymentPercentage = this.leasingForm.get('advancePaymentPercentage').value;
    // // this.leasingModel.margin = this.leasingForm.get('margin').value;
    // console.log("asset price in class", this.leasingModel.assetPrice);
    // console.log("advance payment percentage in class", this.leasingModel.advancePaymentPercentage);
    this.leasingModel = this.leasingForm.value;
    console.log("all class", this.leasingModel );
    console.log('all form', this.leasingForm);

    //
    // console.log("numb", this.leasingForm.value);
    // console.log("assetPrice", this.leasingForm.get('assetPrice'));
  }

}
