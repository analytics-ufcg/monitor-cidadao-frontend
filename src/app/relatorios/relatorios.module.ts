import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListaRelatoriosComponent } from './lista-relatorios/lista-relatorios.component';
import { RelatorioComponent } from './relatorio/relatorio.component';



@NgModule({
  declarations: [ListaRelatoriosComponent, RelatorioComponent],
  imports: [
    CommonModule
  ]
})
export class RelatoriosModule { }
