import { Component } from '@angular/core';
import { 
          numberAllTransactions,
          numberIncomsTransactions,
          numberLoansTransactions,
          numberOutcomsTransactions,
          numberInvestmentsTransactions
        } from '../data';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent  {

  total = numberAllTransactions;  
  totalIncoms = numberIncomsTransactions;
  totalOutcoms = numberOutcomsTransactions;
  totalLoans = numberLoansTransactions;
  totalInvestments = numberInvestmentsTransactions;


}
