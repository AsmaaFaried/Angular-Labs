import { Component, Input, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'app-rate',
  templateUrl: './rate.component.html',
  styleUrls: ['./rate.component.css']
})
export class RateComponent implements OnInit,OnChanges {

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

}
