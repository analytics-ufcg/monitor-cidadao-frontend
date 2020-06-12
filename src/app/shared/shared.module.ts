import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BuscaMunicipioComponent } from './components/busca-municipio/busca-municipio.component';


@NgModule({
  declarations: [BuscaMunicipioComponent],
  imports: [
    CommonModule
  ], exports:[
    BuscaMunicipioComponent
  ]
})
export class SharedModule { }
