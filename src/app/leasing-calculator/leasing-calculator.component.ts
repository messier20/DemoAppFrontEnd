import {Component, OnInit} from '@angular/core';
import {LeasingCalculator} from '../models/LeasingCalculator';
import {Data, Router} from '@angular/router';
import {DataStorageService} from '../services/data-storage-service.service';
import {Form, FormBuilder, FormGroup, Validators} from '@angular/forms';
import {LeasePeriods} from '../models/LeasePeriods';
import {LeasingFormLabels} from '../constants/LeasingFormLabels';
import {CustomValidators} from '../constants/CustomValidators';
import {Repayment} from '../models/Repayment';
import {BackendService} from '../services/backend.service';
import {DialogFormComponent} from '../dialog-form/dialog-form';

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

  availableCustomerTypes = ['Private', 'Business'];

  leasePeriods;
  availableDays = [15, 30];
  minAssetPrice = 5000;
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
  }

  setMinAssetPrice() {
    if (this.leasingCalculatorForm.get('customerType').value === 'Business') {
      this.minAssetPrice = 10000;
      this.leasingCalculatorForm.get('assetPrice').setValidators(CustomValidators.assetPriceBusinessValidator);
    } else {
      this.minAssetPrice = 5000;
      this.leasingCalculatorForm.get('assetPrice').setValidators(CustomValidators.assetPricePersonalValidator);
    }
    this.leasingCalculatorForm.get('assetPrice').updateValueAndValidity();
    document.getElementById('assetPrice').setAttribute('min', this.minAssetPrice.toString());
  }

  calcAdvancePaymentAmountAndContractFee() {
    this.leasingCalculatorForm.get('contractFee').setValue((this.leasingCalculatorForm.get('assetPrice').value * 0.01).toFixed(2));
    if (Number.parseFloat(this.leasingCalculatorForm.get('contractFee').value) < 200) {
      this.leasingCalculatorForm.get('contractFee').setValue((200).toFixed(2));
    }
    this.leasingCalculatorForm.get('advancePaymentAmount').setValue((this.leasingCalculatorForm.get('assetPrice').value
      * this.leasingCalculatorForm.get('advancePaymentPercentage').value / 100).toFixed(2));
  }

  submitForm() {
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

  private displayRepaymentSchedule(repaymentSchedule: Repayment[]) {
    this.repaymentSchedule = repaymentSchedule;
    document.getElementById('repaymentSchedule').hidden = false;
  }

  createValidForm() {
    this.leasingCalculatorForm = this.formBuilder.group({
      customerType: ['', CustomValidators.customerTypeValidator],
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
    if (!this.leasingCalculatorForm.valid) {
      Object.keys(this.leasingCalculatorForm.controls).forEach(field => {
        const control = this.leasingCalculatorForm.get(field);
        control.markAsTouched({onlySelf: true});
      });
    } else {
      this.router.navigate(['/leasingCalculatorForm']);
    }
    this.leasingCalculator = this.leasingCalculatorForm.value;
    this.dataService.setLeasingCalculator(this.leasingCalculator);
  }
}
