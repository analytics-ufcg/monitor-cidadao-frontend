import { Municipio } from './../../shared/models/municipio.model';
import { Contrato } from '../../shared/models/contrato.model';

import { UserService } from './../../shared/services/user.service';
import { ContratoService } from './../../shared/services/contrato.service';

import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { takeUntil, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-lista-contratos',
  templateUrl: './lista-contratos.component.html',
  styleUrls: ['./lista-contratos.component.scss']
})
export class ListaContratosComponent implements OnInit {
  pag: number = 1;
  contador: number = 10;
  public isLoading = true;
  private unsubscribe = new Subject();
  
  isCheckedVigentes = false;
  public municipioEscolhido: Municipio;
  // todos os contratos
  contratos: Contrato[] = [];
  // contratos filtrados pela vigência
  contratosFiltrados: Contrato[] = [];

  isPortrait = false;

  constructor(private userService: UserService, 
              private contratosService: ContratoService) { }

  ngOnInit(): void {
      this.getMunicipio();

      if (window.screen.width === 360) { // 768px portrait
        this.isPortrait = true;
      }
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
        this.contratosFiltrados = this.contratos;
        this.isLoading = false;
      });
  }

  clickSwitchVigentes (event) { 
    // utilizado para simular um período próximo 
    // a data que o dump do SAGRES foi feito
    let today = new Date("2019-01-01");
   
    if (event.target.checked){
      this.contratosFiltrados = this.contratos.filter(m => 
        new Date(today) <= new Date(m.pr_vigencia)
      );
    } else {
      this.contratosFiltrados = this.contratos;
    }
  }

}
