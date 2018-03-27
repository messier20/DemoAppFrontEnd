export class Repayment {

  private _repaymentDate;
  private _remainingAmountToRepay;
  private _assetValuePaymentAmount;
  private _interestPaymentAmount;
  private _contractFee;
  private _totalPaymentAmount;

  constructor() {
  }

  get repaymentDate() {
    return this._repaymentDate;
  }

  get remainingAmountToRepay() {
    return this._remainingAmountToRepay;
  }

  get assetValuePaymentAmount() {
    return this._assetValuePaymentAmount;
  }

  get interestPaymentAmount() {
    return this._interestPaymentAmount;
  }

  get contractFee() {
    return this._contractFee;
  }

  get totalPaymentAmount() {
    return this._totalPaymentAmount;
  }

  set repaymentDate(value) {
    this._repaymentDate = value;
  }

  set remainingAmountToRepay(value) {
    this._remainingAmountToRepay = value;
  }

  set assetValuePaymentAmount(value) {
    this._assetValuePaymentAmount = value;
  }

  set interestPaymentAmount(value) {
    this._interestPaymentAmount = value;
  }

  set contractFee(value) {
    this._contractFee = value;
  }

  set totalPaymentAmount(value) {
    this._totalPaymentAmount = value;
  }
}
