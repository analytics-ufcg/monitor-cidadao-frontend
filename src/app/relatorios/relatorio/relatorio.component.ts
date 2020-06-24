import { RelatorioService } from './../../shared/services/relatorio.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-relatorio',
  templateUrl: './relatorio.component.html',
  styleUrls: ['./relatorio.component.scss']
})
export class RelatorioComponent implements OnInit {
  relatorio: any = '';
  rota: string;

  public isLoading = true;

  constructor(private relatorioService: RelatorioService, private route: ActivatedRoute) {
    this.rota = this.route.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.carregaRelatorio ()
  }

  carregaRelatorio () {
    this.relatorio = this.relatorioService.getDescritivo(this.rota)
    .subscribe(data => {
      this.relatorio = data;
      this.isLoading = false;
    });
  }
}
