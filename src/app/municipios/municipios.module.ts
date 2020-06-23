import { PipesModule } from './../shared/pipes/pipes.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipiosLicitacoesComponent } from './municipios-licitacoes/municipios-licitacoes.component';
import { MunicipiosComponent } from './municipios.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MunicipioRoutingModule } from './municipios-routing.module';
import { ListaContratosComponent } from './lista-contratos/lista-contratos.component';

@NgModule({
  declarations: [
    MunicipiosLicitacoesComponent,
    MunicipiosComponent,
    ListaContratosComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MunicipioRoutingModule,
    PipesModule
  ],
  exports:[
    MunicipiosComponent,
    MunicipiosLicitacoesComponent
  ]
})
export class MunicipiosModule { }

