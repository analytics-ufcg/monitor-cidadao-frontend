import { MunicipiosModule } from './municipios/municipios.module';
import { FormsModule } from '@angular/forms';
import { SharedModule } from './shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import {LOCALE_ID} from '@angular/core';
import localePt from '@angular/common/locales/pt';
import {registerLocaleData} from '@angular/common';

registerLocaleData(localePt, 'pt');

@NgModule({
 
  declarations: [
    AppComponent,
  ],

  imports: [
    SharedModule,
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,  
    BrowserAnimationsModule,
    FormsModule,
    MunicipiosModule
  ], 

  providers: [ 
     {
    provide: LOCALE_ID,
    useValue: 'pt'
}
],
  bootstrap: [AppComponent]
})
export class AppModule { }
