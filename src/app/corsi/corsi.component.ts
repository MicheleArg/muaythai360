import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-corsi',
  templateUrl: './corsi.component.html',
  styleUrls: ['./corsi.component.css']
})
export class CorsiComponent implements OnInit {
  boxe = 'assets/video/boxe.mp4';

  constructor() { }

  ngOnInit(): void {
  }

}
