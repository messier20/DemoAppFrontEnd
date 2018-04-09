export class Repayment {

  private _repaymentDate: string;
  private _remainingAmountToRepay: number;
  private _assetValuePaymentAmount: number;
  private _interestPaymentAmount: number;
  private _totalPaymentAmount: number;

  constructor() {
  }

  get repaymentDate(): string {
    return this._repaymentDate;
  }

  set repaymentDate(value: string) {
    this._repaymentDate = value;
  }

  get remainingAmountToRepay(): number {
    return this._remainingAmountToRepay;
  }

  set remainingAmountToRepay(value: number) {
    this._remainingAmountToRepay = value;
  }

  get assetValuePaymentAmount(): number {
    return this._assetValuePaymentAmount;
  }

  set assetValuePaymentAmount(value: number) {
    this._assetValuePaymentAmount = value;
  }

  get interestPaymentAmount(): number {
    return this._interestPaymentAmount;
  }

  set interestPaymentAmount(value: number) {
    this._interestPaymentAmount = value;
  }

  // get contractFee(): number {
  //   return this._contractFee;
  // }
  //
  // set contractFee(value: number) {
  //   this._contractFee = value;
  // }

  get totalPaymentAmount(): number {
    return this._totalPaymentAmount;
  }

  set totalPaymentAmount(value: number) {
    this._totalPaymentAmount = value;
  }
}
