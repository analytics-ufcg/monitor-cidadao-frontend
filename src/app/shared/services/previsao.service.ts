import { Previsao } from './../models/previsao.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient,  HttpParams } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PrevisaoService {
  static getPrevisoes() {
    throw new Error('Method not implemented.');
  }

  private url = environment.apiUrl + 'previsoes';
  previsoes;
  constructor(private http: HttpClient) { 
      this.getPrevisoes().subscribe(previsao => {
        this.previsoes = previsao;
         
      });
  }

  getPrevisoes(): Observable<Previsao[]> {
    return this.http.get<Previsao[]>(this.url);
  }

}
