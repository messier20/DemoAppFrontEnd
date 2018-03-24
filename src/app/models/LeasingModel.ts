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

  private leasingModelArray: string[];

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

  public toArray(): string[] {
    this.leasingModelArray[0] = this.customerType;
    this.leasingModelArray[1] = this.assetType;
    this.leasingModelArray[2] = this.carBrand;
    this.leasingModelArray[3] = this.carModel;
    this.leasingModelArray[4] = this.manufacturedDate;
    this.leasingModelArray[5] = this.enginePower.toString();
    this.leasingModelArray[6] = this.assetPrice.toString();
    this.leasingModelArray[7] = this.advancePaymentPercentage.toString();
    this.leasingModelArray[8] = this.advancePaymentAmount;
    this.leasingModelArray[9] = this.leasePeriodInMonths.toString();
    this.leasingModelArray[10] = this.margin.toString();
    this.leasingModelArray[11] = this.contractFee;
    this.paymentDate[12] = this.paymentDate;

    return this.leasingModelArray;
  }
}
