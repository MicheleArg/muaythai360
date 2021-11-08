import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  logo = 'assets/img/logo.png';
  facebookLogo = 'assets/img/facebook.png';
  igLogo = 'assets/img/ig.png';
  constructor() { }

  ngOnInit(): void {
  }

}
