import { ContratoService } from './../../shared/services/contrato.service';
import { RegiaoService } from './../../shared/services/regiao.service';
import { UserService } from './../../shared/services/user.service';

import { ActivatedRoute } from '@angular/router';

import { Contrato } from './../../shared/models/contrato.model';
import { Evento } from './../../shared/models/evento.model';
import { debounceTime, takeUntil, map } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Municipio } from './../../shared/models/municipio.model';
import { Location } from '@angular/common';

@Component({
  selector: 'info-contrato',
  templateUrl: './info-contrato.component.html',
  styleUrls: ['./info-contrato.component.scss']
})
export class InfoContratoComponent implements OnInit {

  public contrato: Contrato;

  private unsubscribe = new Subject();
  public municipioEscolhido: Municipio;

  constructor(private userService: UserService,
    private regiaoService: RegiaoService,
    private contratoService: ContratoService,
    private activatedroute: ActivatedRoute,
    private location: Location) { }

  ngOnInit(): void {
    this.getMunicipio();

    const id = this.activatedroute.snapshot.paramMap.get('id');
    this.getContratoByID(id);
  }

  getContratoByID(id: string) {
    this.contratoService.getById(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(contrato => {
        this.contrato = contrato;
      });
  }

  getMunicipio() {
    this.userService
      .getMunicipioEscolhido()
      .pipe(
        debounceTime(300),
        takeUntil(this.unsubscribe))
      .subscribe(municipio => {
        this.municipioEscolhido = municipio;
        this.getMunicipioIfUnfined () 
      });
  }

  /**
   * Verifica se o municipio já está salvo no userservice,
   * caso contrário é realizada a busca pelo código.
   */
  getMunicipioIfUnfined () {
    if (!this.municipioEscolhido?.cd_municipio || 
      this.municipioEscolhido?.cd_municipio != this.contrato?.cd_municipio){
      this.regiaoService.getMunicipiosbyId(this.contrato.cd_municipio)
      .subscribe(municipio => {
        municipio.map (result => {
          this.userService.setMunicipioEscolhido (result);
          this.municipioEscolhido = result;
        }) 
      })
    }
  }

  getPorcentagemContrato (start, end) {
    let percentage;

    if (start && end) {
      let startDate = new Date(start).getTime(); 
      let endDate = new Date(end).getTime();
      let todayDate = new Date().getTime();

      let total = endDate - startDate;
      let current = todayDate - startDate;
      percentage = (current / total) * 100;

      return Math.min(Math.max(parseInt((percentage).toFixed(2)), 0), 100);
    }
    
    return -1
  }

  getEventosTimeline () {
    if (this.contrato) {
      let eventosTimeline: Array<Evento> = []
      eventosTimeline.push (new Evento("Assinatura", this.contrato.dt_assinatura))
      eventosTimeline.push (new Evento("Fim da vigência", this.contrato.pr_vigencia))
      
      return eventosTimeline;
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  lastPage() {
    this.location.back(); 
  }

}
