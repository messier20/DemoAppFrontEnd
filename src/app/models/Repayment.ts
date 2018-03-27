export class Repayment {
  private _repaymentDate;
  private _remainingAmountToRepay;
  private _assetValuePaymentAmount;
  private _interestPaymentAmount;
  private _contractFee;
  private _totalPaymentAmount;


  constructor(repaymentDate, remainingAmountToRepay, assetValuePaymentAmount, interestPaymentAmount, contractFee, totalPaymentAmount) {
    this._repaymentDate = repaymentDate;
    this._remainingAmountToRepay = remainingAmountToRepay;
    this._assetValuePaymentAmount = assetValuePaymentAmount;
    this._interestPaymentAmount = interestPaymentAmount;
    this._contractFee = contractFee;
    this._totalPaymentAmount = totalPaymentAmount;
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
}
