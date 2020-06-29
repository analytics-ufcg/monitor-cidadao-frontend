import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class RelatorioService {
  
  constructor(private http: HttpClient) {
  }

  // Retorna o descritivo
  getDescritivo(rota: string){
    if(rota === 'licitacoes'){
      return this.http.get('../../../assets/relatorios/4-Descritivo-Licitacoes.html', {responseType: 'text'});
    } else if (rota === 'contratos') {
      return this.http.get('../../../assets/relatorios/5-Contratos-Vigentes.html', {responseType: 'text'});
    }
  }
}
