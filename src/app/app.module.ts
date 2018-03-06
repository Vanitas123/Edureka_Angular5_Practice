import {NgModule} from '@angular/core';
import {MyFirstComponent} from './app.component';
import { ProductComponent } from '../product/product.component';
import {BrowserModule} from '@angular/platform-browser';
import { MainHeaderComponent } from '../layout/mainheader.component';
import { MainFooterComponent } from '../layout/mainfooter.component';
import {FormsModule} from '@angular/forms';
import { ProductFilter } from '../product/product.filter.pipe';
import { StarComponent } from '../shared/star.component';
import { ProductService } from '../product/product.service';
import { HttpModule } from '@angular/http';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    declarations:[
        MyFirstComponent,
        StarComponent,
        ProductComponent,
        MainHeaderComponent,
        MainFooterComponent,
        ProductFilter
        
    ],
    bootstrap:[
        MyFirstComponent
    ],
    providers:[
        ProductService
    ]
})

export class AppModule{}