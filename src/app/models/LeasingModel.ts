export class LeasingModel {

  customerType: string;
  assetType: string;
  carBrand: string;
  carModel: string;
  manufacturedDate: string;
  enginePower: number;
  assetPrice: number;
  advancePaymentPercentage: number;
  advancePaymentAmount: string;
  leasePeriodInMonths: number;
  margin: number;
  contractFee: string;
  paymentDate: number;


  constructor(leasingModel?: LeasingModel) {
    if (leasingModel) {
      this.customerType = leasingModel.customerType;
      this.assetType = leasingModel.assetType;
      this.carBrand = leasingModel.carBrand;
      this.carModel = leasingModel.carModel;
      this.manufacturedDate = leasingModel.manufacturedDate;
      this.enginePower = leasingModel.enginePower;
      this.assetPrice = leasingModel.assetPrice;
      this.advancePaymentPercentage = leasingModel.advancePaymentPercentage;
      this.advancePaymentAmount = leasingModel.advancePaymentAmount;
      this.leasePeriodInMonths = leasingModel.leasePeriodInMonths;
      this.margin = leasingModel.margin;
      this.contractFee = leasingModel.contractFee;
      this.paymentDate = leasingModel.paymentDate;
    }
  }


}
