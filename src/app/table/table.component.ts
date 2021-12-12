import { Component, OnInit } from '@angular/core';
import {transactions} from '../data/rawData';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

//  ngOnInit(): void {
//  }
  
  ngOnInit() {
  this.transactions;
  }
  
  transactions:[] = [];
}
