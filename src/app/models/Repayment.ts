export class Repayment {

  private _repaymentDate: string;
  private _remainingAmountToRepay: string;
  private _assetValuePaymentAmount: string;
  private _interestPaymentAmount: string;
  private _contractFee: string;
  private _totalPaymentAmount: string;

  constructor() {
  }

  get repaymentDate(): string {
    return this._repaymentDate;
  }

  set repaymentDate(value: string) {
    this._repaymentDate = value;
  }

  get remainingAmountToRepay(): string {
    return this._remainingAmountToRepay;
  }

  set remainingAmountToRepay(value: string) {
    this._remainingAmountToRepay = value;
  }

  get assetValuePaymentAmount(): string {
    return this._assetValuePaymentAmount;
  }

  set assetValuePaymentAmount(value: string) {
    this._assetValuePaymentAmount = value;
  }

  get interestPaymentAmount(): string {
    return this._interestPaymentAmount;
  }

  set interestPaymentAmount(value: string) {
    this._interestPaymentAmount = value;
  }

  get contractFee(): string {
    return this._contractFee;
  }

  set contractFee(value: string) {
    this._contractFee = value;
  }

  get totalPaymentAmount(): string {
    return this._totalPaymentAmount;
  }

  set totalPaymentAmount(value: string) {
    this._totalPaymentAmount = value;
  }
}
