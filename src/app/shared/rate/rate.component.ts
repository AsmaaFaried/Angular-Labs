import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit,OnChanges {

  @Output() rateClicked:EventEmitter<number>=new EventEmitter<number>();
  @Input() rating=2;
  cwidth:number=0;
  constructor() {
    //DI
   }
   ngOnChanges(){
    this.cwidth=this.rating*15;
   }

  ngOnInit(): void {
  }

  rateFun(){
    this.rateClicked.emit(this.rating);
  }
}
