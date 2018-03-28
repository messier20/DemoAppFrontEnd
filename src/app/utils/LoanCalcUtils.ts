import {Repayment} from '../models/Repayment';
import {DataStorageService} from '../services/data-storage-service.service';
import {LeasingCalculator} from '../models/LeasingCalculator';
import {DateUtils} from './DateUtils';
import {LeasingModel} from '../models/LeasingModel';

export class LoanCalcUtils {

  private repaymentPlan: Repayment[];
  private lastRepayment: Repayment;
  private repayment: Repayment;
  private lastDate: Date;
  private leasingCalculator: LeasingModel;
  private contractFee: number;
  private margin: number;
  private advancePaymentAmount: number;

  constructor(dataService) {
    this.leasingCalculator = dataService;
    this.contractFee = Number.parseFloat(this.leasingCalculator.contractFee);
    this.margin = this.leasingCalculator.margin;
    this.advancePaymentAmount = Number.parseFloat(this.leasingCalculator.advancePaymentAmount);
    this.repayment = new Repayment();
  }

  public calculateRepayments() {
    this.calculateFirstRepayment();
    this.addRepayment(this.repayment);
    this.lastRepayment = this.repayment;
    this.repayment = new Repayment();
    for (let i = 1; i <= this.leasingCalculator.leasePeriodInMonths; i++) {
      this.calculateNextRepayment();
      this.addRepayment(this.repayment);
      this.lastRepayment = this.repayment;
      this.repayment = new Repayment();
    }
    this.pushRepaymentPlanToDataStorageService();
  }

  private calculateFirstRepayment() {
    this.lastDate = DateUtils.calcFirstPaymentDate(this.leasingCalculator.paymentDate);
    this.repayment.repaymentDate = DateUtils.dateToString(this.lastDate);
    this.repayment.remainingAmountToRepay = this.leasingCalculator.assetPrice.toFixed(2);
    this.repayment.assetValuePaymentAmount = this.advancePaymentAmount.toFixed(2);
    this.repayment.interestPaymentAmount = Number(0).toFixed(2);
    this.repayment.contractFee = this.leasingCalculator.contractFee;
    this.repayment.totalPaymentAmount = (this.advancePaymentAmount + this.contractFee).toFixed(2);

  }

  private calculateNextRepayment() {
    this.lastDate = DateUtils.calcNextPaymentDate(this.lastDate, this.leasingCalculator.paymentDate);
    this.repayment.repaymentDate = DateUtils.dateToString(this.lastDate);
    this.repayment.remainingAmountToRepay = (Number.parseFloat(this.lastRepayment.remainingAmountToRepay)
      - Number.parseFloat(this.lastRepayment.assetValuePaymentAmount)).toFixed(2);
    this.repayment.assetValuePaymentAmount;
    this.repayment.interestPaymentAmount;
    this.repayment.contractFee = '';
    this.repayment.totalPaymentAmount;
  }

  private addRepayment(repayment: Repayment) {
    this.repaymentPlan[0] = repayment;
  }

  private pushRepaymentPlanToDataStorageService() {
   // this.dataService.setRepaymentPlan(this.repaymentPlan);
  }
}
