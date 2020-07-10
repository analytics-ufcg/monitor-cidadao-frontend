import { Observable } from 'rxjs';
import { Contrato } from './../models/contrato.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  private url = environment.apiUrl + 'search';

  constructor(private http: HttpClient) { }
   // Busca contratos pela descrição 
   getContratosPorMunicipio(municipio: string): Observable<Contrato[]> {
    const params = new HttpParams().set('termo', municipio);
    return this.http.get<Contrato[]>(this.url, { params });
  }

}
