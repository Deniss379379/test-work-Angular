import { Component } from '@angular/core';
import { transactions } from '../transactions';

@Component({
  selector: 'app-table-investments',
  templateUrl: './table-investments.component.html',
  styleUrls: ['./table-investments.component.scss']
})
export class TableInvestmentsComponent {

  transactions = transactions.data;

public getRandomNumber (num1: number, num2: number, afterDot: number ): number {
  const lower = Math.min(Math.abs(num1), Math.abs(num2));
  const upper = Math.max(Math.abs(num1), Math.abs(num2));
  const result = Math.random() * (upper - lower) + lower;
  return Number(result.toFixed(afterDot));
};
}
