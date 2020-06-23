import { Municipio } from './../shared/models/municipio.model';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { UserService } from './../shared/services/user.service';
import { Subject } from 'rxjs';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-municipios',
  templateUrl: './municipios.component.html',
  styleUrls: ['./municipios.component.scss']
})
export class MunicipiosComponent implements OnInit {

  private unsubscribe = new Subject();

  public municipioEscolhido: Municipio;

  constructor(
    private userService: UserService) { }

  ngOnInit() {
    this.getMunicipio();
  }

  getMunicipio() {
    this.userService
      .getMunicipioEscolhido()
      .pipe(
        debounceTime(300),
        takeUntil(this.unsubscribe))
      .subscribe(municipio => {
        this.municipioEscolhido = municipio;
      });
  }

}
