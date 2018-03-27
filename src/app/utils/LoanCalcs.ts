import {Repayment} from '../models/Repayment';
import {DataStorageService} from '../services/data-storage-service.service';
import {LeasingCalculator} from '../models/LeasingCalculator';

export class LoanCalcs {

  private repaymentPlan: Repayment[];
  private lastRepayment: Repayment;
  private repayment: Repayment;
  private lastDate: Date;
  private leasingCalculator: LeasingCalculator;
  private contractFee: number;
  private margin: number;
  private advancePaymentAmount: number;

  constructor(private dataService: DataStorageService) {
    this.leasingCalculator = this.dataService.getLeasingCalculator();
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
    this.lastDate = this.calcFirstPaymentDate();
    this.repayment.repaymentDate(this.dateToString(this.lastDate));
    this.repayment.remainingAmountToRepay(this.leasingCalculator.assetPrice.toFixed(2));
    this.repayment.assetValuePaymentAmount(this.advancePaymentAmount.toFixed(2));
    this.repayment.interestPaymentAmount(Number(0).toFixed(2));
    this.repayment.contractFee(this.leasingCalculator.contractFee);
    this.repayment.totalPaymentAmount((this.advancePaymentAmount + this.contractFee).toFixed(2));

  }

  private calculateNextRepayment() {
    this.repayment.repaymentDate = this.dateToString(this.calcNextPaymentDate(this.lastRepayment.repaymentDate));
    this.repayment.remainingAmountToRepay = this.lastRepayment.remainingAmountToRepay - this.lastRepayment.assetValuePaymentAmount;
    this.repayment.assetValuePaymentAmount;
    this.repayment.interestPaymentAmount;
    this.repayment.contractFee = '';
    this.repayment.totalPaymentAmount;
  }

  private calcFirstPaymentDate(): Date {
    let date = this.getCurrentDate();
    date = this.addMonthToPaymentDate(date);
    date = this.setPaymentDay(date);
    return date;
  }

  private calcNextPaymentDate(lastDate: Date): Date {
    lastDate = this.addMonthToPaymentDate(lastDate);
    lastDate = this.setPaymentDay(lastDate);
    return lastDate;
  }

  private setPaymentDay(lastDate: Date): Date {
    if (this.leasingCalculator.paymentDate === 15) {
      lastDate.setDate(this.leasingCalculator.paymentDate);
      return lastDate;
    } else if (lastDate.getMonth() !== 1) {
      lastDate.setDate(this.leasingCalculator.paymentDate);
      return lastDate;
    } else if ((lastDate.getFullYear() / 4) === 0) {
      lastDate.setDate(29);
      return lastDate;
    } else {
      lastDate.setDate(28);
      return lastDate;
    }
  }

  private addMonthToPaymentDate(lastDate: Date): Date {
    lastDate.setMonth(lastDate.getMonth() + 1);
    return lastDate;
  }

  private getCurrentDate(): Date {
    return new Date();
  }

  private dateToString(date: Date): string {

    let d;
    let m;
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    if (dd < 10) {
      d = '0' + dd;
    } else {
      d = dd;
    }

    if (mm < 10) {
      m = '0' + mm;
    } else {
      m = mm;
    }

    return yyyy + '-' + m + '-' + d;
  }

  private addRepayment(repayment: Repayment) {
    this.repaymentPlan.push(repayment);
  }

  private pushRepaymentPlanToDataStorageService() {
    this.dataService.setRepaymentPlan(this.repaymentPlan);
  }
}
