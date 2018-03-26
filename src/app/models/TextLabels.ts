export class TextLabels {
  private _privateInfoLabels: string[];
  private _businessInfoLabels: string[];

  constructor() {
    this._privateInfoLabels = ['Personal Details', 'First Name', 'Last Name', 'Personal Code', 'Email', 'Phone no.', 'Address'];
    this._businessInfoLabels = ['Company Details', 'Company Name', '', 'Company Code', 'Email', 'Phone no.', 'Address'];
  }

  get privateInfoLabels(): string[] {
    return this._privateInfoLabels;
  }

  get businessInfoLabels(): string[] {
    return this._businessInfoLabels;
  }

}
