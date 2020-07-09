import { UserService } from '../../services/user.service';
import { Municipio } from '../../models/municipio.model';
import { takeUntil } from 'rxjs/operators';
import { RegiaoService } from '../../services/regiao.service';
import { Component, OnInit, Input } from '@angular/core';


import { Observable, Subject } from 'rxjs';
import { debounceTime, map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']

})
export class BuscaComponent implements OnInit {

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
        this.municipios = municipios.map((response: any) => new Municipio(response.cd_municipio, response.no_municipio));
      });
  }

  getMunicipioSalvo() {
    this.userService
      .getMunicipioEscolhido()
      .pipe(map((response: any) => new Municipio(response.cd_municipio, response.no_municipio)))
      .subscribe(municipio => {
        this.municipioSelecionado = municipio;
        console.log (municipio)
      });
  }

 

  selecionaMunicipio (municipio){
    this.userService.setMunicipioEscolhido(municipio);
    this.router.navigate(['/municipios']);
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
          v => v.descricao.toLowerCase().indexOf(
            term.toLowerCase()
            ) > -1
          ).slice(0, 5)
          )
        )
  formatter = (x: { descricao: string }) => x.descricao;


}
