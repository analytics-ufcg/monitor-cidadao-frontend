import { Contrato } from './../../shared/models/contrato.model';
import { BuscaService } from './../../shared/services/busca.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'busca-contratos',
  templateUrl: './lista-contratos.component.html',
  styleUrls: ['./lista-contratos.component.scss']
})
export class ListaContratosComponent implements OnInit {

  pag: number = 1;
  contador: number = 10;
  
  public dropDownOptions = [{name: 'Por ano', id:'ATUAIS'}, {name: 'Menores Valores', id:'MENOR_VALOR'}, {name:'Maiores Valores', id:'MAIOR_VALOR'}]
  public ordenacaoSelecionada;

  panelExpanded = false;

  public isLoading = true;
  termoBuscado: string;

  contratos: Contrato[];

  constructor(private activatedRoute: ActivatedRoute,
    private buscaService: BuscaService) { }

  ngOnInit(): void {
    this.activatedRoute.queryParams.subscribe(params => {
      const termoParam = params['termo'];
      this.termoBuscado = termoParam;
      this.searchContratos(termoParam);
    });
  }

  searchContratos(term: string) {
    this.isLoading = true;
    this.buscaService.searchContratos(term)
      .subscribe(contratos => {
        this.isLoading = false;
        this.contratos = contratos;
        this.ordernaPorAno()
      });
  }

  onPageChange(pag: number) {
    this.pag = pag;
    window.scrollTo(0, 0);
  }
  
  ordernaPorAno() {
    this.ordenacaoSelecionada = this.dropDownOptions [0]
    this.contratos.sort((a, b) => (b.dt_ano - a.dt_ano));
  }
  ordenaMenorData() {
    this.ordenacaoSelecionada  = this.dropDownOptions [1]
    this.contratos.sort((a, b) => (a.vl_total_contrato - b.vl_total_contrato));
  }
  ordenaMaiorData() {
    this.ordenacaoSelecionada  = this.dropDownOptions [2]
    this.contratos.sort((a, b) => (b.vl_total_contrato - a.vl_total_contrato));
  }
  

  ordena (opcao) {
    if (opcao.id == 'ATUAIS'){
      this.ordernaPorAno();
    }else if (opcao.id == 'MENOR_VALOR'){
      this.ordenaMenorData();
    } else if (opcao.id == 'MAIOR_VALOR'){
      this.ordenaMaiorData();
    }
  }

}
