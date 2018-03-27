export class DateUtils {

  static getCurrentDate(): Date {
    return new Date();
  }

  static dateToString(date: Date): string {

    let d;
    let m;
    const dd = date.getDate();
    const mm = date.getMonth() + 1;
    const yyyy = date.getFullYear();

    if (dd < 10) {
      d = '0' + dd;
    } else {
      d = dd;
    }

    if (mm < 10) {
      m = '0' + mm;
    } else {
      m = mm;
    }

    return yyyy + '-' + m + '-' + d;
  }


  static setPaymentDay(lastDate: Date): Date {
    if (this.leasingCalculator.paymentDate === 15) {
      lastDate.setDate(this.leasingCalculator.paymentDate);
      return lastDate;
    } else if (lastDate.getMonth() !== 1) {
      lastDate.setDate(this.leasingCalculator.paymentDate);
      return lastDate;
    } else if ((lastDate.getFullYear() / 4) === 0) {
      lastDate.setDate(29);
      return lastDate;
    } else {
      lastDate.setDate(28);
      return lastDate;
    }
  }

  static calcFirstPaymentDate(): Date {
    let date = this.getCurrentDate();
    date = this.addMonthToPaymentDate(date);
    date = this.setPaymentDay(date);
    return date;
  }

  static calcNextPaymentDate(lastDate: Date): Date {
    lastDate = this.addMonthToPaymentDate(lastDate);
    lastDate = this.setPaymentDay(lastDate);
    return lastDate;
  }

  static addMonthToPaymentDate(lastDate: Date): Date {
    lastDate.setMonth(lastDate.getMonth() + 1);
    return lastDate;
  }
}
