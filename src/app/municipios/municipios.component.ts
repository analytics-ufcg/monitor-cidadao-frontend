import { MunicipioService } from './../shared/services/municipio.service';
import { ActivatedRoute } from '@angular/router';
import { Municipio } from './../shared/models/municipio.model';

import { debounceTime, takeUntil } from 'rxjs/operators';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

import { UserService } from './../shared/services/user.service';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss']
})
export class MunicipiosComponent implements OnInit {

  private unsubscribe = new Subject();

  public municipioEscolhido: Municipio;

  constructor(
    private activatedroute: ActivatedRoute,
    private userService: UserService,
    private municipioService: MunicipioService) { }

  ngOnInit() {
    const id = this.activatedroute.snapshot.paramMap.get('id');
    // usado para buscar um município pelo id na URL
    this.getMunicipioById(id);
    // usado para alterar o município quando a busca é realizada
    this.getMunicipioObservable()
  }

  getMunicipioById(id: string) {
    this.municipioService.getById(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(municipio => {
        this.municipioEscolhido = municipio;
        this.userService.setMunicipioEscolhido(municipio);
      });
  }

  getMunicipioObservable() {
    this.userService
      .getMunicipioEscolhido()
      .pipe(
        debounceTime(300),
        takeUntil(this.unsubscribe))
      .subscribe(municipio => {
        this.municipioEscolhido = municipio;
      });
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
