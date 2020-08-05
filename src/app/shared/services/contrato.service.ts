import { Contrato } from './../models/contrato.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  private url = environment.apiUrl + 'contratos';

  constructor(private http: HttpClient) { }

   // Recupera contratos de um municipio
   getContratosPorMunicipio(municipio: string): Observable<Contrato[]> {
    const params = new HttpParams().set('cd_municipio', municipio);
    return this.http.get<Contrato[]>(this.url + '/municipio', { params });
  }

  // Recupera contrato pelo ID
  getById(id: string): Observable<Contrato> {
    return this.http.get<Contrato>(this.url + '/' + id);
  }

  // Recupera contrato pelo Risco
  getContratosPorRisco(): Observable<Contrato[]> {
    return this.http.get<Contrato[]>(this.url + '/riscos/paraiba');
  }
}
