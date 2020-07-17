import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { SharedModule } from './../shared/shared.module';
import { PipesModule } from './../shared/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContratosRoutingModule } from './contratos-routing.module';

import { InfoContratoComponent } from './info-contrato/info-contrato.component';
import { ListaContratosComponent } from './lista-contratos/lista-contratos.component';


@NgModule({
  declarations: [ 
    InfoContratoComponent, ListaContratosComponent],
  imports: [
    CommonModule,
    ContratosRoutingModule,
    NgxPaginationModule,
    PipesModule,
    SharedModule,
    NgbModule
  ], exports: [
    InfoContratoComponent
  ]
})
export class ContratosModule { }
