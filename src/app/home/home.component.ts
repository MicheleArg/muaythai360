import { Component, OnInit } from '@angular/core';
import { CONST } from '../../configurations/constants'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logo = CONST.LOGO_IMG;
  home = CONST.HOME_IMG;
  guantoni = CONST.GUANTONI_IMG;
 
  
  facebookLogo = CONST.FB_LOGO;
  igLogo = CONST.IG_LOGO;
  about = CONST.ABOUT_IMG;
  boxe = CONST.BOXE_VIDEO;
  team= CONST.TEAM_IMG;
  

  title = CONST.TITLE; 
  lastScrollTop = 0;
  sizeNum = 1;
}
