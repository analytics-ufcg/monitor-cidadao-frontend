import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MunicipiosLicitacoesComponent } from './municipios-licitacoes/municipios-licitacoes.component';
import { MunicipiosComponent } from './municipios.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MunicipioRoutingModule } from './municipios-routing.module';

@NgModule({
  declarations: [
    MunicipiosLicitacoesComponent,
    MunicipiosComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    MunicipioRoutingModule,
  ],
  exports:[
    MunicipiosComponent,
    MunicipiosLicitacoesComponent
  ]
})
export class MunicipiosModule { }

