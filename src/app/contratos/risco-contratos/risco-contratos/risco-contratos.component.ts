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
          this.contratos = this.ordenaPorRisco(contratos);
      });
  }

  ordenaPorRisco(contratos: Contrato[]) {
    let comRiscos: Contrato[]
    comRiscos = []
    let semRiscos: Contrato[]
    semRiscos = []
    let contratosOrdenados: Contrato[]
    contratosOrdenados = []

    for(let contrato of contratos) {
      if (contrato?.previsao != null) {
        comRiscos.push(contrato)
      } else {
        semRiscos.push(contrato)
      }
    }

    comRiscos = comRiscos.sort((a:Contrato, b:Contrato) => b.previsao.risco - a.previsao.risco);
    
    for(let contrato of comRiscos) {
      contratosOrdenados.push(contrato)
    }
    for(let contrato of semRiscos) {
      contratosOrdenados.push(contrato)
    }

    return contratosOrdenados
  }

  getRisco (contrato: Contrato) {
    if (!contrato?.previsao) return -1;
    return (contrato?.previsao.risco * 100).toFixed(0);
  }

  onPageChange(pag: number) {
    this.pag = pag;
    window.scrollTo(0, 0);
  }
}

