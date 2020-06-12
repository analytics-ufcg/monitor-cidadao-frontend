import { SharedModule } from './shared/shared.module';
import { LicitacoesModule } from './licitacoes/licitacoes.module';
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
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbModule,
    LicitacoesModule,
    SharedModule,
    BrowserAnimationsModule
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
