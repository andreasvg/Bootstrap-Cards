import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AlertModule } from 'ngx-bootstrap';
import { EllipsisModule } from 'ngx-ellipsis';
import { FlipModule } from 'ngx-flip';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderBarComponent } from './header-bar/header-bar.component';
import { HomeComponent } from './home/home.component';
import { EmployeeService } from './employee.service';
import { BusinessCardComponent } from './business-card/business-card.component';
import { Html5Component } from './html5/html5.component';

@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HeaderBarComponent,
    HomeComponent,
    BusinessCardComponent,
    Html5Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AlertModule.forRoot(),

    EllipsisModule,
    FlipModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
