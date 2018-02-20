import {Component} from '@angular/core';

@Component({

selector:'product',
templateUrl:'./product.component.html'

})

export class ProductComponent{
    products:any[]= [{
        "productId":1,
        "productName":"Kurti",
        "Description" :"Indian ethnic wear",
        "Price":500
    },
    {
        "productId":2,
        "productName":"Saree",
        "Description" :"Indian ethnic wear",
        "Price":2000
    },
    {
        "productId":3,
        "productName":"Jeans",
        "Description" :"Western wear",
        "Price":1500
    }]
}