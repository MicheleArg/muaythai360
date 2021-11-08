import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {
  @Input() height?: number;
  @Input() toppos?: number;
  @Input() type?: String;
  heightval = "";
  top = "";
  constructor() { 
  } 

  ngOnInit(): void {
    let x: number = 250;
    let y: number = 250;
    if(this.height != undefined) x = x* this.height;
    if(this.height != undefined && this.toppos!=undefined) y = y + this.toppos;
    this.heightval = x + 'px'
    this.top = y + 'px'
    console.log(this.heightval);
    console.log(this.top);
  }

  styleObject(){
    if(this.toppos==undefined || this.toppos==0){
      return {height: this.heightval,top: '250px'}
    }
    return {height: this.heightval,top: this.top}
  }

  getSingleEvent(){
    if(this.type!=undefined){
      if(this.type=='Single') return true;
    }
    return false;
  }

  getDoubleEvent(){
    if(this.type!=undefined){
      if(this.type=='Double') return true;
    }
    return false;
  }
}
