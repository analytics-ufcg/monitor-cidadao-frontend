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
  // aqui contém a listagem de licitações e contratos de um município
  {
    path: 'municipios', 
    loadChildren: () => import('./municipios/municipios.module').then(m => m.MunicipiosModule)
  },
  // aqui contém os relatórios HTML gerados
  {
    path: 'relatorios',
    loadChildren: () => import('./relatorios/relatorios.module').then(m => m.RelatoriosModule)
  },
  // aqui contém as informações de um contrato específico (detalhes)
  {
    path: 'contrato',
    loadChildren: () => import('./contratos/contratos.module').then(m => m.ContratosModule)
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes, routerOptions)],
  exports: [RouterModule]
})
export class AppRoutingModule { }