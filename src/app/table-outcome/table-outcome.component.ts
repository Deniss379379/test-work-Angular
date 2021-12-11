import { Component, OnInit } from '@angular/core';
import { arrayOfOutcoms } from '../data';



@Component({
  selector: 'app-table-outcome',
  templateUrl: './table-outcome.component.html',
  styleUrls: ['./table-outcome.component.scss']
})
export class TableOutcomeComponent implements OnInit {

  ngOnInit() {
  this.transactions;
  };

   transactions = arrayOfOutcoms;

}

