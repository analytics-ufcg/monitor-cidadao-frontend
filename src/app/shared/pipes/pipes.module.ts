import { FormatCpfCnpjPipe } from './format-cpf-cnpj.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatNumContratoPipe } from './format-num-contrato.pipe';
import { FormatNomeEmpresaPipe } from './format-nome-empresa.pipe';



@NgModule({
  declarations: [
    FormatCpfCnpjPipe,
    FormatNumContratoPipe,
    FormatNomeEmpresaPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatCpfCnpjPipe,
    FormatNumContratoPipe,
    FormatNomeEmpresaPipe
  ]
})
export class PipesModule { }
