import { FormatCpfCnpjPipe } from './format-cpf-cnpj.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormatNumContratoPipe } from './format-num-contrato.pipe';
import { FormatNomeEmpresaPipe } from './format-nome-empresa.pipe';
import { HighlightSearchPipe } from './highlight-search.pipe';
import { FormatFirstLetterCapitalizePipe } from './format-first-letter-capitalize.pipe';



@NgModule({
  declarations: [
    FormatCpfCnpjPipe,
    FormatNumContratoPipe,
    FormatNomeEmpresaPipe,
    HighlightSearchPipe,
    FormatFirstLetterCapitalizePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FormatCpfCnpjPipe,
    FormatNumContratoPipe,
    FormatNomeEmpresaPipe,
    HighlightSearchPipe,
    FormatFirstLetterCapitalizePipe
  ]
})
export class PipesModule { }
