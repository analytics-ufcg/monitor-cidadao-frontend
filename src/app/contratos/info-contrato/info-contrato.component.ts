import { RegiaoService } from './../../shared/services/regiao.service';
import { Evento } from './../../shared/models/evento.model';
import { debounceTime, takeUntil, map } from 'rxjs/operators';
import { Component, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { Municipio } from './../../shared/models/municipio.model';
import { UserService } from './../../shared/services/user.service';

@Component({
  selector: 'info-contrato',
  templateUrl: './info-contrato.component.html',
  styleUrls: ['./info-contrato.component.scss']
})
export class InfoContratoComponent implements OnInit {

  @Input() contrato;

  private unsubscribe = new Subject();
  public municipioEscolhido: Municipio;

  constructor(private userService: UserService,
    private regiaoService: RegiaoService) { }

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
        this.getMunicipioIfUnfined () 
      });
  }

  /**
   * Verifica se o municipio já está salvo no userservice,
   * caso contrário é realizada a busca pelo código.
   */
  getMunicipioIfUnfined () {
    if (!this.municipioEscolhido.cd_municipio || 
      this.municipioEscolhido.cd_municipio != this.contrato.cd_municipio){
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

}
