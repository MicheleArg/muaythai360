import { Component, OnInit } from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Inject } from '@angular/core';
import {  getConstant, getConstantNext } from 'src/configurations/constants';
import { CorsoService} from '../service/corso.service';
import Corso from 'src/app/models/Corso';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-modal-corso',
  templateUrl: './modal-corso.component.html',
  styleUrls: ['./modal-corso.component.css']
})
export class ModalCorsoComponent implements OnInit {

  id? : any;
  immagine : any;
  title: any;
  body: any;
  corso?: Corso;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private corsoService: CorsoService) { }

  ngOnInit(): void {
    console.log(this.data)
    this.id = this.data.header;
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

  isFirst(){
    return this.id !== 'MUAY THAI SPORTIVA';
  }

  isLast(){
    return this.id !== 'MUAY LERT RIT';
  }

  goNext(){
    this.id = getConstantNext('mapperNext').get(this.id);
    this.retrieveCorso()
  }

  goPrev(){
    this.id = getConstantNext('mapperPrev').get(this.id);
    this.retrieveCorso()
  }
}
