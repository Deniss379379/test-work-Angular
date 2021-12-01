import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
//==========
import { RouterModule } from '@angular/router'
//import { LearnAppModule } from './learnApp/app.module';
import { TestAppComponent } from './testApp/app.component';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPage2Component } from './main-page2/main-page2.component';
import { ListIncomeComponent } from './list-income/list-income.component';



@NgModule({
  declarations: [
    AppComponent,
//  LearnAppModule,
    TestAppComponent,
  MainPageComponent,
  MainPage2Component,
  ListIncomeComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
