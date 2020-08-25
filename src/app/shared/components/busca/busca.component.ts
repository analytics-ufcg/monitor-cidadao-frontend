import { Buscavel } from './../../models/buscavel.model';
import { BuscaService } from './../../services/busca.service';
import { RegiaoService } from '../../services/regiao.service';

import { TipoBusca } from './../../enum/tipo-busca.enum';
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

  modelBusca: any;
  private unsubscribe = new Subject();

  public municipios: any[];
  public municipioSelecionado: Municipio;


  constructor(private router: Router,
    private regiaoService: RegiaoService,
    private buscaService: BuscaService) { }

  ngOnInit() {
    this.getMunicipios();
  }

  getMunicipios() {
    this.regiaoService.getMunicipios()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(municipios => {
        let buscaveis: Buscavel[] = []

        this.municipios = municipios.map((response: any) =>
          buscaveis.push(new Buscavel(response.cd_municipio, response.no_municipio, TipoBusca.Municipio))
        );

        this.municipios = buscaveis;
      });
  }

  /**
   * Realiza a busca de acordo com o tipo do item buscavel
   * recebido como parâmetro.
   * 
   * @param buscavel um município ou um contrato
   */
  selecionaBuscavel(buscavel:Buscavel) {
    if (this.buscaService.isContrato(buscavel)){
      this.router.navigate(['contrato/search'], { queryParams: { termo: buscavel.descricao }});
    } else if (this.buscaService.isMunicipio(buscavel)) {
      this.router.navigateByUrl('/municipios/' + buscavel.id,
        { queryParams: {id: buscavel.id } });
    }
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
      map(term => {
        if (term.length > 2) {
         
          let buscaveisTemp = this.municipios.filter(v => 
            v.descricao.toLowerCase().indexOf(term.toLowerCase()) > -1
          ).slice(0, 5)
          
          buscaveisTemp.unshift (new Buscavel("", term, TipoBusca.Contrato))
          return buscaveisTemp
          
        } else {
          []
        }

      })
    )
  formatter = (x: { descricao: string }) => x.descricao;


}