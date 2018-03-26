export class TextLabels {
  private _privateInfoLabels: string[];
  private _businessInfoLabels: string[];
  private _leasingFormLabels: string[];

  constructor() {
    this._privateInfoLabels = ['Personal Details', 'First Name', 'Last Name', 'Personal Code', 'Email', 'Phone no.', 'Address'];
    this._businessInfoLabels = ['Company Details', 'Company Name', '', 'Company Code', 'Email', 'Phone no.', 'Address'];
    this._leasingFormLabels = ['Customer Type', 'Asset Type', 'Car Brand', 'Car Model', 'Manufactured Date',
      'Engine Power', 'Asset Price', 'Advance Payment Percentage', 'Advance Payment Amount', 'Contract Fee',
      'Margin', 'Leasing Period (months)', 'Payment Day'];
  }

  get privateInfoLabels(): string[] {
    return this._privateInfoLabels;
  }

  get businessInfoLabels(): string[] {
    return this._businessInfoLabels;
  }

  get leasingFormLabels(): string[] {
    return this._leasingFormLabels;
  }
}
