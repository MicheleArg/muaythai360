import { Component, OnInit } from '@angular/core';
import { CONST } from 'src/configurations/constants';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css']
})
export class GalleriaComponent implements OnInit {
  gallery1 = CONST.GALLERY1;
  gallery2 = CONST.GALLERY2;
  gallery3 = CONST.GALLERY3;
  gallery4 = CONST.GALLERY4;
  gallery5 = CONST.GALLERY5;
  gallery6 = CONST.GALLERY6;
  gallery7 = CONST.GALLERY7;
  gallery8 = CONST.GALLERY8;
  gallery9 = CONST.GALLERY9;
  gallery10 = CONST.GALLERY10;
  gallery11 = CONST.GALLERY11;
  constructor() { }

  ngOnInit(): void {
  }

}
