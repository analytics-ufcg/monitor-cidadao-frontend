import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LicitacaoComponent } from './licitacao.component';
import { InfoLicitacaoComponent } from './info-licitacao/info-licitacao.component';

const routes: Routes = [
  {
    path: ':id',
    component: LicitacaoComponent,
    children: [
      {
        path: '',
        redirectTo: 'info',
        pathMatch: 'full'
      },
      {
        path: 'info',
        component: InfoLicitacaoComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LicitacaoRoutingModule { }