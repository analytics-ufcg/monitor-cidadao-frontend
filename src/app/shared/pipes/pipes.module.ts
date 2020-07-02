import { FormatCpfCnpjPipe } from './format-cpf-cnpj.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    FormatCpfCnpjPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatCpfCnpjPipe
  ]
})
export class PipesModule { }
