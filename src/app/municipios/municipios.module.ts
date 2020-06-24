import { SharedModule } from './../shared/shared.module';
import { PipesModule } from './../shared/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { MunicipioRoutingModule } from './municipios-routing.module';

import { MunicipiosComponent } from './municipios.component';
import { ListaContratosComponent } from './lista-contratos/lista-contratos.component';
import { ListaLicitacoesComponent } from './lista-licitacoes/lista-licitacoes.component';

@NgModule({
  declarations: [
    MunicipiosComponent,
    ListaContratosComponent,
    ListaLicitacoesComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MunicipioRoutingModule,
    PipesModule,
    SharedModule
  ],
  exports:[
    MunicipiosComponent
  ]
})
export class MunicipiosModule { }

