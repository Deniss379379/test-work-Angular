import { Component } from '@angular/core';
import {  arrayOfInvestments } from '../data';

@Component({
  selector: 'app-table-investments',
  templateUrl: './table-investments.component.html',
  styleUrls: ['./table-investments.component.scss']
})
export class TableInvestmentsComponent {

  transactions = arrayOfInvestments;

}
