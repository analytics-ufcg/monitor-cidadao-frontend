import { RiscoContratosComponent } from './risco-contratos/risco-contratos/risco-contratos.component';
import { InfoContratoComponent } from './info-contrato/info-contrato.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListaContratosComponent } from './lista-contratos/lista-contratos.component';

const routes: Routes = [
  {
    path: 'search',
    component: ListaContratosComponent
  },
  {
    path: ':id',
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: InfoContratoComponent
      }
    ]
  },
  {
    path: 'riscos/paraiba',
    component: RiscoContratosComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContratosRoutingModule { }
