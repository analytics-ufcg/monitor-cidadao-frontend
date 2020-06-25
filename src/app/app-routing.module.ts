import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { MunicipiosComponent } from './municipios/municipios.component';
import { ListaRelatoriosComponent } from './relatorios/lista-relatorios/lista-relatorios.component';
import { RelatorioComponent } from './relatorios/relatorio/relatorio.component';

const routerOptions: ExtraOptions = {
  scrollPositionRestoration: 'enabled',
  anchorScrolling: 'enabled',
  scrollOffset: [0, 64],
};

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/main.module').then(m => m.MainModule)
  },
  {
    path: 'municipio',
    loadChildren: () => import('./municipios/municipios.module').then(m => m.MunicipiosModule)
  },
  {
    path: 'licitacao',
    loadChildren: () => import('./licitacoes/licitacao.module').then(m => m.LicitacaoModule)
  },
  {
    path: 'relatorio',
    loadChildren: () => import('./relatorios/relatorios.module').then(m => m.RelatoriosModule)
  },
  {
    path: 'relatorios',
    component: ListaRelatoriosComponent
  },
  
  {
    path: 'relatorios/:id',
    component: RelatorioComponent
  },

  {
    path: 'municipios',
    component: MunicipiosComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }