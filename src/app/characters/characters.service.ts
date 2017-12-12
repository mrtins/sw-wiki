import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import { CharactersComponent } from './characters.component';
import 'rxjs/add/operator/map';

@Injectable()
export class CharactersService {

  private _baseUrl = 'https://swapi.co/api/';
  private _headers: Headers;

  constructor(private _http: Http) {
    this._headers = new Headers();
    this._headers.append('Content-Type', 'application/json');
  }

  getCharacters(): Observable<CharactersComponent[]> {
    return this._http
      .get('https://swapi.co/api/people/1')
      .map(res => res.json());
  }
}
