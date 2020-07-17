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

  constructor(private regiaoService: RegiaoService,
    private http: HttpClient) {
  }

  /**
   * Busca contratos pela descrição na rota /search?termo
   * 
   * @param term termo que sera utilizado na busca
   */
  searchContratos(term: string): Observable<Contrato[]> {
    if (term?.trim() === '') {
      return of([]);
    }
    
    const params = new HttpParams().set('termo', term?.trim());
    return this.http.get<Contrato[]>(this.url, { params });
  }

  
  /**
   * Verifica se um item buscavel é um contrato.
   * 
   * @param buscavel item buscável (municipio ou contrato)
   */
  isContrato (buscavel): boolean {
    return buscavel.tipoBusca == TipoBusca.Contrato;
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
