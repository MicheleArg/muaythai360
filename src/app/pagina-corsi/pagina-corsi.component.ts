import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pagina-corsi',
  templateUrl: './pagina-corsi.component.html',
  styleUrls: ['./pagina-corsi.component.css']
})
export class PaginaCorsiComponent implements OnInit {
  titolo?: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.titolo = this.route.snapshot.queryParamMap.get('titolo');
  }

  ngAfterViewChecked(): void{
    console.log(this.titolo);
    console.log(window.location);
    if(this.titolo!=undefined && this.titolo!=null && this.titolo!=''){
      // window.location.href = window.location.origin + window.location.pathname + "/#"+this.titolo;
      var element = document.getElementById(this.titolo);
      if(element!=undefined){
        element.scrollIntoView({behavior: "smooth"});
      }
    } 
  }

}
