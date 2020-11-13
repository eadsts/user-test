import { Pipe, PipeTransform } from '@angular/core';
import { makeStateKey } from '@angular/platform-browser';

@Pipe({
  name: 'masked'
})
export class PassDisplayPipe implements PipeTransform {

  //first parameter is data passed into auotgenerated transform()
  //can have other parameters
  transform(password: string): string {
    let len = password.length;
    let mask = "";
    for(let idx = 0; idx < len; idx++) {
      mask += "#";
    }
      return mask;
  }
}
