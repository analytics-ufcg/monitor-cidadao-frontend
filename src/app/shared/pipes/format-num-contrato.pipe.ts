import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatNumContrato'
})
export class FormatNumContratoPipe implements PipeTransform {

  transform(value: any, ...args: any[]): any {
    if (value == null) {
      return "";
    }
    let newline = ''
    if (args.length == 1) {
      newline = '\n'
    }
    let numContrato = value
    if (value.length == 9) {
      numContrato = numContrato.replace(/(\w{5})(\w{4})/, '$1'+newline+'/$2')
    }
    return numContrato;
  }

}
