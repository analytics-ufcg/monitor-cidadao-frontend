import { BuscaService } from './../../services/busca.service';
import { UserService } from '../../services/user.service';
import { RegiaoService } from '../../services/regiao.service';

import { TipoBusca } from './../../enum/tipo-busca.enum';
import { Contrato } from './../../models/contrato.model';
import { Municipio } from '../../models/municipio.model';

import { Component, OnInit } from '@angular/core';
import { takeUntil, distinctUntilChanged, tap, switchMap, catchError, debounceTime } from 'rxjs/operators';
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
  
  modelBusca: any;
  public municipios: any[];

  constructor(private router: Router,
    private regiaoService: RegiaoService,
    private userService: UserService,
    private buscaService: BuscaService) { 
    
    // A busca por municípios é feita apenas uma vez
    this.getMunicipios()

    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit() {}

  /**
  * Recupera do service todos os municípios
  */
  getMunicipios() {
    this.regiaoService.getMunicipios()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(municipios => {
        this.municipios = municipios.map((response: any) => 
          new Municipio(response.cd_municipio, response.no_municipio)
        );
      });
  }

  /**
  * Recupera do service todos os contratos pela descrição
  * de acordo com o texto inserido no input.
  * 
  * @param term inserido no input
  */
  getContratosPelaDescricao (term) {
    return this.buscaService.getContratosPorMunicipio (term)
    .pipe(map(buscavelList => {
      return buscavelList.map ((contrato)=>
        new Contrato(contrato.id_contrato, contrato.de_obs ? contrato.de_obs.charAt(0).toUpperCase() + contrato.de_obs.substr(1).toLowerCase() : '')
        );
    }))
  }

  /**
   * Busca e realiza as etapas necessárias para criar
   * a listagem de itens buscáveis (municípios e contratos).
   * 
   * - Os componentes buscáveis são do tipo @see Buscavel 
   * (com parametros de id, descricao, e tipo).
   * 
   * @param term termo inserido no input
   */
  getBuscaveisPelaDescricao (term) {
    return this.getContratosPelaDescricao (term) 
    // Adicina todos os municípios na lista de itens buscáveis
    .pipe(map(buscavelList => {
      for (let municipio of this.municipios) {
        buscavelList.push (municipio)
      }
      return buscavelList
    }))
    // Ordena a lista para colocar o município no começo dela
    .pipe(map(buscavelList => {
      return buscavelList.sort((a, b) => b.tipoBusca.localeCompare(a.tipoBusca))
    }))
    // Seleciona apenas os 10 primeiros itens
    .pipe(map(res=>
      res.filter(v =>v.descricao.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 6)
    ))
  }

  /**
   * Realiza a busca de acordo com o tipo do item buscavel
   * recebido como parâmetro.
   * 
   * @param buscavel um município ou um contrato
   */
  selecionaBuscavel (buscavel){
    // Busca pelo município
    if (buscavel.tipoBusca == TipoBusca.Municipio){
      this.userService.setMunicipioEscolhido(buscavel);
      this.router.navigate(['/municipios']);
   
      // busca pelo contrato
    }else if (buscavel.tipoBusca == 'CONTRATO'){
      this.router.navigateByUrl('/contrato/' +buscavel.id ,
        { queryParams: { id: buscavel.id }})
    }
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

  /**
   * Usado para buscar e e setar as sugestões da busca por municípios
   * e contratos
   */
  searching = false
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => this.getBuscaveisPelaDescricao (term)), 
      tap(() => this.searching = false)
    )

  /**
   *  Formata o texto padrão do input 
   */
  formatter = (x: { descricao: string }) => x.descricao;

}
