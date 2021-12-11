import { Component, HostListener } from '@angular/core';
<<<<<<< HEAD
import { TAB_INCOME, TAB_OUTCOME, TAB_INVESTMENTS, TAB_LOANS } from '../constants';
=======
import { TAB_INCOME, TAB_OUTCOME, TAB_LOANS, TAB_INVESTMENTS } from '../constants';
>>>>>>> routing

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent  {

<<<<<<< HEAD
income: string = TAB_INCOME;
outcome: string = TAB_OUTCOME;
investments: string = TAB_INVESTMENTS;
loans: string = TAB_LOANS;
=======
  income: string = TAB_INCOME;
  outcome: string = TAB_OUTCOME;
  loans: string = TAB_LOANS;
  investments: string = TAB_INVESTMENTS;
>>>>>>> routing

//linkStyle = "nav-link";

  //linkStyle = string;
    

/*
doTest(event:MouseEvent) {
  onmouseup(2);
if (event.button === 2)
  this.linkStyle = "nav-link--active";
  console.log('testMouse');
}
}
*/
//  click(){
//  this.linkStyle = "nav-link--active";
//  console.log('test');
//  console.log(onmousedown(which))
//  }
//selector = document.;

/*@HostListener("document:mouseup", ['$event'])
onmouseup(ev:MouseEvent) {
  console.log("test pass")

}
*/

/*
@HostListener('click') onClick() {
window.alert('Host Elevent Clicked')
}
*/

}



