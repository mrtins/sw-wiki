import { Component, OnInit } from '@angular/core';
import { FilmsService } from './films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent {

  public films: any[] = [];

  constructor(private _service: FilmsService) {
    this._service
      .getFilms()
      .subscribe(res => {
        console.log(res);
        this.films = res.results;
      }, err => console.log(err));
  }
}
