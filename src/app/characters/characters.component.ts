import { CharactersService } from './characters.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css']
})
export class CharactersComponent {

  name: any;

  constructor(private _service: CharactersService) { 
    this._service
      .getCharacters()
      .subscribe(res => {
        console.log(res);
        this.name = res;
      }, err => console.log(err));
  }

}
