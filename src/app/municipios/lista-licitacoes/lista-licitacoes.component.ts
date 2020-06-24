import { Municipio } from './../../shared/models/municipio.model';
import { Licitacao } from './../../shared/models/licitacao.model';

import { UserService } from './../../shared/services/user.service';
import { LicitacaoService } from 'src/app/shared/services/licitacao.service';

import { Component, OnInit } from '@angular/core';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-lista-licitacoes',
  templateUrl: './lista-licitacoes.component.html',
  styleUrls: ['./lista-licitacoes.component.scss']
})
export class ListaLicitacoesComponent implements OnInit {
  pag: number = 1;
  contador: number = 15;

  public isLoading = true;

  private unsubscribe = new Subject();
  licitacoes: Licitacao[] = [];

  public municipioEscolhido: Municipio;

  constructor(private userService: UserService,
    private licitacoesService: LicitacaoService) { }

  ngOnInit(): void {
    this.getMunicipio();
  }

  getMunicipio() {
    this.userService
      .getMunicipioEscolhido()
      .pipe(
        debounceTime(300),
        takeUntil(this.unsubscribe))
      .subscribe(municipio => {
        this.municipioEscolhido = municipio;
        this.getLicitacoes(this.municipioEscolhido);
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

}
