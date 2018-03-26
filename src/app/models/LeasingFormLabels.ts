export class LeasingFormLabels {
  private _leasingFormLabels = ['Customer Type', 'Asset Type', 'Car Brand', 'Car Model', 'Manufactured Date',
    'Engine Power(kW)', 'Asset Price(€)', 'Advance Payment Percentage(%)', 'Advance Payment Amount(€)', 'Contract Fee(€)',
    'Margin(%)', 'Leasing Period (months)', 'Payment Day'];

  public CUSTOMER_TYPE = 'Customer Type';
  public ASSET_TYPE = 'Asset Type';
  public CAR_BRAND = 'Car Brand';
  public CAR_MODEL = 'Car Model';
  public MANUFACTURED_DATE = 'Manufactured Date';
  public ENGINE_POWER = 'Engine Power(kW)';
  public ASSET_PRICE = 'Asset Price(€)';
  public ADVANCE_PAYMENT_PERCENTAGE = 'Advance Payment Percentage(%)';
  public ADVANCE_PAYMENT_AMOUNT = 'Advance Payment Amount(€)';
  public CONTRACT_FEE = 'Contract Fee(€)';
  public MARGIN = 'Margin(%)';
  public LEASING_PERIOD = 'Leasing Period (months)';
  public PAYMENT_DAY = 'Payment Day';

  constructor() {
  }

  get leasingFormLabels(): string[] {
    return this._leasingFormLabels;
  }

}
