import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LicitacaoService } from 'src/app/shared/services/licitacao.service';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-municipios-licitacoes',
  templateUrl: './municipios-licitacoes.component.html',
  styleUrls: ['./municipios-licitacoes.component.scss']
})
export class MunicipiosLicitacoesComponent implements OnInit {
  pag : number = 1;
  contador : number = 15;
  private unsubscribe = new Subject();
  licitacoes;

  constructor(private licitacoesService: LicitacaoService) { }

  ngOnInit(): void {
    this.licitacoesService.getLicitacoes()
    .pipe(takeUntil(this.unsubscribe))
    .subscribe(licitacoes => {
      this.licitacoes = licitacoes;
    });
  }}