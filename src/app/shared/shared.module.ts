import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscaMunicipioComponent } from './components/busca-municipio/busca-municipio.component';
import { BarraBuscaComponent } from './components/barra-busca/barra-busca.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';
import { PipesModule } from './pipes/pipes.module';


@NgModule({
  declarations: [BuscaMunicipioComponent, BarraBuscaComponent, LoadingSpinnerComponent, ListaContratosComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    PipesModule,
    RouterModule
  ], exports:[
    BuscaMunicipioComponent,
    BarraBuscaComponent,
    LoadingSpinnerComponent,
    ListaContratosComponent
  ]
})
export class SharedModule { }
