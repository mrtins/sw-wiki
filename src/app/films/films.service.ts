import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

import 'rxjs/add/operator/map';

@Injectable()
export class FilmsService {

  constructor(private _http: Http) { }

  getFilms() {
    return this._http
      .get('https://swapi.co/api/films/')
      .map(res => res.json());
  }
}
