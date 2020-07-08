import { RelatoriosRoutingModule } from './relatorios-routing.module';
import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRelatoriosComponent } from './lista-relatorios/lista-relatorios.component';


@NgModule({
  declarations: [ListaRelatoriosComponent],
  imports: [
    CommonModule,
    RelatoriosRoutingModule,
    SharedModule
  ]
})
export class RelatoriosModule { }
