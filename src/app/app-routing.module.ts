import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TAB_INCOME, TAB_OUTCOME, TAB_LOANS, TAB_INVESTMENTS }  from "./constants";
import { TableIncomeComponent } from './table-income/table-income.component';
import { TableOutcomeComponent } from './table-outcome/table-outcome.component';
import { TableLoansComponent } from './table-loans/table-loans.component';
import { TableInvestmentsComponent } from './table-investments/table-investments.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      { path: '', component: SummaryPageComponent},
      { path: TAB_INCOME, component: TableIncomeComponent },
      { path: TAB_OUTCOME, component: TableOutcomeComponent },
      { path: TAB_LOANS, component: TableLoansComponent },
      { path: TAB_INVESTMENTS, component: TableInvestmentsComponent },
  ])],
  exports: [RouterModule]
})

export class AppRoutingModule { }
