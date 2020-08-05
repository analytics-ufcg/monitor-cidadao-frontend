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
  public contrato: Contrato;
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
        // evita fazer a requisição duplicada de um municipio
        if (municipio.cd_municipio != this.municipioEscolhido?.cd_municipio) {
          this.isLoading = true;
          this.contratosFiltrados = [];
          
          this.getContratos(municipio);
        }
      });
  }

  getContratos(municipio: Municipio) {
    this.contratosService.getContratosPorMunicipio(municipio.cd_municipio)
      .pipe(takeUntil(this.unsubscribe)).subscribe(contratos => {
          this.contratos = contratos.sort((a, b) => (b.dt_ano - a.dt_ano));
          this.contratosFiltrados = this.contratos;
          this.isCheckedVigentes = false;
          this.isLoading = false;
          this.municipioEscolhido = municipio;
      });
  }

  clickSwitchVigentes (event) { 
    let today = new Date();
   
    if (event.target.checked){
      this.contratosFiltrados = this.contratos.filter(m => 
        new Date(today) <= new Date(m.pr_vigencia)
      );
    } else {
      this.contratosFiltrados = this.contratos;
    }
  }

  onPageChange(pag: number) {
    this.pag = pag;
    window.scrollTo(0, 0);
 }

}
