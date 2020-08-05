import { Component, OnInit, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-barra-navegacao',
  templateUrl: './barra-navegacao.component.html',
  styleUrls: ['./barra-navegacao.component.scss']
})
export class BarraNavegacaoComponent implements OnInit {

  mostrarInputBusca = false;
  mostrarBtnBusca = false;
  windowWidth;

  isCollapsed = false;

  public navbarOpen = false;

  constructor(location: Location, router: Router, private eRef: ElementRef) {
    // desativa o botão de busca caso esteja na página home 
    router.events.subscribe(val => {
      if (location.path() != "") {
        let isHomePage = location.path() == '/home'
        
        this.mostrarBtnBusca = ! (isHomePage);
        this.alteraVisibilidadeMobile (isHomePage)
      } 
    });
  }

  ngOnInit(): void { }

  // Utilizado para remover o botão de busca e 
  // adicionar o input no mobile
  alteraVisibilidadeMobile (isHomePage:boolean) {
    this.windowWidth = window.innerWidth;
    if (this.windowWidth < 987 ) {
      if (!isHomePage) {
        this.mostrarInputBusca = true;
      }
      this.mostrarBtnBusca = false;
    }
  }

  // Utilizado para mostrar o input de busca ao clicar no botão
  alteraVisibilidadeBusca() {
    this.mostrarInputBusca = !this.mostrarInputBusca;
  }

  // Utilizado no mobile para fechar a navbar
  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

  // Desativa busca ao clicar fora do elemento
  @HostListener('document:click', ['$event'])
  public documentClick(event): void {
    if(!this.eRef.nativeElement.contains(event.target) && this.windowWidth > 987) {
        this.mostrarInputBusca=false;
    }
  }
}
