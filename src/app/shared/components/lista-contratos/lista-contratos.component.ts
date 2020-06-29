import { Component, OnInit, Input } from '@angular/core';
import { Contrato } from '../../models/contrato.model';

@Component({
  selector: 'app-lista-contratos',
  templateUrl: './lista-contratos.component.html',
  styleUrls: ['./lista-contratos.component.scss']
})
export class ListaContratosComponent implements OnInit {

  @Input() contratos: Contrato[];


  constructor() { }

  ngOnInit(): void {
  }

}
