import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONST } from 'src/configurations/constants';


@Component({
  selector: 'app-pagina-corsi',
  templateUrl: './pagina-corsi.component.html',
  styleUrls: ['./pagina-corsi.component.css']
})
export class PaginaCorsiComponent implements OnInit {
  title?: any;
  img?: any;
  body?: any;
  gallery11 = CONST.GALLERY11;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.title = this.route.snapshot.queryParamMap.get('titolo');
  }

  ngAfterViewChecked(): void{
    window.scroll(0,0);
  }

}
