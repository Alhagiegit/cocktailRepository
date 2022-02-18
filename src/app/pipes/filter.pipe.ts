import { Pipe, PipeTransform } from '@angular/core';
import { drinksResponce } from '../model/drink';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, filterString: string) {
    if (value) {
      if (value.length === 0 || filterString === '') {
        return value;
      }
    }
    if (Array.isArray(value)) {
      const drinks: drinksResponce[] = [];
      for (let drink of value) {
        if (drink['strDrink'].toLowerCase().includes(filterString)) {
          drinks.push(drink);
        } else if (drink['strCategory'].toLowerCase().includes(filterString)) {
          drinks.push(drink);
        }
      }
      return drinks;
    } else {
      return value;
    }
  }
}
