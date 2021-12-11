import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TableIncomeComponent } from './table-income/table-income.component';
import { TableOutcomeComponent } from './table-outcome/table-outcome.component';
import { TableLoansComponent } from './table-loans/table-loans.component';
import { TableInvestmentsComponent } from './table-investments/table-investments.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { TAB_INCOME, TAB_OUTCOME, TAB_LOANS, TAB_INVESTMENTS } from './constants';

const appRoutes: Routes = [
  {
    path: '',
    component: SummaryPageComponent,
  },
  {
    path: TAB_INCOME,
    component: TableIncomeComponent,
  },
  {
    path: TAB_OUTCOME,
    component: TableOutcomeComponent,
  },
  {
    path: TAB_LOANS,
    component: TableLoansComponent,
  },
  {
    path: TAB_INVESTMENTS,
    component: TableInvestmentsComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(
      appRoutes,
      {
        preloadingStrategy: PreloadAllModules,
      }
    )],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
