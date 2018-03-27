import {Validators} from '@angular/forms';

export class CustomValidators {
  static readonly customerTypeValidator = [Validators.required];
  static readonly assetTypeValidator = [Validators.required];
  static readonly carBrandValidator = [Validators.required];
  static readonly carModelValidator = [Validators.required];
  static readonly manufacturedDateValidator = [Validators.required];
  static readonly enginePowerValidator = [Validators.required, Validators.min(1), Validators.max(9999)];
  static readonly advancePaymentAmountValidator = [Validators.required, Validators.min(500), Validators.max(9999999)];
  static readonly leasePeriodInMonthsValidator = [Validators.required];
  static readonly contractFeeValidator = [Validators.required];
  static readonly paymentDateValidator = [Validators.required];
  static readonly assetPricePersonalValidator = [Validators.required, Validators.min(5000), Validators.max(9999999)];
  static readonly assetPriceBusinessValidator = [Validators.required, Validators.min(10000), Validators.max(9999999)];
  static readonly advancePaymentPercentageValidator = [Validators.required, Validators.min(10), Validators.max(100)];
  static readonly marginValidator = [Validators.required, Validators.min(3.2), Validators.max(100)];
  static readonly nameValidator = [Validators.required, Validators.maxLength(40)];
  static readonly codeValidator = [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^\\d+$')];
  static readonly emailValidator = [Validators.required, Validators.maxLength(65), Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')];
  static readonly phoneNumberValidator = [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern('^\\d+$')];
  static readonly addressValidator = [Validators.required, Validators.maxLength(80)];
  static readonly lastNameValidator = [Validators.required, Validators.maxLength(40)];
}
