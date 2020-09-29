import { Contrato } from './../../shared/models/contrato.model';
import { ContratoService } from './../../shared/services/contrato.service';
import { RegiaoService } from './../../shared/services/regiao.service';

import { ActivatedRoute } from '@angular/router';

import { Evento } from './../../shared/models/evento.model';
import { debounceTime, takeUntil, map } from 'rxjs/operators';
import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';
import { Municipio } from './../../shared/models/municipio.model';
import { Location } from '@angular/common';

@Component({
  selector: 'info-contrato',
  templateUrl: './info-contrato.component.html',
  styleUrls: ['./info-contrato.component.scss']
})
export class InfoContratoComponent implements OnInit, OnDestroy {

  public contrato: any;

  private unsubscribe = new Subject();
  public municipioEscolhido: Municipio;

  constructor(
    private regiaoService: RegiaoService,
    private contratoService: ContratoService,
    private activatedroute: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    const id = this.activatedroute.snapshot.paramMap.get('id');
    this.getContratoByID(id);
  }

  getContratoByID(id: string) {
    this.contratoService.getById(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(contrato => {
        this.contrato = contrato;
        this.getMunicipioById(contrato.cd_municipio);
      });
  }

  getMunicipioById( cdMunicipio: string) {
    this.regiaoService.getMunicipiosbyId(cdMunicipio)
    .subscribe(municipio => {
      municipio.map (result => {
        this.municipioEscolhido = result;
      });
    });
  }


  getPorcentagemContrato(start, end) {
    let percentage;

    if (start && end) {
      const startDate = new Date(start).getTime();
      const endDate = new Date(end).getTime();
      const todayDate = new Date().getTime();

      const total = endDate - startDate;
      const current = todayDate - startDate;
      percentage = (current / total) * 100;

      return Math.min(Math.max(parseInt((percentage).toFixed(2), 10), 0), 100);
    }
    return -1;
  }

  getEventosTimeline() {
    if (this.contrato) {
      const eventosTimeline: Array<Evento> = [];
      eventosTimeline.push (new Evento('Assinatura', this.contrato.dt_assinatura));
      if (this.contrato.empenhosContrato){
        for (let empenho of this.contrato.empenhosContrato){
          eventosTimeline.push(new Evento('Empenho', empenho.dt_empenho, empenho.vl_empenho));
        }
      }
      if (this.contrato.pagamentosContrato) {
        for (let pagamento of this.contrato.pagamentosContrato){
          eventosTimeline.push(new Evento('Pagamento', pagamento.dt_pagamento, pagamento.vl_pagamento));
        }
      }
      eventosTimeline.push (new Evento('Fim da vigência', this.contrato.pr_vigencia));

      return eventosTimeline.sort((b, a) => new Date(b.data).getTime() - new Date(a.data).getTime());
    }
  }

  getRisco(contrato: Contrato) {
    if (!contrato?.previsao) {
      return 0;
    }
    return (contrato?.previsao.risco * 100).toFixed(0);
  }

  getPorcentagemPago(contrato: Contrato) {
    if (!contrato || !contrato.pagamentosContrato) {
      return -1;
    }
    return (this. getTotalPago(contrato) / contrato.vl_total_contrato * 100).toFixed(0);
  }

  getTotalPago(contrato: Contrato) {
    if (!contrato || !contrato.pagamentosContrato) {
      return -1;
    }
    let totalPago = 0;
    for (let pagamento of contrato.pagamentosContrato){
      totalPago += +pagamento.vl_pagamento;
    }
    return totalPago;
  }

  getPorcentagemDiff(contrato: Contrato){
    if (!contrato || !contrato.pagamentosContrato) {
      return -1;
    }
    const diferenca = this.getTotalPago(contrato) - contrato.vl_total_contrato;
    return  ( diferenca / contrato.vl_total_contrato * 100).toFixed(0);


  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  lastPage() {
    this.location.back();
  }

}
