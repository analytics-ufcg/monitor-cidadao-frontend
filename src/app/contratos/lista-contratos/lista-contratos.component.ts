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
      });
  }

  onPageChange(pag: number) {
    this.pag = pag;
    window.scrollTo(0, 0);
 }

 
}
