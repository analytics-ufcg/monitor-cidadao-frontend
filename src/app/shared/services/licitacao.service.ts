import { Licitacao } from './../models/licitacao.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient,  HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LicitacaoService {

  private url = environment.apiUrl + 'licitacoes';

  constructor(private http: HttpClient) { }


   // Recupera licitacoes de um municipio
   getLicitacaoPorMunicipio(municipio: string): Observable<Licitacao[]> {
    const params = new HttpParams().set('cd_municipio', municipio);
    return this.http.get<Licitacao[]>(this.url + '/municipio', { params });
  }
}
