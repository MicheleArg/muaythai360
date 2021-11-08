import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {
  team='assets/img/gallery1.jpg';

  constructor() { }

  ngOnInit(): void {
  }

}
