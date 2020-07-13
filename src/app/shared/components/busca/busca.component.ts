import { BuscaService } from './../../services/busca.service';
import { UserService } from '../../services/user.service';
import { RegiaoService } from '../../services/regiao.service';

import { TipoBusca } from './../../enum/tipo-busca.enum';
import { Contrato } from './../../models/contrato.model';
import { Municipio } from '../../models/municipio.model';

import { Component, OnInit } from '@angular/core';
import { takeUntil, distinctUntilChanged, tap, switchMap, catchError, debounceTime } from 'rxjs/operators';
import { Observable, Subject, of, from } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';



@Component({
  selector: 'app-busca',
  templateUrl: './busca.component.html',
  styleUrls: ['./busca.component.scss']

})
export class BuscaComponent implements OnInit {

  modelBusca: any;
  searching = false;
  searchFailed = false;

  constructor(private router: Router,
    private userService: UserService,
    private buscaService: BuscaService) {

    // utilizado para que a rota nao seja reutilizada
    // e permita que o router.navite atualize a página
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    }
  }

  ngOnInit() { }

  /**
   * Realiza a busca de acordo com o tipo do item buscavel
   * recebido como parâmetro.
   * 
   * @param buscavel um município ou um contrato
   */
  selecionaBuscavel(buscavel) {
    // Busca pelo município
    if (this.buscaService.isMunicipio(buscavel)) {
      this.userService.setMunicipioEscolhido(buscavel);
      this.router.navigate(['/municipios']);

      // busca pelo contrato
    } else if (this.buscaService.isContrato(buscavel)) {
      this.router.navigateByUrl('/contrato/' + buscavel.id,
        { queryParams: { id: buscavel.id } })
    }
  }

  /**
   * Usado para buscar e e setar as sugestões da busca por municípios
   * e contratos.
   * 
   * @param text$ utilizado no ng-templete para apresentar as sugestões.
   */
  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      tap(() => this.searching = true),
      switchMap(term => this.buscaService.search(term).pipe(
        tap(() => this.searchFailed = false),
        catchError(() => {
          this.searchFailed = true;
          return of([]);
        }))),
      tap(() => this.searching = false)
    )

  /**
   *  Formata o texto padrão do input 
   */
  formatter = (x: { descricao: string }) => x.descricao;

}
