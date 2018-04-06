import {Validators} from '@angular/forms';
import {ValidationAmounts} from '../constants/ValidationAmounts';

export class LoanUtils {
  static calculateContractFee(assetPrice: number) {
    return assetPrice * ValidationAmounts.CONTRACT_FEE_SIZE > ValidationAmounts.MIN_CONTRACT_FEE ?
      (assetPrice * ValidationAmounts.CONTRACT_FEE_SIZE).toFixed(2) : (ValidationAmounts.MIN_CONTRACT_FEE).toFixed(2);
  }

  static calculateAdvancePaymentAmount(assetPrice: number, advancePaymentPercentage: number) {
    return (assetPrice * (advancePaymentPercentage / 100)).toFixed(2);
  }

  static calculateAdvancePaymentPercentage(assetPrice: number, advancePaymentAmount: number) {
    return ((advancePaymentAmount / assetPrice) * 100).toFixed(2);
  }

  static calculateAdvancePaymentAmountValidators(assetPrice: number) {
    return [Validators.required, Validators.min(Number.parseFloat((assetPrice * 0.1).toFixed(2))), Validators.max(assetPrice)];
  }

}
