import {Repayment} from '../models/Repayment';
import {DataStorageService} from '../services/data-storage-service.service';

export class LoanCalcs {

  private repaymentPlan: Repayment[];
  private repayment: Repayment;

  constructor(private dataService: DataStorageService) {
  }

  public calculateRepayments() {
    this.addRepayment();
    this.pushRepaymentPlanToDataStorageService();
  }

  private addRepayment(repayment: Repayment) {
    this.repaymentPlan.push(repayment);
  }

  private pushRepaymentPlanToDataStorageService() {
    this.dataService.setRepaymentPlan(this.repaymentPlan);
  }
}


