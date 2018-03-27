import {Validators} from '@angular/forms';

export class CustomValidators {
  static customerTypeValidator = [Validators.required];
  static assetTypeValidator = [Validators.required];
  static carBrandValidator = [Validators.required];
  static carModelValidator = [Validators.required];
  static manufacturedDateValidator = [Validators.required];
  static enginePowerValidator = [Validators.required, Validators.min(1), Validators.max(9999)];
  static advancePaymentAmountValidator = [Validators.required, Validators.min(500), Validators.max(9999999)];
  static leasePeriodInMonthsValidator = [Validators.required];
  static contractFeeValidator = [Validators.required];
  static paymentDateValidator = [Validators.required];
  static assetPricePersonalValidator = [Validators.required, Validators.min(5000), Validators.max(9999999)];
  static assetPriceBusinessValidator = [Validators.required, Validators.min(10000), Validators.max(9999999)];
  static advancePaymentPercentageValidator = [Validators.required, Validators.min(10), Validators.max(100)];
  static marginValidator = [Validators.required, Validators.min(3.2), Validators.max(100)];
  static nameValidator = [Validators.required, Validators.maxLength(40)];
  static codeValidator = [Validators.required, Validators.minLength(11), Validators.maxLength(11), Validators.pattern('^\\d+$')];
  static emailValidator = [Validators.required, Validators.maxLength(65), Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')];
  static phoneNumberValidator = [Validators.required, Validators.minLength(10), Validators.maxLength(15), Validators.pattern('^\\d+$')];
  static addressValidator = [Validators.required, Validators.maxLength(80)];
  static lastNameValidator = [Validators.required, Validators.maxLength(40)];
}
