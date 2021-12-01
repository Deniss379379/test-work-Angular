import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { TestAppComponent } from './app.component';

@NgModule({
  declarations: [
    TestAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [TestAppComponent]
})
export class TestAppModule { }
