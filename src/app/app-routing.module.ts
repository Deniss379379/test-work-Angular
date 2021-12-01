import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPage2Component } from './main-page2/main-page2.component';
import { TestAppComponent } from './testApp/app.component';



const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot([
    {path: '', component: MainPage2Component },
    {path: 'test', component: TestAppComponent}
  ])],
  exports: [RouterModule]
})
export class AppRoutingModule { }
