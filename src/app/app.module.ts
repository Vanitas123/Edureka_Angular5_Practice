import {NgModule} from '@angular/core';
import {MyFirstComponent} from './app.component';
import {BrowserModule} from '@angular/platform-browser';

@NgModule({
imports:[BrowserModule],
declarations:[MyFirstComponent],
bootstrap:[MyFirstComponent]
})

export class AppModule{}