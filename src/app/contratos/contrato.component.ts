import { takeUntil } from 'rxjs/operators';
import { ContratoService } from './../shared/services/contrato.service';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Contrato } from '../shared/models/contrato.model';

@Component({
  selector: 'app-contrato',
  templateUrl: './contrato.component.html',
  styleUrls: ['./contrato.component.scss']
})
export class ContratoComponent implements OnInit {

  
  private unsubscribe = new Subject();

  public contrato: Contrato;

  constructor(
    private activatedroute: ActivatedRoute,
    private contratoService: ContratoService) { }

  ngOnInit() {
    const id = this.activatedroute.snapshot.paramMap.get('id');
    this.getContratoByID(id);
  }

  getContratoByID(id: string) {
    this.contratoService.getById(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(contrato => {
        this.contrato = contrato;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
