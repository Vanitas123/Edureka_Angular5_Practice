import {Component,OnInit} from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';


@Component({

selector:'product',
templateUrl:'./product.component.html'

})



export class ProductComponent implements OnInit{
    title:string="Products List";
    showImage:boolean=true;
    isGridView:boolean=true;
    filterProduct:string="Leaf";
    errorMessage:string;
    constructor( private _productService:ProductService){}
    imgWidth=50;

    products:IProduct[];
    toggleImage() :void {
        this.showImage = !this.showImage;
    }
    toggleView() :void {
        this.isGridView = !this.isGridView;
    }
    ngOnInit():void{
        console.log("ngOnInit executing ....");
        this._productService.getProduct().subscribe((productsList)=>this.products=productsList,
            (error)=>this.errorMessage=<any> error);
    }

    onRatingClicked(message:string):void{
        this.title = "Product List >> "+message;
    }
}