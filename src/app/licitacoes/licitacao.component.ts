import { RegiaoService } from './../shared/services/regiao.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

import { Licitacao } from 'src/app/shared/models/licitacao.model';
import { LicitacaoService } from 'src/app/shared/services/licitacao.service';

@Component({
  selector: 'app-licitacao',
  templateUrl: './licitacao.component.html',
  styleUrls: ['./licitacao.component.scss']
})
export class LicitacaoComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();
  public licitacao = new Licitacao();
  public municipioEscolhido;
  public isLoading = true;

  constructor(
    private regiaoService: RegiaoService,
    private activatedroute: ActivatedRoute,
    private licitacaoService: LicitacaoService) { }

  ngOnInit() {
    const id = this.activatedroute.snapshot.paramMap.get('id');
    this.getLicitacaoByID(id);
  }

  getLicitacaoByID(id: string) {
    this.licitacaoService.get(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(licitacao => {
        this.licitacao = licitacao;
        this.isLoading = false;
        this.getMunicipioByID(this.licitacao?.cd_municipio);
      });
  }

  getMunicipioByID(cdMunicipio){
    this.regiaoService.getMunicipiosbyId(cdMunicipio)
    .subscribe(municipio => {
      municipio.map (result => {
        this.municipioEscolhido = result;
      });
    });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
