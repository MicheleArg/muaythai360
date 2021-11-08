import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  logo = 'assets/img/logo.png';
  home = 'assets/img/home.png';
  guantoni = 'assets/img/guantoni.jpeg';
 
  
  facebookLogo = 'assets/img/facebook.png';
  igLogo = 'assets/img/ig.png';
  about = 'assets/img/about.png';
  boxe = 'assets/video/boxe.mp4';
  team='assets/img/gallery1.jpg';
  // logo = '../assets/img/logo.png';
  // home = '../assets/img/home.png';
  // guantoni = '../assets/img/guantoni.jpeg';
  // box1 = '../assets/img/home.png';
  // box2 = '../assets/img/home.png';
  // box3 = '../assets/img/home.png';
  // box4 = '../assets/img/home.png';
  // box5 = '../assets/img/home.png';
  // box6 = '../assets/img/home.png';
  // gallery1 = '../assets/img/gallery1.jpg';
  // gallery2 = '../assets/img/gallery2.jpg';
  // gallery3 = '../assets/img/gallery3.jpg';
  // gallery4 = '../assets/img/gallery4.jpg';
  // gallery5 = '../assets/img/gallery5.jpg';
  // gallery6 = '../assets/img/gallery6.jpg';
  // gallery7 = '../assets/img/gallery7.jpg';
  // gallery8 = '../assets/img/gallery8.jpg';
  // gallery9 = '../assets/img/gallery9.jpg';
  // gallery10 = '../assets/img/gallery10.jpg';
  // gallery11 = '../assets/img/gallery11.jpg';
  // facebookLogo = '../assets/img/facebook.png';
  // igLogo = '../assets/img/ig.png';
  // about = '../assets/img/about.png';
  // boxe = '../assets/video/boxe.mp4';

  title = 'muaythai360'; 
  lastScrollTop = 0;
  sizeNum = 1;
}
