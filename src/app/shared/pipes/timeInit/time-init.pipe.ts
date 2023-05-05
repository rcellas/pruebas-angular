import { Pipe, PipeTransform } from '@angular/core';
import { formatDistance } from 'date-fns';

@Pipe({
  name: 'timeInit'
})
export class TimeInitPipe implements PipeTransform {

  transform(value: Date): string {
    return formatDistance(new Date(),value);
  }

}
