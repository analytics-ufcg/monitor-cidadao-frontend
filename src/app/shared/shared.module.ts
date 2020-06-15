import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BuscaMunicipioComponent } from './components/busca-municipio/busca-municipio.component';


@NgModule({
  declarations: [BuscaMunicipioComponent],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    NgbTypeaheadModule
  ], exports:[
    BuscaMunicipioComponent
  ]
})
export class SharedModule { }
