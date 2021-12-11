import { Component, OnInit } from '@angular/core';
import {  arrayOfInvestments } from '../data';

@Component({
  selector: 'app-table-investments',
  templateUrl: './table-investments.component.html',
  styleUrls: ['./table-investments.component.scss']
})
export class TableInvestmentsComponent implements OnInit {

  ngOnInit() {
  this.transactions;
  };

  transactions = arrayOfInvestments;

}
