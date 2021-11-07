import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  logo = '../assets/img/logo.png';
  home = '../assets/img/home.png';
  guantoni = '../assets/img/guantoni.jpeg';
  box1 = '../assets/img/home.png';
  box2 = '../assets/img/home.png';
  box3 = '../assets/img/home.png';
  box4 = '../assets/img/home.png';
  box5 = '../assets/img/home.png';
  box6 = '../assets/img/home.png';
  gallery1 = '../assets/img/gallery1.jpg';
  gallery2 = '../assets/img/gallery2.jpg';
  gallery3 = '../assets/img/gallery3.jpg';
  gallery4 = '../assets/img/gallery4.jpg';
  gallery5 = '../assets/img/gallery5.jpg';
  gallery6 = '../assets/img/gallery6.jpg';
  gallery7 = '../assets/img/gallery7.jpg';
  gallery8 = '../assets/img/gallery8.jpg';
  gallery9 = '../assets/img/gallery9.jpg';
  gallery10 = '../assets/img/gallery10.jpg';
  gallery11 = '../assets/img/gallery11.jpg';
  facebookLogo = '../assets/img/facebook.png';
  igLogo = '../assets/img/ig.png';

  title = 'muaythai360'; 
  lastScrollTop = 0;
  sizeNum = 1;
  size = 'scale(' + this.sizeNum + ')';

  @HostListener("window:scroll", []) onWindowScroll() {
    // var st = window.pageYOffset || document.documentElement.scrollTop; // Credits: "https://github.com/qeremy/so/blob/master/so.dom.js#L426"
    // if (st > this.lastScrollTop){
    //   console.log('down')
    //   this.sizeNum = this.sizeNum + 0.01*this.sizeNum;
    //   if(this.sizeNum>1.2) this.sizeNum=1.2;
    //   this.size = 'scale(' + this.sizeNum + ')';

    // } else {
    //     console.log('up')
    //     this.sizeNum = this.sizeNum - 0.01*this.sizeNum;
    //     if(this.sizeNum<1) this.sizeNum = 1;
    //     this.size = 'scale(' + this.sizeNum + ')';
    // }
    // this.lastScrollTop = st <= 0 ? 0 : st;
  }


}
