import { Pipe, PipeTransform } from '@angular/core';
import { Keramiek } from './models/keramiek.model';


@Pipe({
  name: 'keramiekfilter'
})
export class KeramiekfilterPipe implements PipeTransform {

  transform(keramieks: Keramiek[], name: string): Keramiek[] {
    if(!name || name.length === 0){
      return keramieks;
    }
    return keramieks.filter(ker =>
      ker.name.toLowerCase().startsWith(name.toLowerCase()))
  }

}
