import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { DashboardModule } from './layout/dashboard/dashboard.module';
import { FeeService } from './services/fees/fee.service';
import { MypackageComponent } from './components/packages/mypackage/mypackage.component';
import { ChangepackageComponent } from './components/packages/changepackage/changepackage.component';


@NgModule({
  declarations: [
    
    AppComponent,
          MypackageComponent,
          ChangepackageComponent
    
   
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot( [
     
    ]),
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    DashboardModule,
    HttpClientModule,
  ],
  providers: [FeeService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {}
 }
