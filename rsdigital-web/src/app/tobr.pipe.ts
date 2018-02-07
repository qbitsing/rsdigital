import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'tobr'
})
export class TobrPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return value.split(/\n/g)
  }

}
