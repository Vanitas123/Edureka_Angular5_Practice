import {Pipe, PipeTransform} from '@angular/core';
import {IProduct} from './product';

@Pipe({
name: "productFilter"
})


export class ProductFilter implements PipeTransform {
    /* Param - value - value to be filtered,array of IProduct
             - filterBy - String to filter in value array
              - returns filtered IProduct  */
    transform(value:IProduct[], filterBy:string) : IProduct[] {
        
        filterBy = filterBy?filterBy.toLowerCase():null;
        return filterBy? value.filter((product:IProduct)=>
        product.productName.toLowerCase().indexOf(filterBy) !== -1):value;

    }

}
