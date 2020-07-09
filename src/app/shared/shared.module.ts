import { NgbTypeaheadModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscaMunicipioComponent } from './components/busca-municipio/busca-municipio.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';
import { PipesModule } from './pipes/pipes.module';
import { BuscaNavbarComponent } from './components/busca-navbar/busca-navbar.component';
import { BarraNavegacaoComponent } from './components/barra-navegacao/barra-navegacao.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { TimelineComponent } from './components/timeline/timeline.component';


@NgModule({
  declarations: [BuscaMunicipioComponent, LoadingSpinnerComponent, ListaContratosComponent, BuscaNavbarComponent, BarraNavegacaoComponent, RodapeComponent, TimelineComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    PipesModule,
    RouterModule,
    NgbModule

  ], exports:[
    BuscaMunicipioComponent,
    LoadingSpinnerComponent,
    ListaContratosComponent,
    BuscaNavbarComponent, 
    BarraNavegacaoComponent, 
    RodapeComponent,
    TimelineComponent
  ]
})
export class SharedModule { }
