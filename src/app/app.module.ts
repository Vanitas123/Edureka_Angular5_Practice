import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';

import { MyFirstComponent } from './app.component';
import { ProductComponent } from '../product/product.component';
import { MainHeaderComponent } from '../layout/mainheader.component';
import { MainFooterComponent } from '../layout/mainfooter.component';
import { StarComponent } from '../shared/star.component';
import { ProductDetails } from '../product/product-details.component';
import { NotFound } from '../shared/notfound.component';
import { HomeComponent } from '../home/home.component';
import { OrderComponent } from '../orders/order.component';

import { ProductFilter } from '../product/product.filter.pipe';
import { ProductService } from '../product/product.service';


@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {path:'products', component:ProductComponent},
            {path:'products/:id', component:ProductDetails},
            {path:'home' ,component:HomeComponent},
            {path:'orders' ,component:OrderComponent},
            {path:'' ,redirectTo:'home', pathMatch:'full'},
            {path:'**', component:NotFound} // Must keep Not found path at end of all routes
        ])
    ],
    declarations:[
        MyFirstComponent,
        StarComponent,
        ProductComponent,
        MainHeaderComponent,
        MainFooterComponent,
        ProductFilter,
        ProductDetails,
        NotFound,
        HomeComponent,
        OrderComponent
        
    ],
    bootstrap:[
        MyFirstComponent
    ],
    providers:[
        ProductService
    ]
})

export class AppModule{}