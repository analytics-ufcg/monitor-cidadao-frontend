import { MunicipioService } from './../shared/services/municipio.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Municipio } from './../shared/models/municipio.model';

import { takeUntil } from 'rxjs/operators';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss']
})
export class MunicipiosComponent implements OnInit, OnDestroy {

  private unsubscribe = new Subject();

  public municipioEscolhido: Municipio;

  constructor(
    private router: Router,
    private activatedroute: ActivatedRoute,
    private municipioService: MunicipioService) { }

  ngOnInit() {
    // force route reload whenever params change;
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
    const id = this.activatedroute.snapshot.paramMap.get('id');
    // usado para buscar um município pelo id na URL
    this.getMunicipioById(id);
  }

  getMunicipioById(id: string) {
    this.municipioService.getById(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(municipio => {
        this.municipioEscolhido = municipio;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
