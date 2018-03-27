import {Validators} from '@angular/forms';

export class Repayment {
  private _date;
  private _leftToRepay;
  private _repayAmount;
  private _repayMargin;
  private _costs;
  private _totalRepay;

  constructor(date, leftToRepay, repayAmount, repayMargin, costs, totalRepay) {
    this._date = date;
    this._leftToRepay = leftToRepay;
    this._repayAmount = repayAmount;
    this._repayMargin = repayMargin;
    this._costs = costs;
    this._totalRepay = totalRepay;
  }

  get date() {
    return this._date;
  }

  get leftToRepay() {
    return this._leftToRepay;
  }

  get repayAmount() {
    return this._repayAmount;
  }

  get repayMargin() {
    return this._repayMargin;
  }

  get costs() {
    return this._costs;
  }

  get totalRepay() {
    return this._totalRepay;
  }
}
