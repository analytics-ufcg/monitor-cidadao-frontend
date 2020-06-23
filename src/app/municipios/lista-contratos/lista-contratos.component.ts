import { Municipio } from './../../shared/models/municipio.model';
import { ContratoService } from './../../shared/services/contrato.service';
import { UserService } from './../../shared/services/user.service';

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';
import { Contrato } from '../../shared/models/contrato.model';

@Component({
  selector: 'app-lista-contratos',
  templateUrl: './lista-contratos.component.html',
  styleUrls: ['./lista-contratos.component.scss']
})
export class ListaContratosComponent implements OnInit {
  pag: number = 1;
  contador: number = 15;

  public municipioEscolhido: Municipio;

  private unsubscribe = new Subject();
  contratos: Contrato[];

  constructor(private userService: UserService, 
              private contratosService: ContratoService) { }

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
        this.getContratos(this.municipioEscolhido);
      });
  }

  getContratos(municipio: Municipio) {
    this.contratosService.getContratosPorMunicipio(municipio.cd_municipio)
      .pipe(takeUntil(this.unsubscribe)).subscribe(contratos => {
        this.contratos = contratos.sort((a, b) => (b.dt_ano - a.dt_ano));
      });
  }

}
