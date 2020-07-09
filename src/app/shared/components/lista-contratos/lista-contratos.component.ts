import { Component, OnInit, Input } from '@angular/core';
import { Contrato } from '../../models/contrato.model';

@Component({
  selector: 'app-lista-contratos',
  templateUrl: './lista-contratos.component.html',
  styleUrls: ['./lista-contratos.component.scss']
})
export class ListaContratosComponent implements OnInit {

  @Input() contratos: Contrato[];
  isPortrait = false;

  constructor() { }



  ngOnInit(): void {
    if (window.screen.width === 360) { // 768px portrait
      this.isPortrait = true;
    }
}

}
