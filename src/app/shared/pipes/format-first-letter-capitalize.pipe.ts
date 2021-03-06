import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatFirstLetterCapitalize'
})
export class FormatFirstLetterCapitalizePipe implements PipeTransform {

  transform(value: string, ...args: any[]): string {
    if (value == '') return
    value = value.toLowerCase();

    if (value.length > 199){
      value += "..."
    }
    
    return value.substring(0,1).toUpperCase()+value.substring(1);
  }

}
