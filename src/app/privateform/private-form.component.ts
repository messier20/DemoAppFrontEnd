import {Component, OnInit} from '@angular/core';
import {LeasingModel} from '../models/LeasingModel';
import {CarList} from '../models/CarList';
import {Router} from '@angular/router';
import {DataStorageService} from '../services/data-storage-service.service';
import {AbstractControl, FormBuilder, FormGroup} from '@angular/forms';
import {LeasePeriods} from '../models/LeasePeriods';
import {LeasingFormLabels} from '../constants/LeasingFormLabels';
import {CustomValidators} from '../constants/CustomValidators';
import {LeasingCalculator} from '../models/LeasingCalculator';
import {LoanUtils} from '../utils/LoanUtils';
import {ValidationAmounts} from '../constants/ValidationAmounts';
import {Observable} from 'rxjs/Observable';
import {startWith} from 'rxjs/operators/startWith';
import {map} from 'rxjs/operators/map';
import {InputFormsErrorStateMatcher} from '../utils/InputFormsErrorStateMatcher';

@Component({
  selector: 'app-privateform',
  templateUrl: './private-form.component.html',
  styleUrls: ['./private-form.component.css']
})
export class PrivateFormComponent implements OnInit {
  leasingModel: LeasingModel;
  leasingForm: FormGroup;
  leasingFormLabels = new LeasingFormLabels();
  leasingCalculatorInput: LeasingCalculator;
  validationAmounts = ValidationAmounts;
  availableCustomerTypes = ['Private', 'Business'];
  availableAssetTypes = ['Vehicle'];
  cars;
  carBrands: string[];
  leasePeriods;
  model: string[] = [''];
  availableDays = [15, 30];
  minAssetPrice = ValidationAmounts.MIN_ASSET_PRICE_PRIVATE;
  minAdvancePaymentAmount = ValidationAmounts.MIN_ADVANCE_PAYMENT_AMOUNT_PRIVATE;
  maxAdvancePaymentAmount = ValidationAmounts.MAX_ADVANCE_PAYMENT_AMOUNT;

  filteredCarBrands: Observable<string[]>;
  filteredCarModels: Observable<string[]>;
  PRIVATE = 'PRIVATE';
  BUSINESS = 'BUSINESS';
  leasingFormErrorMatcher = new InputFormsErrorStateMatcher();

  constructor(private router: Router,
              private dataService: DataStorageService, private formBuilder: FormBuilder) {
    this.cars = new CarList().cars;
    this.carBrands = new CarList().carBrands;
    this.leasePeriods = new LeasePeriods().leasePeriods;
    this.createValidForm();
    this.leasingForm.get('assetType').setValue('Vehicle');
  }

  ngOnInit() {
    if (this.dataService.getLeasingCalculator() !== null && this.dataService.getLeasingCalculator() !== undefined) {
      this.fillFieldsWithCalculatorInput();
    } else if (this.dataService.getLeasingModel() !== null && this.dataService.getLeasingModel() !== undefined) {
      this.leasingForm.setValue(this.dataService.getLeasingModel());
      this.selectBrandHandler();
      this.leasingForm.get('carModel').setValue(this.dataService.getLeasingModel().carModel);
    } else {
      this.leasingModel = new LeasingModel();
    }
    this.filteredCarBrands = this.leasingForm.get('carBrand').valueChanges
      .pipe(startWith(''), map(val => this.filterCarBrand(val)));
  }

  filterCarBrand(val: string): string[] {
    return this.carBrands.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  filterCarModel(val: string): string[] {
    return this.model.filter(option =>
      option.toLowerCase().indexOf(val.toLowerCase()) === 0);
  }

  updateMinValues() {
    this.setMinAssetPrice();
    if (!this.leasingForm.get('assetPrice').valid) {
      this.setMinAdvancePaymentAmount();
    }
  }

  setMinAdvancePaymentAmount() {
    if (this.leasingForm.get('customerType').value === 'BUSINESS') {
      this.minAdvancePaymentAmount = ValidationAmounts.MIN_ADVANCE_PAYMENT_AMOUNT_BUSINESS;
      this.leasingForm.get('advancePaymentAmount').setValidators(CustomValidators.advancePaymentAmountBusinessValidator);
    } else {
      this.minAdvancePaymentAmount = ValidationAmounts.MIN_ADVANCE_PAYMENT_AMOUNT_PRIVATE;
      this.leasingForm.get('advancePaymentAmount').setValidators(CustomValidators.advancePaymentAmountPrivateValidator);
    }
    this.leasingForm.get('advancePaymentAmount').updateValueAndValidity();
    document.getElementById('advancePaymentAmount').setAttribute('min', this.minAdvancePaymentAmount.toString());
  }

  setMinAssetPrice() {
    if (this.leasingForm.get('customerType').value === 'BUSINESS') {
      this.minAssetPrice = ValidationAmounts.MIN_ASSET_PRICE_BUSINESS;
      this.leasingForm.get('assetPrice').setValidators(CustomValidators.assetPriceBusinessValidator);
    } else {
      this.minAssetPrice = ValidationAmounts.MIN_ASSET_PRICE_PRIVATE;
      this.leasingForm.get('assetPrice').setValidators(CustomValidators.assetPricePersonalValidator);
    }
    this.leasingForm.get('assetPrice').updateValueAndValidity();
    document.getElementById('assetPrice').setAttribute('min', this.minAssetPrice.toString());
  }

  selectBrandHandler() {
    this.leasingForm.get('carModel').setValue('');
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].make.toLowerCase() === this.leasingForm.get('carBrand').value.toString().toLowerCase()) {
        this.model = this.cars[i].model;
        break;
      }
    }
    if (this.leasingForm.get('carModel') !== null) {
      this.filteredCarModels = this.leasingForm.get('carModel').valueChanges
        .pipe(startWith(''), map(val => this.filterCarModel(val)));
    }
  }

  manageDependantFields() {
    this.calcContractFee();
    this.calcAdvancePaymentAmount();
    this.adjustAdvancePaymentAmountValidators();
  }

  calcContractFee() {
    this.leasingForm.get('contractFee')
      .setValue(LoanUtils.calculateContractFee(this.leasingForm.get('assetPrice').value));
  }

  calcAdvancePaymentPercentage() {
    this.leasingForm.get('advancePaymentPercentage')
      .setValue(LoanUtils
        .calculateAdvancePaymentPercentage(this.leasingForm.get('assetPrice').value,
          this.leasingForm.get('advancePaymentAmount').value));
  }

  calcAdvancePaymentAmount() {
    this.leasingForm.get('advancePaymentAmount')
      .setValue(LoanUtils
        .calculateAdvancePaymentAmount(this.leasingForm.get('assetPrice').value,
          this.leasingForm.get('advancePaymentPercentage').value));
  }

  adjustAdvancePaymentAmountValidators() {
    if (this.leasingForm.get('assetPrice').valid) {
      this.leasingForm.get('advancePaymentAmount')
        .setValidators(LoanUtils.calculateAdvancePaymentAmountValidators(this.leasingForm.get('assetPrice').value));
      this.leasingForm.get('advancePaymentAmount').updateValueAndValidity();
      this.minAdvancePaymentAmount = this.leasingForm.get('assetPrice').value * 0.1;
      this.maxAdvancePaymentAmount = this.leasingForm.get('assetPrice').value;
      document.getElementById('advancePaymentAmount').setAttribute('min', this.minAdvancePaymentAmount.toString());
      document.getElementById('advancePaymentAmount').setAttribute('max', this.maxAdvancePaymentAmount.toString());
    } else {
      this.minAdvancePaymentAmount = this.minAssetPrice * 0.1;
      this.maxAdvancePaymentAmount = ValidationAmounts.MAX_ADVANCE_PAYMENT_AMOUNT;
      this.leasingForm.get('advancePaymentAmount').updateValueAndValidity();
      document.getElementById('advancePaymentAmount').setAttribute('min', this.minAdvancePaymentAmount.toString());
      document.getElementById('advancePaymentAmount').setAttribute('max', this.maxAdvancePaymentAmount.toString());
    }
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
      advancePaymentAmount: ['', CustomValidators.advancePaymentAmountPrivateValidator],
      leasePeriodInMonths: ['', CustomValidators.leasePeriodInMonthsValidator],
      contractFee: ['', CustomValidators.contractFeeValidator],
      paymentDate: ['', CustomValidators.paymentDateValidator],
      assetPrice: ['', CustomValidators.assetPricePersonalValidator],
      advancePaymentPercentage: ['', CustomValidators.advancePaymentPercentageValidator],
      margin: ['', CustomValidators.marginValidator],

    });
  }

  setLeasingModel() {
    if (!this.leasingForm.valid) {
      Object.keys(this.leasingForm.controls).forEach(field => {
        const control = this.leasingForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      this.router.navigate(['/customerInfoForm']);
    }
    this.leasingModel = this.leasingForm.value;
    this.dataService.setLeasingModel(this.leasingModel);
  }

  goBack() {
    this.router.navigate(['/leasingCalculatorForm']);
    this.leasingModel = this.leasingForm.value;
    this.dataService.setLeasingModel(this.leasingModel);
  }

  fillFieldsWithCalculatorInput() {
    this.leasingCalculatorInput = this.dataService.getLeasingCalculator();
    this.leasingForm.get('customerType').setValue(this.leasingCalculatorInput.customerType);
    this.leasingForm.get('assetPrice').setValue(this.leasingCalculatorInput.assetPrice);
    this.leasingForm.get('advancePaymentPercentage').setValue(this.leasingCalculatorInput.advancePaymentPercentage);
    this.leasingForm.get('advancePaymentAmount').setValue(this.leasingCalculatorInput.advancePaymentAmount);
    this.leasingForm.get('contractFee').setValue(this.leasingCalculatorInput.contractFee);
    this.leasingForm.get('margin').setValue(this.leasingCalculatorInput.margin);
    this.leasingForm.get('leasePeriodInMonths').setValue(this.leasingCalculatorInput.leasePeriodInMonths);
    this.leasingForm.get('paymentDate').setValue(this.leasingCalculatorInput.paymentDate);
    this.dataService.setLeasingCalculator(null);
    if (this.dataService.getLeasingModel() !== null && this.dataService.getLeasingModel() !== undefined) {
      this.leasingForm.get('carBrand').setValue(this.dataService.getLeasingModel().carBrand);
      this.selectBrandHandler();
      this.leasingForm.get('carModel').setValue(this.dataService.getLeasingModel().carModel);
      console.log(this.leasingForm.get('carModel').value);
      this.leasingForm.get('manufacturedDate').setValue(this.dataService.getLeasingModel().manufacturedDate);
      this.leasingForm.get('enginePower').setValue(this.dataService.getLeasingModel().enginePower);
    }
  }
}
