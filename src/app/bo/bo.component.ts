import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-bo',
  templateUrl: './bo.component.html',
  styleUrls: ['./bo.component.css']
})
export class BoComponent implements OnInit {
  box1 = 'assets/img/home.png';
  box2 = 'assets/img/home.png';
  box3 = 'assets/img/home.png';
  box4 = 'assets/img/home.png';
  box5 = 'assets/img/home.png';
  box6 = 'assets/img/home.png';
  constructor() { }

  ngOnInit(): void {
  }

}
