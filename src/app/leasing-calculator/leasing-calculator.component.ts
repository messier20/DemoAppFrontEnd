import { Component, OnInit } from '@angular/core';
import {LeasingCalculator} from '../models/LeasingCalculator';
import {Data, Router} from '@angular/router';
import {DataStorageService} from '../services/data-storage-service.service';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LeasePeriods} from '../models/LeasePeriods';
import {LeasingFormLabels} from '../constants/LeasingFormLabels';
import {CustomValidators} from '../constants/CustomValidators';
import {Repayment} from '../models/Repayment';

@Component({
  selector: 'app-leasing-calculator',
  templateUrl: './leasing-calculator.component.html',
  styleUrls: ['./leasing-calculator.component.css']
})
export class LeasingCalculatorComponent implements OnInit {

  leasingCalculator: LeasingCalculator;
  leasingForm: FormGroup;
  leasingFormLabels = new LeasingFormLabels();
  leasingCalculatorLabels = this.leasingFormLabels.leasingCalculatorLabels;

  availableCustomerTypes = ['Private', 'Business'];
  availableAssetTypes = ['Vehicle'];

  leasePeriods;
  availableDays = [15, 30];
  minAssetPrice = 5000;

  constructor(private router: Router,
              private dataService: DataStorageService, private formBuilder: FormBuilder) {
    this.leasePeriods = new LeasePeriods().leasePeriods;
    this.createValidForm();
    this.leasingForm.get('assetType').setValue('Vehicle');
  }

  ngOnInit() {
    this.leasingCalculator = new LeasingCalculator();
  }

  setMinAssetPrice() {
    if (this.leasingForm.get('customerType').value === 'Business') {
      this.minAssetPrice = 10000;
      this.leasingForm.get('assetPrice').setValidators(CustomValidators.assetPriceBusinessValidator);
    } else {
      this.minAssetPrice = 5000;
      this.leasingForm.get('assetPrice').setValidators(CustomValidators.assetPricePersonalValidator);
    }
    this.leasingForm.get('assetPrice').updateValueAndValidity();
    document.getElementById('assetPrice').setAttribute('min', this.minAssetPrice.toString());
  }

  calcAdvancePaymentAmountAndContractFee() {
    this.leasingForm.get('contractFee').setValue((this.leasingForm.get('assetPrice').value * 0.01).toFixed(2));
    if (Number.parseFloat(this.leasingForm.get('contractFee').value) < 200) {
      this.leasingForm.get('contractFee').setValue((200).toFixed(2));
    }
    this.leasingForm.get('advancePaymentAmount').setValue((this.leasingForm.get('assetPrice').value
      * this.leasingForm.get('advancePaymentPercentage').value / 100).toFixed(2));
  }

  submitForm() {
  }

  createValidForm() {
    this.leasingForm = this.formBuilder.group({
      customerType: ['', CustomValidators.customerTypeValidator],
      assetType: ['', CustomValidators.assetTypeValidator],
      carBrand: ['', CustomValidators.carBrandValidator],
      carModel: ['', CustomValidators.carModelValidator],
      manufacturedDate: ['', CustomValidators.manufacturedDateValidator],
      enginePower: ['', CustomValidators.enginePowerValidator],
      advancePaymentAmount: ['', CustomValidators.advancePaymentAmountValidator],
      leasePeriodInMonths: ['', CustomValidators.leasePeriodInMonthsValidator],
      contractFee: ['', CustomValidators.contractFeeValidator],
      paymentDate: ['', CustomValidators.paymentDateValidator],
      assetPrice: ['', CustomValidators.assetPricePersonalValidator],
      advancePaymentPercentage: ['', CustomValidators.advancePaymentPercentageValidator],
      margin: ['', CustomValidators.marginValidator],
    });
  }

  setLeasingCalculator() {
    if (!this.leasingForm.valid) {
      Object.keys(this.leasingForm.controls).forEach(field => {
        const control = this.leasingForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      this.router.navigate(['/leasingCalculatorForm']);
    }
    this.leasingCalculator = this.leasingForm.value;
    this.dataService.setLeasingCalculator(this.leasingCalculator);
  }
}