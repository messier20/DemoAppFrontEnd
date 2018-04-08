import {Component, OnInit, ViewChild} from '@angular/core';
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
import {MatPaginator, MatTableDataSource, PageEvent} from '@angular/material';
import {DataSource} from "@angular/cdk/collections";
import {Repayments} from "../models/Repayments";
import {Observable} from "rxjs/Observable";
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-leasing-calculator',
  templateUrl: './leasing-calculator.component.html',
  styleUrls: ['./leasing-calculator.component.css', './leasing-calculator.component.scss']
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

  displayedColumns = [
    'repaymentDate',
    'remainingAmountToRepay',
    'assetValuePaymentAmount',
    'interestPaymentAmount',
    'totalPaymentAmount'
  ];

  repaymentSchedule: Repayment[];

  PRIVATE = 'PRIVATE';
  BUSINESS = 'BUSINESS';
  visible = false;
  ELEMENT_DATA: Element[];


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

    (<HTMLInputElement>document.getElementById('matcard2')).hidden = true;
  }


  //------------------------------------

  // dataSource = new ScheduleDataSource(this.backendService);

  repaymentScheduleDataStream = new Subject();

  length = 84;
  pageSize = 6;
  pageSizeOptions = [6, 84];
  pageEvent: PageEvent;

  setPageSizeOptions(setPageSizeOptionsInput: string) {
    this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
  }

  // dataSource = new MatTableDataSource<Repayment>(this.repaymentSchedule);

  // @ViewChild(MatPaginator) paginator: MatPaginator;
  //-------------------------------------

  updateMinValues() {
    this.setMinAssetPrice();
    if (!this.leasingCalculatorForm.get('assetPrice').valid) {
      this.setMinAdvancePaymentAmount();
    }
  }

  setMinAdvancePaymentAmount() {
    if (this.leasingCalculatorForm.get('customerType').value === 'BUSINESS') {
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

  // submitForm() {
  //   if (!this.leasingCalculatorForm.valid) {
  //     Object.keys(this.leasingCalculatorForm.controls).forEach(field => {
  //       const control = this.leasingCalculatorForm.get(field);
  //       control.markAsTouched({onlySelf: true});
  //     });
  //   } else {
  //     this.leasingCalculator = this.leasingCalculatorForm.value;
  //     this.backendService.sendLeasingCalculatorInput(this.leasingCalculator).then(
  //       receivedData => {
  //         const received: any = receivedData;
  //         this.displayRepaymentSchedule(received.repaymentSchedule);
  //       },
  //       error => {
  //         console.log('Error: ' + error);
  //       }
  //     );
  //   }
  // }

  submitForm() {
    if (!this.leasingCalculatorForm.valid) {
      Object.keys(this.leasingCalculatorForm.controls).forEach(field => {
        const control = this.leasingCalculatorForm.get(field);
        control.markAsTouched({onlySelf: true});
        return null;
      });
    } else {
      this.leasingCalculator = this.leasingCalculatorForm.value;
      this.backendService.getRepaymentShedule(this.leasingCalculator).then((receivedData: any) => {
          this.repaymentSchedule = receivedData.repaymentSchedule;

          // this.repaymentSchedule = [
          //   {repaymentDate: '1', remainingAmountToRepay: '234'},
          //   {repaymentDate: '441', remainingAmountToRepay: '234'},
          // ];

          this.repaymentScheduleDataStream.next(this.repaymentSchedule);




        },
        error => {
          console.log('Error: ' + error);
        }
      );
    }

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

  isVisible(){
    console.log("false", this.visible);
    this.visible = true;
    console.log("true", this.visible);
    // (<HTMLInputElement>document.getElementById('matcard2')).disabled = true;
    (<HTMLInputElement>document.getElementById('matcard2')).hidden = false;
  }
}

// export interface Element {
//   // name: string;
//   // position: number;
//   // weight: number;
//   // symbol: string;
//
//   repaymentDate: string;
//   remainingAmountToRepay: number;
//   assetValuePaymentAmount: number;
//   interestPaymentAmount: number;
//   // private _contractFee: number;
//   totalPaymentAmount: number;
// }

// const ELEMENT_DATA: Element[] = [
  // {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  // {position: 11, name: 'Sodium', weight: 22.9897, symbol: 'Na'},
  // {position: 12, name: 'Magnesium', weight: 24.305, symbol: 'Mg'},
  // {position: 13, name: 'Aluminum', weight: 26.9815, symbol: 'Al'},
  // {position: 14, name: 'Silicon', weight: 28.0855, symbol: 'Si'},
  // {position: 15, name: 'Phosphorus', weight: 30.9738, symbol: 'P'},
  // {position: 16, name: 'Sulfur', weight: 32.065, symbol: 'S'},
  // {position: 17, name: 'Chlorine', weight: 35.453, symbol: 'Cl'},
  // {position: 18, name: 'Argon', weight: 39.948, symbol: 'Ar'},
  // {position: 19, name: 'Potassium', weight: 39.0983, symbol: 'K'},
  // {position: 20, name: 'Calcium', weight: 40.078, symbol: 'Ca'},
// ];

