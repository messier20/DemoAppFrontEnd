import {Component, OnInit} from '@angular/core';
import {LeasingModel} from '../models/LeasingModel';
import {CarList} from '../models/CarList';
import {Router} from '@angular/router';
import {DataStorageService} from '../services/data-storage-service.service';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {LeasePeriods} from '../models/LeasePeriods';


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
  leasePeriods;
  model: String[];
  availableDays = [15, 30];
  minAssetPrice;


  constructor(private router: Router,
              private dataService: DataStorageService, private formBuilder: FormBuilder) {
    this.cars = new CarList().cars;
    this.leasePeriods = new LeasePeriods().leasePeriods;
    this.createValidForm();
  }

  ngOnInit() {
    this.leasingModel = new LeasingModel();
  }


  setMinAssetPrice() {
    if (this.leasingForm.get('customerType').value === 'Business') {
      this.minAssetPrice = 10000;
      this.leasingForm.get('assetPrice').setValidators([Validators.required, Validators.min(this.minAssetPrice)]);
      this.leasingForm.get('assetPrice').updateValueAndValidity();
    } else {
      this.minAssetPrice = 5000;
      this.leasingForm.get('assetPrice').setValidators([Validators.required, Validators.min(this.minAssetPrice)]);
      this.leasingForm.get('assetPrice').updateValueAndValidity();
    }
  }

  selectBrandHandler() {
    // this.check();
    console.log("inside select brand")
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].make === this.leasingForm.get('carBrand').value) {
        console.log("inside if, carBRand", this.leasingForm.get('carBrand').value)
        this.model = this.cars[i].model;
        console.log(this.model);
        break;
      }
    }
  }


  calcAdvancePaymentAmountAndContractFee() {
    // this.check();
    this.leasingForm.get('contractFee').setValue((this.leasingForm.get('assetPrice').value * 0.01).toFixed(2));
    if (Number.parseFloat(this.leasingForm.get('contractFee').value) < 200) {
      this.leasingForm.get('contractFee').setValue((200).toFixed(2));
    }
    this.leasingForm.get('advancePaymentAmount').setValue((this.leasingForm.get('assetPrice').value * this.leasingForm.get('advancePaymentPercentage').value / 100).toFixed(2));
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
    if (this.leasingModel.customerType === this.availableCustomerTypes[1]) {
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
      assetPrice: ['', [Validators.required, Validators.min(this.minAssetPrice)]],
      advancePaymentPercentage: ['', [Validators.required, Validators.min(10)]],
      margin: ['', [Validators.required, Validators.min(3.2)]],

    });
  }

  setLeasingModel() {
    this.leasingModel = this.leasingForm.value;

  }


}
