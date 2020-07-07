import { Evento } from './../../shared/models/evento.model';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { Municipio } from './../../shared/models/municipio.model';
import { Subject } from 'rxjs';
import { UserService } from './../../shared/services/user.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-info-licitacao',
  templateUrl: './info-licitacao.component.html',
  styleUrls: ['./info-licitacao.component.scss']
})
export class InfoLicitacaoComponent implements OnInit {

  private unsubscribe = new Subject();
  public municipioEscolhido: Municipio;

  @Input() licitacao;

  constructor(private userService: UserService) { }

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
      });
  }

  getEventosTimeline () {
    if (this.licitacao) {
      let eventosTimeline: Array<Evento> = []
      eventosTimeline.push (new Evento("Homologação", this.licitacao?.dt_homologacao))
      this.licitacao.contratosLicitacao?.forEach(function (contrato) {
        eventosTimeline.push (new Evento("Contrato", contrato?.dt_assinatura, contrato?.id_contrato))
      }); 
      return eventosTimeline;
    }
  }

}
