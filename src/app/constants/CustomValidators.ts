import {Validators} from '@angular/forms';
import {ValidationAmounts} from './ValidationAmounts';

export class CustomValidators {
  static readonly customerTypeValidator = [Validators.required];
  static readonly assetTypeValidator = [Validators.required];
  static readonly carBrandValidator = [Validators.required];
  static readonly carModelValidator = [Validators.required];
  static readonly manufacturedDateValidator = [Validators.required];
  static readonly enginePowerValidator = [Validators.required,
    Validators.min(ValidationAmounts.ENGINE_POWER_MIN),
    Validators.max(ValidationAmounts.ENGINE_POWER_MAX)];
  static readonly advancePaymentAmountPrivateValidator = [Validators.required,
    Validators.min(ValidationAmounts.MIN_ADVANCE_PAYMENT_AMOUNT_PRIVATE),
    Validators.max(ValidationAmounts.MAX_ADVANCE_PAYMENT_AMOUNT)];
  static readonly advancePaymentAmountBusinessValidator = [Validators.required,
    Validators.min(ValidationAmounts.MIN_ADVANCE_PAYMENT_AMOUNT_BUSINESS),
    Validators.max(ValidationAmounts.MAX_ADVANCE_PAYMENT_AMOUNT)];
  static readonly leasePeriodInMonthsValidator = [Validators.required];
  static readonly contractFeeValidator = [Validators.required];
  static readonly paymentDateValidator = [Validators.required];
  static readonly assetPricePersonalValidator = [Validators.required,
    Validators.min(ValidationAmounts.MIN_ASSET_PRICE_PRIVATE), Validators.max(ValidationAmounts.MAX_ASSET_PRICE)];
  static readonly assetPriceBusinessValidator = [Validators.required,
    Validators.min(ValidationAmounts.MIN_ASSET_PRICE_BUSINESS),
    Validators.max(ValidationAmounts.MAX_ASSET_PRICE)];
  static readonly advancePaymentPercentageValidator = [Validators.required,
    Validators.min(ValidationAmounts.ADVANCE_PAYMENT_PERCENTAGE_MIN),
    Validators.max(ValidationAmounts.ADVANCE_PAYMENT_PERCENTAGE_MAX)];
  static readonly marginValidator = [Validators.required,
    Validators.min(ValidationAmounts.MARGIN_MIN),
    Validators.max(ValidationAmounts.MARGIN_MAX)];
  static readonly nameValidator = [Validators.required, Validators.maxLength(ValidationAmounts.NAME_LENGTH_MAX)];
  static readonly codeValidator = [Validators.required, Validators.minLength(ValidationAmounts.CODE_LENGTH),
    Validators.maxLength(ValidationAmounts.CODE_LENGTH), Validators.pattern('^\\d+$')];
  static readonly emailValidator = [Validators.required, Validators.maxLength(ValidationAmounts.EMAIL_LENGTH_MAX),
    Validators.pattern('[a-z0-9!#$%&\'*+/=?^_`{|}~-]+(?:\.' +
      '[a-z0-9!#$%&\'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?')];
  static readonly phoneNumberValidator = [Validators.required,
    Validators.minLength(ValidationAmounts.PHONE_NUMBER_LENGTH_MIN),
    Validators.maxLength(ValidationAmounts.PHONE_NUMBER_LENGTH_MAX),
    Validators.pattern('^\\d+$')];
  static readonly addressValidator = [Validators.required, Validators.maxLength(ValidationAmounts.ADDRESS_LENGTH_MAX)];
  static readonly lastNameValidator = [Validators.required, Validators.maxLength(ValidationAmounts.NAME_LAST_LENGTH_MAX)];
}
