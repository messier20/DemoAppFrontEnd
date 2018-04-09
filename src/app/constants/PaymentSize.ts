export class PaymentSize {
  static readonly MIN_ASSET_PRICE_PRIVATE = 5000;
  static readonly MIN_ASSET_PRICE_BUSINESS = 10000;
  static readonly MIN_ADVANCE_PAYMENT_AMOUNT_PRIVATE = PaymentSize.MIN_ASSET_PRICE_PRIVATE * 0.1;
  static readonly MIN_ADVANCE_PAYMENT_AMOUNT_BUSINESS = PaymentSize.MIN_ASSET_PRICE_BUSINESS * 0.1;
  static readonly MAX_ADVANCE_PAYMENT_AMOUNT = 9999999;
  static readonly MIN_CONTRACT_FEE = 200;
  static readonly CONTRACT_FEE_SIZE = 0.01;
}
