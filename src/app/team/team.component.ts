import { Component, OnInit } from '@angular/core';
import { CONST } from 'src/configurations/constants';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team= CONST.TEAM_IMG;

  constructor() { } 

  ngOnInit(): void {
  }

}
