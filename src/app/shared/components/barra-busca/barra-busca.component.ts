import { Component, OnInit, Input } from '@angular/core';

import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-barra-busca',
  templateUrl: './barra-busca.component.html',
  styleUrls: ['./barra-busca.component.scss'],
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
export class BarraBuscaComponent implements OnInit {

  @Input() mostrarBusca:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
