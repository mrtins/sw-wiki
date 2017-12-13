import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class StarshipsService {
  private _baseUrl = 'https://swapi.co/api/';

  constructor(private _http: Http) {}

  getStarShips(type = 'starships/') {
    return this._http
      .get(this._baseUrl + type)
      .map(res => res.json());
  }
}
