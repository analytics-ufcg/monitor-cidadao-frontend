import { Evento } from './../../shared/models/evento.model';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Municipio } from './../../shared/models/municipio.model';
import { Subject } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-info-licitacao',
  templateUrl: './info-licitacao.component.html',
  styleUrls: ['./info-licitacao.component.scss']
})
export class InfoLicitacaoComponent implements OnInit {

  private unsubscribe = new Subject();

  @Input() licitacao;
  @Input() municipioEscolhido;

  constructor(
    private location: Location) { }

  ngOnInit(): void {}

  getEventosTimeline() {
    if (this.licitacao) {
      const eventosTimeline: Array<Evento> = [];
      eventosTimeline.push (new Evento('Homologação', this.licitacao?.dt_homologacao));
      this.licitacao.contratosLicitacao?.forEach(function (contrato) {
        eventosTimeline.push (new Evento('Contrato', contrato?.dt_assinatura, contrato?.id_contrato))
      });
      return eventosTimeline;
    }
  }

  getGanhador(cpfcnpj, contratos){
    let contemNaLista = false;

    for(let contrato of contratos) {
      if (contrato?.nu_cpfcnpj == cpfcnpj) {
        contemNaLista = true;
        break;
      }
    }
    return contemNaLista;
  }

  lastPage() {
    this.location.back();
  }

}
