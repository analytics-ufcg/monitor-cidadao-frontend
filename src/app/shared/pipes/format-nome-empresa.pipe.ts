import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNomeEmpresa'
})
export class FormatNomeEmpresaPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value == null) {
      return "";
    }
    let nomeEmpresa = value.toLowerCase().replace(/(^|\s)\S/g, l => l.toUpperCase()).replace('Me', "ME");
    return nomeEmpresa
  }

}
