import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-licitacao',
  templateUrl: './info-licitacao.component.html',
  styleUrls: ['./info-licitacao.component.scss']
})
export class InfoLicitacaoComponent implements OnInit {


  @Input() licitacao;

  constructor() { }

  ngOnInit(): void {
  }

}
