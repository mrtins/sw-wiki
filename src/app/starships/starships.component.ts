import { Component, OnInit } from '@angular/core';
import { StarshipsService } from './starships.service';

@Component({
  selector: 'app-starships',
  templateUrl: './starships.component.html',
  styleUrls: ['./starships.component.css']
})
export class StarshipsComponent {

  public starships: any[] = [];

  constructor(private _service: StarshipsService) {
    this._service
      .getStarShips()
      .subscribe(res => {
        console.log(res);
        this.starships = res.results;
      }, err => console.log(err));
  }
}
