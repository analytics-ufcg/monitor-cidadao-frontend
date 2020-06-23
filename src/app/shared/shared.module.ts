import { NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BuscaMunicipioComponent } from './components/busca-municipio/busca-municipio.component';
import { BarraBuscaComponent } from './components/barra-busca/barra-busca.component';


@NgModule({
  declarations: [BuscaMunicipioComponent, BarraBuscaComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbTypeaheadModule
  ], exports:[
    BuscaMunicipioComponent,
    BarraBuscaComponent
  ]
})
export class SharedModule { }
