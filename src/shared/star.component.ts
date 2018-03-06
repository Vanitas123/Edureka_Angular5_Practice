import {Component,OnChanges,Input,Output,EventEmitter} from '@angular/core';

@Component({
   selector:'star-ratings',
   templateUrl:'./star.component.html',
   styleUrls:['./star.component.css']
})

export class StarComponent implements OnChanges {
    @Input() rating:number;
    @Output() ratingClicked:EventEmitter<string> = new EventEmitter<string>();
    starWidth:number;

    ngOnChanges():void{
        this.starWidth = this.rating*86/5;
    }
    onStar():void{
        //this.ratingClicked.emit("The rating is"+this.rating); // concat way-1
        this.ratingClicked.emit(`The rating is ${this.rating}`); //concat way-2
    }

    onRatingClicked(event):void
    {

    }

}