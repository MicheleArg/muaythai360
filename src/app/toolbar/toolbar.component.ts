import { Component, HostListener, OnInit } from '@angular/core';
import { CONST } from 'src/configurations/constants';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  logo = CONST.LOGO_IMG;
  isMobile : boolean = false;
  isResponsive : boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.isMobile=window.matchMedia("only screen and (max-device-width: 992px)").matches;
    if(this.getBrowserWidth()<660){
      this.isResponsive=true;
    }
    else{
      this.isResponsive=false;
    }
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
    return !this.isMobile && !this.isResponsive;
  }


  getBrowserResponsive(){
    return !this.isMobile && this.isResponsive;
  }

  getMobile(){
    return this.isMobile;
  }

  getBrowserWidth(){
    return window.innerWidth;
  }
}
