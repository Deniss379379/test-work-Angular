import { Component, OnInit } from '@angular/core';
import { arrayOfIncoms } from '../data';
@Component({
  selector: 'app-table-income',
  templateUrl: './table-income.component.html',
})
export class TableIncomeComponent implements OnInit {

  ngOnInit() {
  this.transactions;
  };
  
transactions = arrayOfIncoms;

}
