import { Component, HostListener, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { CONST } from 'src/configurations/constants';
import { ModalCorsoComponent } from '../modal-corso/modal-corso.component';
@Component({
  selector: 'app-corsi',
  templateUrl: './corsi.component.html',
  styleUrls: ['./corsi.component.css']
})
export class CorsiComponent implements OnInit {
  
  boxe = CONST.BOXE_VIDEO;;
  isMobile : boolean = false;
  isResponsive : boolean = false;

  constructor(public matDialog: MatDialog) { }

  ngOnInit(): void {
    this.isMobile=window.matchMedia("only screen and (max-device-width: 992px)").matches;
    if(this.getBrowserWidth()<660){
      this.isResponsive=true;
    }
    else{
      this.isResponsive=false;
    }
  }

  getBrowserWidth(){
    return window.innerWidth;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    if(this.getBrowserWidth()<660){
      this.isResponsive=true;
    }
    else{
      this.isResponsive=false;
    }
  }

  getBrowser(){
    return !this.isMobile
  }

  getMobile(){
    return this.isMobile;
  }

  openModal(name: any) {
    const dialogConfig = new MatDialogConfig();
    let val = name;

    // https://material.angular.io/components/dialog/overview
    const modalDialog = this.matDialog.open(ModalCorsoComponent,{
      disableClose : false,
      id : "modal-component",
      height : "95%",
      width : "100%",
      data: { 
        header : val,
        body :"body",
        footer : "footer",
        image : ""
      },
    });
  }

}
