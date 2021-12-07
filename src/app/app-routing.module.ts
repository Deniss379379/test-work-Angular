import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableIncomeComponent } from './table-income/table-income.component';
import { TableOutcomeComponent } from './table-outcome/table-outcome.component';
import { TableLoansComponent } from './table-loans/table-loans.component';
import { TableInvestmentsComponent } from './table-investments/table-investments.component';
import { SummaryPageComponent } from './summary-page/summary-page.component';
import { TopBarComponent } from './top-bar/top-bar.component';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
      { path: '', component: SummaryPageComponent},
      { path: 'navigator', component: TopBarComponent },
      { path: 'navigator?tab=0', component: TableIncomeComponent },
      { path: 'navigator?tab=1', component: TableOutcomeComponent },
      { path: 'navigator?tab=2', component: TableLoansComponent },
      { path: 'navigator?tab=3', component: TableInvestmentsComponent },
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
