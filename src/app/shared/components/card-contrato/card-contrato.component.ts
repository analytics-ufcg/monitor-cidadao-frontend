import { Component, OnInit, Input } from '@angular/core';
import { Contrato } from '../../models/contrato.model';
import { ContratoService } from '../../services/contrato.service';

@Component({
  selector: 'app-card-contrato',
  templateUrl: './card-contrato.component.html',
  styleUrls: ['./card-contrato.component.scss']
})
export class CardContratoComponent implements OnInit {
  isPortrait = false;
  @Input() contrato;

  constructor(
              private contratosService: ContratoService) { }

  ngOnInit(): void {
      if (window.screen.width === 360) { // 768px portrait
        this.isPortrait = true;
      }
  }

  getRisco(contrato: Contrato) {
    console.log("aquii")
    if (!contrato.previsao) { return -1; }
    console.log(this.contrato)
    console.log(this.contrato.previsao)
    return contrato.previsao.risco * 100;

  }
}
