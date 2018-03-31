export class LoanUtils {
  static calculateContractFee(assetPrice: number) {
    return assetPrice * 0.01 > 200 ? (assetPrice * 0.01).toFixed(2) : (200).toFixed(2);
  }

  static calculateAdvancePaymentAmount(assetPrice: number, advancePaymentPercentage: number) {
    return (assetPrice * (advancePaymentPercentage / 100)).toFixed(2);
  }

  static calculateAdvancePaymentPercentage(assetPrice: number, advancePaymentAmount: number) {
    return ((advancePaymentAmount / assetPrice) * 100).toFixed(2);
  }
}
