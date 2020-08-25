import { MunicipioService } from './../../shared/services/municipio.service';
import { Municipio } from './../../shared/models/municipio.model';
import { Licitacao } from './../../shared/models/licitacao.model';

import { LicitacaoService } from 'src/app/shared/services/licitacao.service';

import { Component, OnInit } from '@angular/core';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-licitacoes',
  templateUrl: './lista-licitacoes.component.html',
  styleUrls: ['./lista-licitacoes.component.scss']
})
export class ListaLicitacoesComponent implements OnInit {
  pag = 1;
  contador = 15;

  public isLoading = true;

  private unsubscribe = new Subject();
  licitacoes: Licitacao[] = [];

  public municipioEscolhido: Municipio;

  constructor(
    private router: Router,
    private licitacoesService: LicitacaoService,
    private municipioService: MunicipioService) { }

  ngOnInit(): void {
    const cdMunicipio = this.router.url.split('/')[2];
    this.getMunicipioByID(cdMunicipio);
  }

  getMunicipioByID(cdMunicipio) {
    this.municipioService.getById(cdMunicipio)
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(municipio => {
      this.municipioEscolhido = municipio;
      this.getLicitacoes(municipio);
    });
  }

  getLicitacoes(municipio: Municipio) {
    this.licitacoesService.getLicitacoesPorMunicipio(this.municipioEscolhido.cd_municipio)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(licitacoes => {
        this.licitacoes = licitacoes.sort((a, b) => (b.dt_ano - a.dt_ano));
        this.isLoading = false;
      });
  }

  onPageChange(pag: number) {
    this.pag = pag;
    window.scrollTo(0, 0);
 }

}
