import { Component, OnInit } from '@angular/core';
import { CONST } from 'src/configurations/constants';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  guantoni = CONST.GUANTONI_IMG;

  constructor() { }

  ngOnInit(): void {
  }

}
