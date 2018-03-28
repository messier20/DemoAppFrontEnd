export class LeasingCalculator {

  customerType: string;
  assetPrice: number;
  advancePaymentPercentage: number;
  advancePaymentAmount: string;
  leasePeriodInMonths: number;
  margin: number;
  contractFee: string;
  paymentDate: number;

  constructor(leasingCalculator?: LeasingCalculator) {
    if (leasingCalculator) {
      this.customerType = leasingCalculator.customerType;
      this.assetPrice = leasingCalculator.assetPrice;
      this.advancePaymentPercentage = leasingCalculator.advancePaymentPercentage;
      this.advancePaymentAmount = leasingCalculator.advancePaymentAmount;
      this.leasePeriodInMonths = leasingCalculator.leasePeriodInMonths;
      this.margin = leasingCalculator.margin;
      this.contractFee = leasingCalculator.contractFee;
      this.paymentDate = leasingCalculator.paymentDate;
    }
  }
}
