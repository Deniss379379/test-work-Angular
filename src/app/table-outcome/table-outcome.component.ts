import { Component } from '@angular/core';
import { arrayOfOutcoms } from '../data';



@Component({
  selector: 'app-table-outcome',
  templateUrl: './table-outcome.component.html',
  styleUrls: ['./table-outcome.component.scss']
})
export class TableOutcomeComponent {

   transactions = arrayOfOutcoms;

}

