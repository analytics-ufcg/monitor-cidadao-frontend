import { Municipio } from './../models/municipio.model';
import { BehaviorSubject, Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private municipio = new BehaviorSubject<Municipio>(new Municipio());

  constructor() { }

  getMunicipioEscolhido(): Observable<Municipio> {
    const municipioSalvo = this.getMunicipioLocalStorage();

    if (municipioSalvo && municipioSalvo !== null) {
      this.municipio.next(municipioSalvo);
    }

    return this.municipio.asObservable();
  }

  setMunicipioEscolhido(novosMunicipios: Municipio) {
    const municipioSalvo = this.setMunicipioLocalStorage(novosMunicipios);
    this.municipio.next(municipioSalvo);
  }

  private getMunicipioLocalStorage(): Municipio {
    return JSON.parse(localStorage.getItem('municipio'));
  }

  private setMunicipioLocalStorage(novoMunicipio): Municipio {
    localStorage.setItem('municipio', JSON.stringify(novoMunicipio));
    return(novoMunicipio);
  }

}
