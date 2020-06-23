import { ContratoService } from './../../shared/services/contrato.service';

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-lista-contratos',
  templateUrl: './lista-contratos.component.html',
  styleUrls: ['./lista-contratos.component.scss']
})
export class ListaContratosComponent implements OnInit {
  
  pag : number = 1;
  contador : number = 15;

  contratos;
  
  private unsubscribe = new Subject();

  cd_municipio = "012"

  constructor(private contratosService: ContratoService) { }

  ngOnInit(): void {
    this.getContratos ()
  }

  getContratos (){
    this.contratosService.getContratosPorMunicipio(this.cd_municipio)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(contratos => {
      this.contratos = contratos.sort((a,b) => (b.dt_ano - a.dt_ano));;
    });
  }
}
