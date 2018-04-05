import {Component, OnInit} from '@angular/core';
import {LeasingCalculator} from '../models/LeasingCalculator';
import {Router} from '@angular/router';
import {DataStorageService} from '../services/data-storage-service.service';
import {FormBuilder, FormGroup} from '@angular/forms';
import {LeasePeriods} from '../models/LeasePeriods';
import {LeasingFormLabels} from '../constants/LeasingFormLabels';
import {CustomValidators} from '../constants/CustomValidators';
import {Repayment} from '../models/Repayment';
import {BackendService} from '../services/backend.service';
import {PaymentSize} from '../constants/PaymentSize';
import {LoanUtils} from '../utils/LoanUtils';
import {LeasingModel} from '../models/LeasingModel';

@Component({
  selector: 'app-leasing-calculator',
  templateUrl: './leasing-calculator.component.html',
  styleUrls: ['./leasing-calculator.component.css']
})

export class LeasingCalculatorComponent implements OnInit {

  leasingCalculator: LeasingCalculator;
  leasingCalculatorForm: FormGroup;
  leasingFormLabels = new LeasingFormLabels();
  leasingCalculatorLabels = this.leasingFormLabels.leasingCalculatorLabels;
  leasingFormInput: LeasingModel;
  availableCustomerTypes = ['Private', 'Business'];

  leasePeriods;
  availableDays = [15, 30];
  minAssetPrice = PaymentSize.MIN_ASSET_PRICE_PRIVATE;
  minAdvancePaymentAmount = PaymentSize.MIN_ADVANCE_PAYMENT_AMOUNT_PRIVATE;
  maxAdvancePaymentAmount = PaymentSize.MAX_ADVANCE_PAYMENT_AMOUNT;
  repaymentSchedule: Repayment[];

  constructor(private router: Router,
              private dataService: DataStorageService,
              private formBuilder: FormBuilder,
              private backendService: BackendService) {
    this.leasePeriods = new LeasePeriods().leasePeriods;
    this.createValidForm();
  }

  ngOnInit() {
    this.leasingCalculator = new LeasingCalculator();
    if (this.dataService.getLeasingModel() !== null && this.dataService.getLeasingModel() !== undefined) {
      this.fillFieldsWithLeasingFormInput();
    }
  }

  updateMinValues() {
    this.setMinAssetPrice();
    if (!this.leasingCalculatorForm.get('assetPrice').valid) {
      this.setMinAdvancePaymentAmount();
    }
  }

  setMinAdvancePaymentAmount() {
    if (this.leasingCalculatorForm.get('customerType').value === 'Business') {
      this.minAdvancePaymentAmount = PaymentSize.MIN_ADVANCE_PAYMENT_AMOUNT_BUSINESS;
      this.leasingCalculatorForm.get('advancePaymentAmount').setValidators(CustomValidators.advancePaymentAmountBusinessValidator);
    } else {
      this.minAdvancePaymentAmount = PaymentSize.MIN_ADVANCE_PAYMENT_AMOUNT_PRIVATE;
      this.leasingCalculatorForm.get('advancePaymentAmount').setValidators(CustomValidators.advancePaymentAmountPrivateValidator);
    }
    this.leasingCalculatorForm.get('advancePaymentAmount').updateValueAndValidity();
    document.getElementById('advancePaymentAmount').setAttribute('min', this.minAdvancePaymentAmount.toString());
  }


  setMinAssetPrice() {
    if (this.leasingCalculatorForm.get('customerType').value === 'Business') {
      this.minAssetPrice = PaymentSize.MIN_ASSET_PRICE_BUSINESS;
      this.leasingCalculatorForm.get('assetPrice').setValidators(CustomValidators.assetPriceBusinessValidator);
    } else {
      this.minAssetPrice = PaymentSize.MIN_ASSET_PRICE_PRIVATE;
      this.leasingCalculatorForm.get('assetPrice').setValidators(CustomValidators.assetPricePersonalValidator);
    }
    this.leasingCalculatorForm.get('assetPrice').updateValueAndValidity();
    document.getElementById('assetPrice').setAttribute('min', this.minAssetPrice.toString());
  }

  manageDependantFields() {
    this.calcContractFee();
    this.calcAdvancePaymentAmount();
    this.adjustAdvancePaymentAmountValidators();
  }

  calcContractFee() {
    this.leasingCalculatorForm.get('contractFee')
      .setValue(LoanUtils.calculateContractFee(this.leasingCalculatorForm.get('assetPrice').value));
  }

  calcAdvancePaymentPercentage() {
    this.leasingCalculatorForm.get('advancePaymentPercentage')
      .setValue(LoanUtils
        .calculateAdvancePaymentPercentage(this.leasingCalculatorForm.get('assetPrice').value,
          this.leasingCalculatorForm.get('advancePaymentAmount').value));
  }

  calcAdvancePaymentAmount() {
    this.leasingCalculatorForm.get('advancePaymentAmount')
      .setValue(LoanUtils
        .calculateAdvancePaymentAmount(this.leasingCalculatorForm.get('assetPrice').value,
          this.leasingCalculatorForm.get('advancePaymentPercentage').value));
  }

  adjustAdvancePaymentAmountValidators() {
    if (this.leasingCalculatorForm.get('assetPrice').valid) {
      this.leasingCalculatorForm.get('advancePaymentAmount')
        .setValidators(LoanUtils.calculateAdvancePaymentAmountValidators(this.leasingCalculatorForm.get('assetPrice').value));
      this.leasingCalculatorForm.get('advancePaymentAmount').updateValueAndValidity();
      this.minAdvancePaymentAmount = this.leasingCalculatorForm.get('assetPrice').value * 0.1;
      this.maxAdvancePaymentAmount = this.leasingCalculatorForm.get('assetPrice').value;
      document.getElementById('advancePaymentAmount').setAttribute('min', this.minAdvancePaymentAmount.toString());
      document.getElementById('advancePaymentAmount').setAttribute('max', this.maxAdvancePaymentAmount.toString());
    } else {
      this.minAdvancePaymentAmount = this.minAssetPrice * 0.1;
      this.maxAdvancePaymentAmount = PaymentSize.MAX_ADVANCE_PAYMENT_AMOUNT;
      this.leasingCalculatorForm.get('advancePaymentAmount').updateValueAndValidity();
      document.getElementById('advancePaymentAmount').setAttribute('min', this.minAdvancePaymentAmount.toString());
      document.getElementById('advancePaymentAmount').setAttribute('max', this.maxAdvancePaymentAmount.toString());
    }
  }

  submitForm() {
    if (!this.leasingCalculatorForm.valid) {
      Object.keys(this.leasingCalculatorForm.controls).forEach(field => {
        const control = this.leasingCalculatorForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      this.leasingCalculator = this.leasingCalculatorForm.value;
      this.backendService.sendLeasingCalculatorInput(this.leasingCalculator).then(
        receivedData => {
          const received: any = receivedData;
          this.displayRepaymentSchedule(received.repaymentSchedule);
        },
        error => {
          console.log('Error: ' + error);
        }
      );
    }
  }

  private displayRepaymentSchedule(repaymentSchedule: Repayment[]) {
    this.repaymentSchedule = repaymentSchedule;
    document.getElementById('repaymentSchedule').hidden = false;
  }

  createValidForm() {
    this.leasingCalculatorForm = this.formBuilder.group({
      customerType: ['', CustomValidators.customerTypeValidator],
      advancePaymentAmount: ['', CustomValidators.advancePaymentAmountPrivateValidator],
      leasePeriodInMonths: ['', CustomValidators.leasePeriodInMonthsValidator],
      contractFee: ['', CustomValidators.contractFeeValidator],
      paymentDate: ['', CustomValidators.paymentDateValidator],
      assetPrice: ['', CustomValidators.assetPricePersonalValidator],
      advancePaymentPercentage: ['', CustomValidators.advancePaymentPercentageValidator],
      margin: ['', CustomValidators.marginValidator],
    });
  }

  setLeasingCalculator() {
    this.leasingCalculator = this.leasingCalculatorForm.value;
    this.dataService.setLeasingCalculator(this.leasingCalculator);
    this.router.navigate(['/privateForm']);
  }

  fillFieldsWithLeasingFormInput() {
    this.leasingFormInput = this.dataService.getLeasingModel();
    this.leasingCalculatorForm.get('customerType').setValue(this.leasingFormInput.customerType);
    this.leasingCalculatorForm.get('assetPrice').setValue(this.leasingFormInput.assetPrice);
    this.leasingCalculatorForm.get('advancePaymentPercentage').setValue(this.leasingFormInput.advancePaymentPercentage);
    this.leasingCalculatorForm.get('advancePaymentAmount').setValue(this.leasingFormInput.advancePaymentAmount);
    this.leasingCalculatorForm.get('contractFee').setValue(this.leasingFormInput.contractFee);
    this.leasingCalculatorForm.get('margin').setValue(this.leasingFormInput.margin);
    this.leasingCalculatorForm.get('leasePeriodInMonths').setValue(this.leasingFormInput.leasePeriodInMonths);
    this.leasingCalculatorForm.get('paymentDate').setValue(this.leasingFormInput.paymentDate);
  }


  tile1 = {text: 'Leasing Calculator', cols: 2, rows: 5.5, color: 'linear-gradient(#ADD8E6, white)'};
  tile2 = {text: 'Calculate', cols: 2, rows: 5.5, color: 'linear-gradient(#b4c3c7, white)'};
}
