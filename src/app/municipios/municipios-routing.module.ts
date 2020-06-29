import { ListaLicitacoesComponent } from './lista-licitacoes/lista-licitacoes.component';
import { ListaContratosComponent } from './lista-contratos/lista-contratos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MunicipiosComponent } from './municipios.component';

const routes: Routes = [
  {
    path: '',
    component: MunicipiosComponent,
    children: [
      {
        path: '',
        redirectTo: 'licitacoes',
        pathMatch: 'full'
      },
      {
        path: 'licitacoes',
        component: ListaLicitacoesComponent
      },
      {
        path: 'contratos',
        component: ListaContratosComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MunicipioRoutingModule { }