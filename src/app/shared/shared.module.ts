import { NgbTypeaheadModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscaComponent } from './components/busca/busca.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { ListaContratosComponent } from './components/lista-contratos/lista-contratos.component';
import { PipesModule } from './pipes/pipes.module';
import { BuscaNavbarComponent } from './components/busca-navbar/busca-navbar.component';
import { BarraNavegacaoComponent } from './components/barra-navegacao/barra-navegacao.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { TimelineComponent } from './components/timeline/timeline.component';
import { CardContratoComponent } from './components/card-contrato/card-contrato.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [BuscaComponent, LoadingSpinnerComponent, ListaContratosComponent, BuscaNavbarComponent, BarraNavegacaoComponent, RodapeComponent, TimelineComponent, CardContratoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule,
    PipesModule,
    RouterModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule

  ], exports:[
    BuscaComponent,
    LoadingSpinnerComponent,
    ListaContratosComponent,
    BuscaNavbarComponent, 
    BarraNavegacaoComponent, 
    RodapeComponent,
    TimelineComponent,
    CardContratoComponent,
  ]
})
export class SharedModule { }
