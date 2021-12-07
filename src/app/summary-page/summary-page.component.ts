import { Component } from '@angular/core';
import { transactions } from '../transactions';

@Component({
  selector: 'app-summary-page',
  templateUrl: './summary-page.component.html',
  styleUrls: ['./summary-page.component.scss']
})
export class SummaryPageComponent  {

  transactions = transactions;

public getNumberTransactions ( type: string ) {
  const amountArray = transactions.data.filter((item) => item.type === type);
  return amountArray.length;
};
}
