import { Component, OnInit } from '@angular/core';
import { LicitacaoService } from 'src/app/shared/services/licitacao.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-licitacoes-listar',
  templateUrl: './licitacoes-listar.component.html',
  styleUrls: ['./licitacoes-listar.component.scss']
})
export class LicitacoesListarComponent implements OnInit {

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
  }

  
  

}
