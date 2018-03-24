export class TextLabels {
  private _privateInfoLabels: string[];
  private _businessInfoLabels: string[];
  private _leasingFormLabels: string[];

  constructor() {
    this._privateInfoLabels = ['First Name', 'Personal Code', 'Email', 'Phone no.', 'Address', 'Last Name', 'Personal Details'];
    this._businessInfoLabels = ['Company Name', 'Company Code', 'Email', 'Phone no.', 'Address', 'Empty', 'Company Details'];
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
