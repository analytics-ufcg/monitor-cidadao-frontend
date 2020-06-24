import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRelatoriosComponent } from './lista-relatorios/lista-relatorios.component';
import { RelatorioComponent } from './relatorio/relatorio.component';



@NgModule({
  declarations: [ListaRelatoriosComponent, RelatorioComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class RelatoriosModule { }
