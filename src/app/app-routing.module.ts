import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
>>>>>>> routing
import { TableIncomeComponent } from './table-income/table-income.component';
import { TableOutcomeComponent } from './table-outcome/table-outcome.component';
import { TableLoansComponent } from './table-loans/table-loans.component';
import { TableInvestmentsComponent } from './table-investments/table-investments.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
<<<<<<< HEAD
=======
import { TAB_INCOME, TAB_OUTCOME, TAB_LOANS, TAB_INVESTMENTS } from './constants';
>>>>>>> routing

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
<<<<<<< HEAD
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
>>>>>>> routing
})

export class AppRoutingModule { }
