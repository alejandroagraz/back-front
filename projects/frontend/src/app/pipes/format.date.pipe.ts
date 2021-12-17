import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
@Pipe({
    name: 'formatDate'
})
export class FormatDatePipe implements PipeTransform{

  constructor(private datePipe: DatePipe) {}

  transform(value: string) {
    const today = new Date;
    const yesterday = new Date;
    const data = new Date(value);
    yesterday.setDate(yesterday.getDate() - 1);

    if (today.toLocaleDateString().valueOf() == data.toLocaleDateString().valueOf()) {
      return this.datePipe.transform(value, 'shortTime');
    } else if (yesterday.toLocaleDateString().valueOf() == data.toLocaleDateString().valueOf()){
      return 'Yesterday'
    } else {
      return this.datePipe.transform(value, 'MMM d');
    }
  }

}
