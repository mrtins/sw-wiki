import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { CharactersComponent } from './characters.component';
import 'rxjs/add/operator/map';

@Injectable()
export class CharactersService {

  private _baseUrl = 'https://swapi.co/api/';

  constructor(private _http: Http) {
  }

  getCharacters() {
    return this._http
      .get(this._baseUrl + 'people/')
      .map(res => res.json());
  }
}
