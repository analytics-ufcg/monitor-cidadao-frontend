import { LicitacoesListarComponent } from './licitacoes-listar/licitacoes-listar.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [LicitacoesListarComponent],
  
  imports: [
    CommonModule,
    NgxPaginationModule
  ], 
  
  exports: [
    LicitacoesListarComponent
  ]
})
export class LicitacoesModule { }
