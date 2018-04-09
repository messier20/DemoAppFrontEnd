export class CustomerInfoLabels {

  public readonly PERSONAL_DETAILS = 'Personal Details';
  public readonly FIRST_NAME = 'First Name';
  public readonly LAST_NAME = 'Last Name';
  public readonly PERSONAL_CODE = 'Personal Code';
  public readonly EMAIL = 'Email';
  public readonly PHONE_NUMBER = 'Phone no.';
  public readonly ADDRESS = 'Address';
  public readonly COMPANY_NAME = 'Company Name';
  public readonly COMPANY_DETAILS = 'Company Details';
  public readonly COMPANY_CODE = 'Company Code';

  private _privateInfoLabels = [this.PERSONAL_DETAILS, this.FIRST_NAME, this.LAST_NAME, this.PERSONAL_CODE,
    this.EMAIL, this.PHONE_NUMBER, this.ADDRESS];
  private _businessInfoLabels = [this.COMPANY_DETAILS, this.COMPANY_NAME, '', this.COMPANY_CODE, this.EMAIL,
    this.PHONE_NUMBER, this.ADDRESS];

  constructor() {
  }

  get privateInfoLabels(): string[] {
    return this._privateInfoLabels;
  }

  get businessInfoLabels(): string[] {
    return this._businessInfoLabels;
  }

}
