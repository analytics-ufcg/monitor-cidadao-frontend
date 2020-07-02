import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'client';
  isCollapsed = false;

  mostrarBusca = false;

  public navbarOpen = false;

  alteraVisibilidadeBusca() {
    this.mostrarBusca = !this.mostrarBusca;
    //Adicionado para fechar o navbar no mobile
    this.isCollapsed = false;
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }






}
