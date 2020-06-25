import { Component, OnInit } from '@angular/core';
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
export class LicitacaoComponent implements OnInit {

  private unsubscribe = new Subject();
  public licitacao = new Licitacao;

  constructor(
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
      });
  }


  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}