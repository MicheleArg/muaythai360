import { Component, Input, OnInit } from '@angular/core';
import { CONST } from 'src/configurations/constants';

@Component({
  selector: 'app-single-articolo',
  templateUrl: './single-articolo.component.html',
  styleUrls: ['./single-articolo.component.css']
})
export class SingleArticoloComponent implements OnInit {
  @Input() image?: any;
  @Input() title?: any;
  @Input() description?: any;
  @Input() index?: number;
  pathImage='';
  constructor() { }

  ngOnInit(): void {
    this.pathImage=CONST.PATH+this.image;
  }

  getEven(){
    if(this.index != undefined)
      return (this.index % 2 == 0)
    return false;
  }

  getOdd(){
    if(this.index != undefined)
      return (this.index % 2 == 1)
    return false;
  }
}
