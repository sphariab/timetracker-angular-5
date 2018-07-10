import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  pure: false
})


export class FilterPipe implements PipeTransform {
  transform(items: any[], filter: any): any {
    if (!items || !filter) {
      return items;
    }
    console.log(filter);
    // filter items array, items which match and return true will be
    // kept, false will be filtered out
    if (filter === 'all') {
      return items
    }
    else {

      return items.filter(function(item){
        return item.tags.indexOf(filter[0]) > -1
        });
    }
  }
}
