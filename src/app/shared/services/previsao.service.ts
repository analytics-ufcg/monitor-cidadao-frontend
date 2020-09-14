import { Previsao } from './../models/previsao.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient,  HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrevisaoService {

  private url = environment.apiUrl + 'previsoes';

  constructor(private http: HttpClient) { }

  getPrevisoes(): Observable<Previsao[]> {
    return this.http.get<Previsao[]>(this.url);
  }
  
}
