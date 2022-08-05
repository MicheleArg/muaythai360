import { Component, OnInit } from '@angular/core';
import { ArticoloService } from '../service/articolo.service';
import Articolo from 'src/app/models/Articolo';
import { map } from 'rxjs/operators';
import { CONST } from 'src/configurations/constants'

@Component({
  selector: 'app-articoli',
  templateUrl: './articoli.component.html',
  styleUrls: ['./articoli.component.css']
})
export class ArticoliComponent implements OnInit {
  header = CONST.HEADER_IMG;
  pathImage = CONST.PATH_IMG;
  articoli: any;

  constructor(private articoloService: ArticoloService) { }

  ngOnInit(): void {
    this.retrieveArticoli();
  }

  retrieveArticoli(): void {
    this.articoloService.getAll().snapshotChanges().pipe(
      map(changes =>
        changes.map(c =>
          ({ id: c.payload.doc.id, ...c.payload.doc.data() })
        )
      )
    ).subscribe(data => {
      this.articoli = data;
      this.articoli.sort(function(a: { order: number; }, b: { order: number; }) { return a.order - b.order; })
    });
  }

}
