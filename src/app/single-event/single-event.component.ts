import { Component, ElementRef, HostListener, Inject, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CONST } from 'src/configurations/constants';

@Component({
  selector: 'app-single-event',
  templateUrl: './single-event.component.html',
  styleUrls: ['./single-event.component.css']
})
export class SingleEventComponent implements OnInit {
  @Input() height?: number;
  @Input() toppos?: number;
  @Input() type?: String;
  @Input() image?: any;
  @Input() title?: any;
  @Input() description?: any;
  @Input() index?: number;
  showVal: boolean = false;
  pathImage = "";
  heightval = "";
  top = "";
  isResponsive: boolean = false;

  constructor(public matDialog: MatDialog) { 
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
    this.pathImage=CONST.PATH+this.image;
    console.log(this.pathImage);
    // this.showEvent();
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

  getShowEvent(){
    return this.showVal;
  }

  showEvent(){
    this.showVal = true;
  }

  getEven(){
    if(this.index != undefined ){
      return (this.index % 2 == 0 || this.isResponsive)
    }
    return false;
  }

  getOdds(){
    if(this.index != undefined) {
      return (this.index % 2 == 1 && !this.isResponsive)
    }
    return false;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(this.getBrowserWidth()<800){
      this.isResponsive=true;
    }
    else{
      this.isResponsive=false;
    }
  }

  getBrowserWidth(){
    return window.innerWidth;
  }

  checkOverflow (element: { offsetHeight: number; scrollHeight: number; offsetWidth: number; scrollWidth: number; }) {
    return element.offsetHeight < element.scrollHeight ||
           element.offsetWidth < element.scrollWidth;
  }

  openModal() {
    const dialogConfig = new MatDialogConfig();
    let val = this.description;

    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalEventDialog,{
      disableClose : false,
      id : "modal-event",
      width : "50%",
      height: "50%",
      backdropClass: 'backdropBackground',
      hasBackdrop: true,
      data: { 
        text : val,
      },
    });
  }
}

export interface DialogData {
  text: string;
}


@Component({
  selector: 'modal-event-dialog',
  templateUrl: 'modal-event-dialog.html',
  styleUrls: ['./single-event.component.css']

})
export class ModalEventDialog {

  constructor(@Inject(MAT_DIALOG_DATA) public data: DialogData) {}

    desc?: any;
    ngOnInit(): void{
      this.desc = this.data.text;
    }


}
