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

}
