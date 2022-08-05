import { Component, OnInit } from '@angular/core';
import { CONST } from 'src/configurations/constants';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logo = CONST.LOGO_IMG;
  facebookLogo = CONST.FB_LOGO;
  igLogo = CONST.IG_LOGO;
  constructor() { }

  ngOnInit(): void {
  }

}
