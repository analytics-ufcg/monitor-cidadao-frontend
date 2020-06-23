import { UserService } from './../../services/user.service';
import { Municipio } from './../../models/municipio.model';
import { takeUntil } from 'rxjs/operators';
import { RegiaoService } from './../../services/regiao.service';
import { Component, OnInit, Input } from '@angular/core';


import { Observable, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-busca-municipio',
  templateUrl: './busca-municipio.component.html',
  styleUrls: ['./busca-municipio.component.scss']

})
export class BuscaMunicipioComponent implements OnInit {

  private unsubscribe = new Subject();
  public muncipioSelecionado: any;
  public municipios: any[];
  public municipioSelecionado: Municipio;


  constructor(private router: Router,
    private regiaoService: RegiaoService,
    private userService: UserService) { }

  ngOnInit() {
    this.getMunicipios();
    this.getMunicipioSalvo();
  }

  getMunicipios() {
    this.regiaoService.getMunicipios()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(municipios => {
        this.municipios = municipios;
      });
  }

  getMunicipioSalvo() {
    this.userService
      .getMunicipioEscolhido()
      .subscribe(municipio => {
        this.municipioSelecionado = municipio;
      });
  }

 

  selecionaMunicipio (municipio){
    this.userService.setMunicipioEscolhido(municipio);
    this.router.navigate(['/municipio']);
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  /**
   * Usado para realizar apresentar as sugestões da busca por municípios
   */
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term.length < 2 ? []
        : this.municipios.filter(
          v => v.no_municipio.toLowerCase().indexOf(
            term.toLowerCase()
            ) > -1
          ).slice(0, 5)
          )
        )
  formatter = (x: { no_municipio: string }) => x.no_municipio;


}
