import { Component, OnInit, Input } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations'

@Component({
  selector: 'app-busca-navbar',
  templateUrl: './busca-navbar.component.html',
  styleUrls: ['./busca-navbar.component.scss'],
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ width: '2em' }),
        animate('200ms ease-in', style({ width: '18em' }))
      ]),
      transition(':leave', [
        animate('200ms ease-in', style({ width: '2em' }))
      ])
    ])
  ]
})
export class BuscaNavbarComponent implements OnInit {

  @Input() mostrarBusca:boolean;

  constructor() { }

  ngOnInit(): void {
  }

}
