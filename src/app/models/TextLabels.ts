export class TextLabels {
  private _privateInfoLabels: string[];
  private _businessInfoLabels: string[];


  constructor() {
    this._privateInfoLabels = ['First Name', 'Personal Code', 'Email', 'Phone no.', 'Address', 'Last Name'];
    this._businessInfoLabels = ['Company Name', 'Company Code', 'Email', 'Phone no.', 'Address', 'Empty'];

  }

  get privateInfoLabels(): string[] {
    return this._privateInfoLabels;
  }

  get businessInfoLabels(): string[] {
    return this._businessInfoLabels;
  }
}
