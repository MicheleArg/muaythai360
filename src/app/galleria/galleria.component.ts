import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-galleria',
  templateUrl: './galleria.component.html',
  styleUrls: ['./galleria.component.css']
})
export class GalleriaComponent implements OnInit {
  gallery1 = 'assets/img/gallery1.jpg';
  gallery2 = 'assets/img/gallery2.jpg';
  gallery3 = 'assets/img/gallery3.jpg';
  gallery4 = 'assets/img/gallery4.jpg';
  gallery5 = 'assets/img/gallery5.jpg';
  gallery6 = 'assets/img/gallery6.jpg';
  gallery7 = 'assets/img/gallery7.jpg';
  gallery8 = 'assets/img/gallery8.jpg';
  gallery9 = 'assets/img/gallery9.jpg';
  gallery10 = 'assets/img/gallery10.jpg';
  gallery11 = 'assets/img/gallery11.jpg';
  constructor() { }

  ngOnInit(): void {
  }

}
