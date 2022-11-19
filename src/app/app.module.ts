import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CountriesComponent } from './countries/countries.component';
import { CserviceSevice } from './cservice.service';

@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [CserviceSevice],
  bootstrap: [AppComponent]
})
export class AppModule { }
