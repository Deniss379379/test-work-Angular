import { Component } from '@angular/core';
import {  arrayOfLoans } from '../data';

@Component({
  selector: 'app-table-loans',
  templateUrl: './table-loans.component.html',
  styleUrls: ['./table-loans.component.scss']
})
export class TableLoansComponent {

  transactions = arrayOfLoans;

}
