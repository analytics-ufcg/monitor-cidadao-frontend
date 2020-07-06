import { debounceTime, takeUntil } from 'rxjs/operators';
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

}
