import { ListaContratosComponent } from './lista-contratos/lista-contratos.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MunicipiosComponent } from './municipios.component';
import { MunicipiosLicitacoesComponent } from './municipios-licitacoes/municipios-licitacoes.component';



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
        component: MunicipiosLicitacoesComponent
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