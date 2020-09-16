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
  
  public dropDownOptions = [{name: 'Por ano', id:'ATUAIS'}, {name: 'Menores Valores', id:'MENOR_VALOR'}, {name:'Maiores Valores', id:'MAIOR_VALOR'},{name: 'Por risco', id:'RISCO'}]
  public ordenacaoSelecionada;

  panelExpanded = false;

  public isLoading = true;
  termoBuscado: string;

  contratos: any[];

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
        this.ordenaPorRisco();
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
  ordenaMenorValor() {
    this.ordenacaoSelecionada  = this.dropDownOptions [1]
    this.contratos.sort((a, b) => (a.vl_total_contrato - b.vl_total_contrato));
  }
  ordenaMaiorValor() {
    this.ordenacaoSelecionada  = this.dropDownOptions [2]
    this.contratos.sort((a, b) => (b.vl_total_contrato - a.vl_total_contrato));
  }

  ordenaPorRisco() {
    this.ordenacaoSelecionada  = this.dropDownOptions [3]

    let comRiscos: any[]
    comRiscos = []
    let semRiscos: any[]
    semRiscos = []
    let contratosOrdenados: any[]
    contratosOrdenados = []

    for(let contrato of this.contratos) {
      if (contrato?.previsao != null) {
        comRiscos.push(contrato)
      } else {
        semRiscos.push(contrato)
      }
    }

    comRiscos = comRiscos.sort((a, b) => (b.previsao.risco != null ? b.previsao.risco : -Infinity) - (a.previsao.risco != null ? a.previsao.risco : -Infinity));
    
    console.log(comRiscos)
    console.log(semRiscos)

    for(let contrato of comRiscos) {
      contratosOrdenados.push(contrato)
    }
    for(let contrato of semRiscos) {
      contratosOrdenados.push(contrato)
    }

    this.contratos = contratosOrdenados

  }
  

  ordena (opcao) {
    if (opcao.id == 'ATUAIS'){
      this.ordernaPorAno();
    }else if (opcao.id == 'MENOR_VALOR'){
      this.ordenaMenorValor();
    } else if (opcao.id == 'MAIOR_VALOR'){
      this.ordenaMaiorValor();
    } else if (opcao.id == 'RISCO'){
      this.ordenaPorRisco();
    }
  }

  getRisco (contrato: Contrato) {
    if (!contrato?.previsao) return -1;
    return (contrato?.previsao.risco * 100).toFixed(0);
  }

}
