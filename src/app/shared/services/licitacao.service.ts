import { Contrato } from './../models/contrato.model';
import { Licitacao } from './../models/licitacao.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient,  HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';
import { PrevisaoService } from './previsao.service';
import { map } from 'rxjs/internal/operators/map';

@Injectable({
  providedIn: 'root'
})
export class LicitacaoService {

  private url = environment.apiUrl + 'licitacoes';

  constructor(private http: HttpClient, private previsaoService: PrevisaoService) { }


  get(id: string): Observable<Licitacao> {
    return this.http.get<Licitacao>(this.url + '/' + id).pipe(map(res => {
    this.previsaoService.previsoes.map(previsao => {
        res.contratosLicitacao.map(contrato => {
          if (previsao.id_contrato == contrato.id_contrato) {
            contrato.previsao = previsao;
          }
        })

      })
      return res;
    }
    ))
  }
  
   // Recupera licitacoes de um municipio
   getLicitacoesPorMunicipio(municipio: string): Observable<Licitacao[]> {
    const params = new HttpParams().set('cd_ibge', municipio);
    return this.http.get<Licitacao[]>(this.url + '/municipio', { params });
  }
}
