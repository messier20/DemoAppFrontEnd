export class ValidationAmounts {
  static readonly MIN_ASSET_PRICE_PRIVATE = 5000;
  static readonly MIN_ASSET_PRICE_BUSINESS = 10000;
  static readonly MAX_ASSET_PRICE = 9999999;
  static readonly MIN_ADVANCE_PAYMENT_AMOUNT_PRIVATE = 500;
  static readonly MIN_ADVANCE_PAYMENT_AMOUNT_BUSINESS = 1000;
  static readonly MAX_ADVANCE_PAYMENT_AMOUNT = 9999999;
  static readonly MIN_CONTRACT_FEE = 200;
  static readonly CONTRACT_FEE_SIZE = 0.01;
  static readonly ENGINE_POWER_MIN = 1;
  static readonly ENGINE_POWER_MAX = 9999;
  static readonly ADVANCE_PAYMENT_PERCENTAGE_MIN = 10;
  static readonly ADVANCE_PAYMENT_PERCENTAGE_MAX = 100;
  static readonly MARGIN_MIN = 3.2;
  static readonly MARGIN_MAX = 100;
  static readonly NAME_LENGTH_MAX = 40;
  static readonly NAME_LAST_LENGTH_MAX = 40;
  static readonly CODE_LENGTH = 11;
  static readonly EMAIL_LENGTH_MAX = 65;
  static readonly PHONE_NUMBER_LENGTH_MIN = 10;
  static readonly PHONE_NUMBER_LENGTH_MAX = 15;
  static readonly ADDRESS_LENGTH_MAX = 80;
  static readonly ID_LENGTH_MAX = 24;
}
