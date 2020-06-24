import { ListaRelatoriosComponent } from './lista-relatorios/lista-relatorios.component';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




const routes: Routes = [
  
  {
    path: '',
    component: ListaRelatoriosComponent 
  },
  {
    path: ':id',
    component: RelatorioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RelatoriosRoutingModule { }
