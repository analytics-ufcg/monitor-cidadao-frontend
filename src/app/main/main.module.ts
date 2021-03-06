import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';

import { HomeComponent } from './home/home.component';
import { SobreComponent } from './sobre/sobre.component';
import { DescricaoRiscoComponent } from './descricao-risco/descricao-risco.component';

@NgModule({
  declarations: [
    HomeComponent,
    SobreComponent,
    DescricaoRiscoComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule,
    SharedModule
  ]
})
export class MainModule { }