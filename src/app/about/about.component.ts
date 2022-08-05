import { Component, OnInit } from '@angular/core';
import { CONST } from 'src/configurations/constants'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  about = CONST.ABOUT_IMG;

  constructor() { }

  ngOnInit(): void {
  }

}
