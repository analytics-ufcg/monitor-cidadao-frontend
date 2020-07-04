import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscaMunicipioComponent } from './components/busca-municipio/busca-municipio.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';
import { PipesModule } from './pipes/pipes.module';
import { BuscaNavbarComponent } from './components/busca-navbar/busca-navbar.component';


@NgModule({
  declarations: [BuscaMunicipioComponent, LoadingSpinnerComponent, ListaContratosComponent, BuscaNavbarComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    PipesModule,
    RouterModule
  ], exports:[
    BuscaMunicipioComponent,
    LoadingSpinnerComponent,
    ListaContratosComponent,
    BuscaNavbarComponent
  ]
})
export class SharedModule { }
