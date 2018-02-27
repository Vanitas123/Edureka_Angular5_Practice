import {NgModule} from '@angular/core';
import {MyFirstComponent} from './app.component';
import { ProductComponent } from '../product/product.component';
import {BrowserModule} from '@angular/platform-browser';
import { MainHeaderComponent } from '../layout/mainheader.component';
import { MainFooterComponent } from '../layout/mainfooter.component';
import {FormsModule} from '@angular/forms';
import { ProductFilter } from '../product/product.filter.pipe';

@NgModule({
    imports:[
        BrowserModule,
        FormsModule
    ],
    declarations:[
        MyFirstComponent,
        ProductComponent,
        MainHeaderComponent,
        MainFooterComponent,
        ProductFilter
    ],
    bootstrap:[
        MyFirstComponent
    ]
})

export class AppModule{}