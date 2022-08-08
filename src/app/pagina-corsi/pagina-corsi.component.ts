import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CONST, getConstant } from 'src/configurations/constants';
import Corso from '../models/Corso';
import { CorsoService } from '../service/corso.service';


@Component({
  selector: 'app-pagina-corsi',
  templateUrl: './pagina-corsi.component.html',
  styleUrls: ['./pagina-corsi.component.css']
})
export class PaginaCorsiComponent implements OnInit {
  id? : any;
  immagine : any;
  title: any;
  body: any;
  corso?: Corso;

  constructor(private route: ActivatedRoute, private corsoService: CorsoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('titolo');
    this.retrieveCorso()
  }



  retrieveCorso(): void {
    console.log(this.corsoService.get(this.id));
    this.corsoService.get(this.id).then((data: Corso | undefined) =>{
      this.corso = data;
      this.immagine = getConstant(this.corso?.Immagine);
      this.body = this.corso?.Descrizione;
      this.title = this.corso?.Titolo;
      console.log(this.corso);
      console.log(this.immagine);
      console.log(this.body);
      console.log(this.title);

    });
    
  }


}
