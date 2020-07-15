import { SharedModule } from './../shared/shared.module';
import { PipesModule } from './../shared/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratosRoutingModule } from './contratos-routing.module';

import { InfoContratoComponent } from './info-contrato/info-contrato.component';


@NgModule({
  declarations: [ 
    InfoContratoComponent],
  imports: [
    CommonModule,
    ContratosRoutingModule,
    PipesModule,
    SharedModule
  ], exports: [
    InfoContratoComponent
  ]
})
export class ContratosModule { }
