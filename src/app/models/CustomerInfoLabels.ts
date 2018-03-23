export class CustomerInfoLabels {
  privateLabels: String[];
  businessLabels: String[];

  constructor() {
    this.privateLabels[0] = 'First Name';
    this.privateLabels[1] = 'Personal Code';
    this.privateLabels[2] = 'Email';
    this.privateLabels[3] = 'Phone no.';
    this.privateLabels[4] = 'Address';
    this.privateLabels[5] = 'Last Name';


    this.businessLabels[0] = 'Company Name';
    this.businessLabels[1] = 'Company Code';
    this.businessLabels[2] = 'Email';
    this.businessLabels[3] = 'Phone no.';
    this.businessLabels[4] = 'Address';
    this.businessLabels[5] = 'Empty';
  }
}
