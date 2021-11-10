import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.css']
})
export class ToolbarComponent implements OnInit {
  logo = 'assets/img/logo.png';
  isMobile : boolean = false;


  constructor() { }

  ngOnInit(): void {
    this.isMobile=window.matchMedia("only screen and (max-device-width: 992px)").matches;
  }

  getBrowser(){
    return !this.isMobile;
  }

  getMobile(){
    return this.isMobile;
  }
}
