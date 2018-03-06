import {Injectable} from '@angular/core';
import { IProduct } from './product';
import {Http,Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()

export class ProductService {
    //private productUrl="../api/products/products.json"; // static file path
    private productUrl ="https://ngapi4.herokuapp.com/api/getProducts";
    
    constructor(private http:Http){}
    
    getProduct():Observable<IProduct[]> {
        return this.http.get(this.productUrl).map((response:Response)=><IProduct[]> response.json())
                                            .catch(this.handleError);

                
            
    }
    private handleError(error:Response){
        return Observable.throw(error.json().error || "Server error");
    }
}