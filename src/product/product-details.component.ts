import {Component, OnInit} from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
    templateUrl:'./product-details.component.html'
    // No need of selector as we are not nesting this component in another component
})

export class ProductDetails implements OnInit{

    title="Product Details Page";
    name:string;
    imgUrl:string;
    constructor(private _route : ActivatedRoute, private _router:Router){}

    ngOnInit(): void {
        let id= + this._route.snapshot.params['id'];
        this.title+= `>> ${id}`;
        this._route
            .queryParams
            .subscribe(params=>{
                this.name = params['name'],
                this.imgUrl=params['img']
            })
    }
    onBack():void{
        this._router.navigate(['/products']);
    }
}