export class LeasingFormLabels {

  public readonly LEASING_APPLICATION = 'Leasing Application';
  public readonly CUSTOMER_TYPE = 'Customer Type';
  public readonly ASSET_TYPE = 'Asset Type';
  public readonly CAR_BRAND = 'Car Brand';
  public readonly CAR_MODEL = 'Car Model';
  public readonly MANUFACTURED_DATE = 'Manufactured Date';
  public readonly ENGINE_POWER = 'Engine Power(kW)';
  public readonly ASSET_PRICE = 'Asset Price(€)';
  public readonly ADVANCE_PAYMENT_PERCENTAGE = 'Advance Payment Percentage(%)';
  public readonly ADVANCE_PAYMENT_AMOUNT = 'Advance Payment Amount(€)';
  public readonly CONTRACT_FEE = 'Contract Fee(€)';
  public readonly MARGIN = 'Margin(%)';
  public readonly LEASING_PERIOD = 'Leasing Period (months)';
  public readonly PAYMENT_DAY = 'Payment Day';
  public readonly THE_REMAINING_AMOUNT = 'The remaining amount';
  public readonly ASSET_PAYMENT_AMOUNT = 'Asset payment amount';
  public readonly INTEREST_PAYMENT_AMOUNT = 'Interest payment amount';
  public readonly CONCTRACT_FEE = 'Contract fee';
  public readonly TOTAL_PAYMENT_AMOUNT = 'Total payment amount';

  private _leasingFormLabels = [this.CUSTOMER_TYPE, this.ASSET_TYPE, this.CAR_BRAND, this.CAR_MODEL, this.MANUFACTURED_DATE,
    this.ENGINE_POWER, this.ASSET_PRICE, this.ADVANCE_PAYMENT_PERCENTAGE, this.ADVANCE_PAYMENT_AMOUNT, this.CONTRACT_FEE,
    this.MARGIN, this.LEASING_PERIOD, this.PAYMENT_DAY];

  private _leasingCalculatorLabels = [this.PAYMENT_DAY, this.THE_REMAINING_AMOUNT, this.ASSET_PAYMENT_AMOUNT,
    this.INTEREST_PAYMENT_AMOUNT, this.CONTRACT_FEE, this.TOTAL_PAYMENT_AMOUNT];
  constructor() {
  }

  get leasingFormLabels(): string[] {
    return this._leasingFormLabels;
  }

  get leasingCalculatorLabels(): string[] {
    return this._leasingCalculatorLabels;
  }
}
