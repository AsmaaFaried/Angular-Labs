import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'arraySplice',
  pure:false
})
export class ArraySplicePipe implements PipeTransform {

  transform(value: string[]): string[] {
    let res:string[]=[];
    for(let i=0;i<value.length;i++){
      if(value[i].startsWith("A")){
        res.push(value[i]);
      }
    }
    return res;
  }

}
