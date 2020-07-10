import { TipoBusca } from './../../enum/tipo-busca.enum';
import { Contrato } from './../../models/contrato.model';
import { BuscaService } from './../../services/busca.service';
import { UserService } from '../../services/user.service';
import { Municipio } from '../../models/municipio.model';
import { takeUntil, distinctUntilChanged, tap, switchMap, catchError, debounceTime } from 'rxjs/operators';
import { RegiaoService } from '../../services/regiao.service';
import { Component, OnInit, Input } from '@angular/core';


import { Observable, Subject, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']

})
export class BuscaComponent implements OnInit {

  private unsubscribe = new Subject();
  model: any;
  public municipios: any[];

  constructor(private router: Router,
    private regiaoService: RegiaoService,
    private userService: UserService,
    private buscaService: BuscaService) { 

    this.getMunicipios()

  }

  ngOnInit() {}

  getMunicipios() {
    this.regiaoService.getMunicipios()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(municipios => {
        this.municipios = municipios.map((response: any) => new Municipio(response.cd_municipio, response.no_municipio));
      });
  }

  getContratosPelaDescricao (term) {
    return this.buscaService.getContratosPorMunicipio (term)
    .pipe(map(buscavelList => {
      return buscavelList.map ((contrato)=>
        new Contrato(contrato.id_contrato, contrato.de_obs ? contrato.de_obs.charAt(0).toUpperCase() + contrato.de_obs.substr(1).toLowerCase() : '')
        );
    }))
    .pipe(map(buscavelList => {
      for (let municipio of this.municipios) {
        buscavelList.push (municipio)
      }
      return buscavelList
    }))
    .pipe(map(buscavelList => {
      return buscavelList.sort((a, b) => b.tipoBusca.localeCompare(a.tipoBusca))
    }))
    .pipe(map(res=>
      res.filter(v =>v.descricao.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 6)
    ))
    
    // .pipe(map(buscavelList => { console.log (buscavelList)}))
  }

  selecionaMunicipio (municipio){
    if (municipio.tipoBusca == TipoBusca.Municipio){
      this.userService.setMunicipioEscolhido(municipio);
      this.router.navigate(['/municipios']);
    }else if (municipio.tipoBusca == 'CONTRATO'){
      this.router.navigate(['/contrato/' +municipio.id]);
    }
    
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  /**
   * Usado para realizar apresentar as sugestões da busca por municípios
   */
  searching = false
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => this.getContratosPelaDescricao (term)), 
      tap(() => this.searching = false)
    )

    formatter = (x: { descricao: string }) => x.descricao;

}
