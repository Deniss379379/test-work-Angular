import { Component, OnInit } from '@angular/core';
import {  arrayOfLoans } from '../data';

@Component({
  selector: 'app-table-loans',
  templateUrl: './table-loans.component.html',
})
export class TableLoansComponent implements OnInit {

  ngOnInit() {
  this.transactions;
  };

  transactions = arrayOfLoans;

}
