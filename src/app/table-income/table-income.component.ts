import { Component } from '@angular/core';
import { transactions } from '../transactions';
@Component({
  selector: 'app-table-income',
  templateUrl: './table-income.component.html',
  styleUrls: ['./table-income.component.scss']
})
export class TableIncomeComponent {

transactions = transactions.data;
public getRandomNumber (num1: number, num2: number, afterDot: number ): number {
  const lower = Math.min(Math.abs(num1), Math.abs(num2));
  const upper = Math.max(Math.abs(num1), Math.abs(num2));
  const result = Math.random() * (upper - lower) + lower;
  return Number(result.toFixed(afterDot));
};

}
