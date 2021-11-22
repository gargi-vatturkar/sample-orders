import { Pipe, PipeTransform } from '@angular/core';
import { ORDER } from '../app.component';

@Pipe({
  name: 'filters'
})
export class FiltersPipe implements PipeTransform {

  transform(orderList: ORDER[], searchParam: string, 
    status: string, distribution: string): any[] {
    
      let res: ORDER[] = orderList;

      if(status) res = orderList.filter(s => s.status.toLowerCase() == status.toLowerCase());

      if(distribution) res = res.filter(s => s.distribution.toLowerCase() == distribution.toLowerCase());

      if(searchParam){
        searchParam = searchParam.toLowerCase();
        res = res.filter(s => s.custName.toLowerCase().includes(searchParam) || s.date.toLowerCase().includes(searchParam) || 
        s.distribution.toLowerCase().includes(searchParam) || s.price.toString().toLowerCase().includes(searchParam) || 
        s.prodName.toLowerCase().includes(searchParam) || s.refId.toString().toLowerCase().includes(searchParam) || 
        s.status.toLowerCase().includes(searchParam) );
      }
      return res;
  }

}
