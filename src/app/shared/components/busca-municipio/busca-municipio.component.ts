import { takeUntil } from 'rxjs/operators';
import { RegiaoService } from './../../services/regiao.service';
import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-busca-municipio',
  templateUrl: './busca-municipio.component.html',
  styleUrls: ['./busca-municipio.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({transform: 'translateY(-100%)'}),
        animate('200ms ease-in', style({transform: 'translateY(0%)'}))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({transform: 'translateY(-100%)'}))
      ])
    ])
  ]
  
})
export class BuscaMunicipioComponent implements OnInit {

  @Input() mostrarBusca;

  constructor(private regiaoService: RegiaoService) { }

  municipios: any[];

  ngOnInit(): void {
    this.getMunicipios()
  }

  getMunicipios() {
    this.regiaoService.getMunicipios()
    .pipe()
    .subscribe(municipios => {
      this.municipios = municipios;
      console.log(this.municipios)
    });

    console.log(this.municipios)
  }

}
