import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'info-contrato',
  templateUrl: './info-contrato.component.html',
  styleUrls: ['./info-contrato.component.scss']
})
export class InfoContratoComponent implements OnInit {

  @Input() contrato;

  constructor() { }

  ngOnInit(): void {
  }

}
