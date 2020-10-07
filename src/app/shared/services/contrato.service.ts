import { map } from 'rxjs/operators';
import { PrevisaoService } from './previsao.service';
import { Contrato } from './../models/contrato.model';
import { Previsao } from './../models/previsao.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private url = environment.apiUrl + 'contratos';



  constructor(private http: HttpClient, private previsaoService: PrevisaoService) {

  }

  // Recupera contratos de um municipio
  getContratosPorMunicipio(municipio: string): Observable<Contrato[]> {
    const params = new HttpParams().set('cd_ibge', municipio);
    return this.http.get<Contrato[]>(this.url + '/municipio', { params }).pipe(map(res => {
      this.previsaoService.previsoes.map(previsao => {
        res.map(contrato => {
          if (previsao.id_contrato == contrato.id_contrato) {
            contrato.previsao = previsao;
          }
        })

      })
      return res;
    }
    ))
  }

  // Recupera contrato pelo ID
  getById(id: string): Observable<Contrato> {
    return this.http.get<Contrato>(this.url + '/' + id).pipe(map(res => {
      this.previsaoService.previsoes.map(previsao => {
        if (previsao.id_contrato == res.id_contrato) {
          res.previsao = previsao;
        }
      })
      return res
    }));
  }
 
  // Recupera contrato pelo Risco
  getContratosPorRisco(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.url + '/vigentes/riscos').pipe(map(res => {
      this.previsaoService.previsoes.map(previsao => {
        res.map(contrato => {
          if (previsao.id_contrato == contrato.id_contrato) {
            contrato.previsao = previsao;
          }
        })
      })
      return res
    }));
  }



}
