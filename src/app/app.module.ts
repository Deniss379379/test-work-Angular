import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//==========
//import { RouterModule } from '@angular/router'
//import { LearnAppModule } from './learnApp/app.module';
//import {HttpClient, HttpClientModule} from '@angular/common/http';
import { TableIncomeComponent } from './table-income/table-income.component';
import { TableOutcomeComponent } from './table-outcome/table-outcome.component';
import { TableLoansComponent } from './table-loans/table-loans.component';
import { TableInvestmentsComponent } from './table-investments/table-investments.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';



@NgModule({
  declarations: [
    AppComponent,
   TopBarComponent,
   TableIncomeComponent,
   TableOutcomeComponent,
   TableLoansComponent,
   TableInvestmentsComponent,
   SummaryPageComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
