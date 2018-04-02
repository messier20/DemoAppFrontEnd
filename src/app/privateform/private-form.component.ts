import {Component, OnInit} from '@angular/core';
import {LeasingModel} from '../models/LeasingModel';
import {CarList} from '../models/CarList';
import {Router} from '@angular/router';
import {DataStorageService} from '../services/data-storage-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LeasePeriods} from '../models/LeasePeriods';
import {LeasingFormLabels} from '../constants/LeasingFormLabels';
import {CustomValidators} from '../constants/CustomValidators';
import {LeasingCalculator} from '../models/LeasingCalculator';
import {LoanUtils} from '../utils/LoanUtils';
import {PaymentSize} from '../constants/PaymentSize';

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

  availableCustomerTypes = ['Private', 'Business'];
  availableAssetTypes = ['Vehicle'];
  cars;
  leasePeriods;
  model: String[];
  availableDays = [15, 30];
  minAssetPrice = PaymentSize.MIN_ASSET_PRICE_PRIVATE;
  minAdvancePaymentAmount = PaymentSize.MIN_ADVANCE_PAYMENT_AMOUNT_PRIVATE;
  maxAdvancePaymentAmount = PaymentSize.MAX_ADVANCE_PAYMENT_AMOUNT;

  constructor(private router: Router,
              private dataService: DataStorageService, private formBuilder: FormBuilder) {
    this.cars = new CarList().cars;
    this.leasePeriods = new LeasePeriods().leasePeriods;
    this.createValidForm();
    this.leasingForm.get('assetType').setValue('Vehicle');
    if (this.dataService.getLeasingCalculator() != null) {
      this.fillFieldsWithCalculatorInput();
    }
  }

  ngOnInit() {
    this.leasingModel = new LeasingModel();
  }

  updateMinValues() {
    this.setMinAssetPrice();
    if (!this.leasingForm.get('assetPrice').valid) {
      this.setMinAdvancePaymentAmount();
    }
  }

  setMinAdvancePaymentAmount() {
    if (this.leasingForm.get('customerType').value === 'Business') {
      this.minAdvancePaymentAmount = PaymentSize.MIN_ADVANCE_PAYMENT_AMOUNT_BUSINESS;
      this.leasingForm.get('advancePaymentAmount').setValidators(CustomValidators.advancePaymentAmountBusinessValidator);
    } else {
      this.minAdvancePaymentAmount = PaymentSize.MIN_ADVANCE_PAYMENT_AMOUNT_PRIVATE;
      this.leasingForm.get('advancePaymentAmount').setValidators(CustomValidators.advancePaymentAmountPrivateValidator);
    }
    this.leasingForm.get('advancePaymentAmount').updateValueAndValidity();
    document.getElementById('advancePaymentAmount').setAttribute('min', this.minAdvancePaymentAmount.toString());
  }


  setMinAssetPrice() {
    if (this.leasingForm.get('customerType').value === 'Business') {
      this.minAssetPrice = PaymentSize.MIN_ASSET_PRICE_BUSINESS;
      this.leasingForm.get('assetPrice').setValidators(CustomValidators.assetPriceBusinessValidator);
    } else {
      this.minAssetPrice = PaymentSize.MIN_ASSET_PRICE_PRIVATE;
      this.leasingForm.get('assetPrice').setValidators(CustomValidators.assetPricePersonalValidator);
    }
    this.leasingForm.get('assetPrice').updateValueAndValidity();
    document.getElementById('assetPrice').setAttribute('min', this.minAssetPrice.toString());
  }

  selectBrandHandler() {
    for (let i = 0; i < this.cars.length; i++) {
      if (this.cars[i].make === this.leasingForm.get('carBrand').value) {
        this.model = this.cars[i].model;
        break;
      }
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
      this.minAdvancePaymentAmount = this.minAssetPrice;
      this.maxAdvancePaymentAmount = 9999999;
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
  }

}
