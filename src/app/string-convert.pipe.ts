import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringConvert'
})
export class StringConvertPipe implements PipeTransform {

  transform(value: string): unknown {
    // return s+" "+value;
    return value? value.replace(/-/g, " ") : value;
  }

}
