import {Validators} from '@angular/forms';
import {PaymentSize} from '../constants/PaymentSize';

export class LoanUtils {
  static calculateContractFee(assetPrice: number) {
    return assetPrice * PaymentSize.CONTRACT_FEE_SIZE > PaymentSize.MIN_CONTRACT_FEE ?
      (assetPrice * PaymentSize.CONTRACT_FEE_SIZE).toFixed(2) : (PaymentSize.MIN_CONTRACT_FEE).toFixed(2);
  }

  static calculateAdvancePaymentAmount(assetPrice: number, advancePaymentPercentage: number) {
    return (assetPrice * (advancePaymentPercentage / 100)).toFixed(2);
  }

  static calculateAdvancePaymentPercentage(assetPrice: number, advancePaymentAmount: number) {
    return ((advancePaymentAmount / assetPrice) * 100).toFixed(2);
  }

  static calculateAdvancePaymentAmountValidators(assetPrice: number) {
    return [Validators.required, Validators.min(assetPrice * 0.1), Validators.max(assetPrice)];
  }

}
