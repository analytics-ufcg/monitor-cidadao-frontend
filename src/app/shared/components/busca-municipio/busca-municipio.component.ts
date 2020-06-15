import { Municipio } from './../../models/municipio.model';
import { takeUntil } from 'rxjs/operators';
import { RegiaoService } from './../../services/regiao.service';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';



@Component({
  selector: 'app-busca-municipio',
  templateUrl: './busca-municipio.component.html',
  styleUrls: ['./busca-municipio.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ transform: 'translateY(-100%)' }),
        animate('200ms ease-in', style({ transform: 'translateY(0%)' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ transform: 'translateY(-100%)' }))
      ])
    ])
  ]

})
export class BuscaMunicipioComponent implements OnInit {

  @Input() mostrarBusca:boolean;

  private unsubscribe = new Subject();
  public muncipioSelecionado: any;
  municipios: any[];

  constructor(private regiaoService: RegiaoService) { }

  ngOnInit(): void {
    this.getMunicipios()
  }

  getMunicipios() {
    this.regiaoService.getMunicipios()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(municipios => {
        this.municipios = municipios;
      });
  }

  selecionaMunicipio (municipio){
    //Chamar método para mudar de Município
    console.log (municipio)
  }

  /**
   * Usado para realizar apresentar as sugestões da busca por munípios
   */
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      map(term => term.length < 2 ? []
        : this.municipios.filter(
          v => v.no_Municipio.toLowerCase().indexOf(
            term.toLowerCase()
            ) > -1
          ).slice(0, 5)
          )
        )
  formatter = (x: { no_Municipio: string }) => x.no_Municipio;


}
