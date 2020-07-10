import { map } from 'rxjs/operators';
import { Municipio } from './../models/municipio.model';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegiaoService {

  private url = environment.apiUrl + 'municipios';

  constructor(private http: HttpClient) { }


  getMunicipios(): Observable<Municipio[]> {
    return this.http.get<Municipio[]>(this.url);
  }


  getMunicipiosbyId(cd_municipio): Observable<Municipio[]> {
    return  this.getMunicipios().pipe(map(res =>
      res.filter(v => v.cd_municipio.toLowerCase().indexOf(cd_municipio.toLowerCase()) > -1)
    ));
  }

}
