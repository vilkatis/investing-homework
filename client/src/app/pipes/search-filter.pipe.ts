import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'searchFilter'})
export class SearchFilterPipe implements PipeTransform {
  public transform<T>(items: T[], filter: Partial<T>): T[] {
    if (!items || items.length === 0) return [];
    return items.filter(item => {
      return Object.entries(filter).filter(([, value]) => value !== "").reduce((acc, [key, value]) => {
        return acc && `${item[key]}`.toLowerCase().indexOf(`${value}`.toString().toLowerCase().trim()) > -1;
      }, true);
    });
  }
}
