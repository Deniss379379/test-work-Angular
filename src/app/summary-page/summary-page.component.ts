import { Component } from '@angular/core';
import { 
          numberAllTransactions,
          numberIncomsTransactions,
          numberLoansTransactions,
          numberOutcomsTransactions,
          numberInvestmentsTransactions
        } from '../data';
import { TAB_INCOME, TAB_OUTCOME, TAB_LOANS, TAB_INVESTMENTS } from '../constants';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent  {

  income: string = TAB_INCOME;
  outcome: string = TAB_OUTCOME;
  loans: string = TAB_LOANS;
  investments: string = TAB_INVESTMENTS;

  total = numberAllTransactions;  
  totalIncoms = numberIncomsTransactions;
  totalOutcoms = numberOutcomsTransactions;
  totalLoans = numberLoansTransactions;
  totalInvestments = numberInvestmentsTransactions;


}
