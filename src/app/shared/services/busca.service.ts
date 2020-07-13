import { TipoBusca } from './../enum/tipo-busca.enum';
import { Municipio } from './../models/municipio.model';
import { takeUntil, map } from 'rxjs/operators';
import { RegiaoService } from './regiao.service';
import { Observable, of, Subject } from 'rxjs';
import { Contrato } from './../models/contrato.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  private url = environment.apiUrl + 'search';

  private unsubscribe = new Subject();
  public municipios: any[];

  constructor(private regiaoService: RegiaoService,
    private http: HttpClient) {
    // A busca por municípios é feita apenas uma vez
    this.getMunicipios()
  }

  /**
   * Realiza busca pela descrição dos itens buscáveis. 
   * 
   * @param term termo utilizado na busca.
   */
  search(term: string) {
    if (term?.trim() === '') {
      return of([]);
    }
    // trim utilizado para evitar bad request.
    return this.getBuscaveis(term?.trim())
  }

  /**
   * Busca contratos pela descrição na rota /search?termo
   * 
   * @param term termo que sera utilizado na busca
   */
  getContratosPelaDecricao(term: string): Observable<Contrato[]> {
    const params = new HttpParams().set('termo', term);
    return this.http.get<Contrato[]>(this.url, { params });
  }

  /**
 * Recupera do service de municípios todos aqueles que estão 
 * cadastrados.
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
  * @param term termo inserido no input
  */
  getContratosPelaDescricao(term) {
    return this.getContratosPelaDecricao(term)
      .pipe(map(buscavelList => {
        return buscavelList.map((contrato) =>
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
  getBuscaveis(term) {
    return this.getContratosPelaDescricao(term)
      // Adicina todos os municípios na lista de itens buscáveis
      .pipe(map(buscavelList => {
        for (let municipio of this.municipios) {
          buscavelList.push(municipio)
        }
        return buscavelList
      }))
      // Ordena a lista para colocar o município no começo dela
      .pipe(map(buscavelList => {
        return buscavelList.sort((a, b) => b.tipoBusca.localeCompare(a.tipoBusca))
      }))
      // Seleciona apenas os 10 primeiros itens
      .pipe(map(res =>
        res.filter(v => v.descricao.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 6)
      ))
  }

  /**
   * Verifica se um item buscavel é um contrato.
   * 
   * @param buscavel item buscável (municipio ou contrato)
   */
  isContrato (buscavel): boolean {
    return buscavel.tipoBusca == 'CONTRATO';
  }

  /**
   * Verifica se um item buscavel é um município.
   * 
   * @param buscavel item buscável (municipio ou contrato)
   */
  isMunicipio (buscavel): boolean {
    return buscavel.tipoBusca == TipoBusca.Municipio;
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }



}
