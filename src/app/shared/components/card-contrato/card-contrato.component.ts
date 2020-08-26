import { Component, OnInit, Input } from '@angular/core';
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

  getRisco(risco) {
    if (!risco.previsaoContrato) { return -1; }
    return risco.previsaoContrato.vig_prob_1 * 100;
  }
}
