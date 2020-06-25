import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';
import { LicitacaoRoutingModule } from './licitacao-routing.module';
import { LicitacaoComponent } from './licitacao.component';
import { InfoLicitacaoComponent } from './info-licitacao/info-licitacao.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    LicitacaoComponent,
    InfoLicitacaoComponent
  ],
  imports: [
    CommonModule,
    NgxPaginationModule,
    LicitacaoRoutingModule,
    SharedModule
  ],  exports: [
    LicitacaoComponent,
    InfoLicitacaoComponent
  ]
})
export class LicitacaoModule { }
