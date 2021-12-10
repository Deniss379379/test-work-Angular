import { Component } from '@angular/core';
import { arrayOfIncoms } from '../data';
@Component({
  selector: 'app-table-income',
  templateUrl: './table-income.component.html',
  styleUrls: ['./table-income.component.scss']
})
export class TableIncomeComponent {

transactions = arrayOfIncoms;

}
