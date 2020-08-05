import { Contrato } from './../../../shared/models/contrato.model';

import { ContratoService } from './../../../shared/services/contrato.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-risco-contratos',
  templateUrl: './risco-contratos.component.html',
  styleUrls: ['./risco-contratos.component.scss']
})
export class RiscoContratosComponent implements OnInit {

  pag: number = 1;
  contador: number = 10;
  
  // todos os contratos
  contratos: any[];
  public isLoading = true;

  constructor(private contratosService: ContratoService) { }

  ngOnInit(): void {
    this.getContratos();
  }

  getContratos() {
    this.isLoading = true;
    this.contratosService.getContratosPorRisco()
      .subscribe(contratos => {
          this.isLoading = false;
          this.contratos = contratos;
      });
  }

  getRisco (risco) {
    if (!risco) return 0;
    return risco * 100;
  }

  onPageChange(pag: number) {
    this.pag = pag;
    window.scrollTo(0, 0);
  }
}

