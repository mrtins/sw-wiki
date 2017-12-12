import { CharactersService } from './characters.service';
import { CharactersComponent } from './characters.component';
import { Http } from '@angular/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [CharactersComponent],
  exports: [CharactersComponent],
  providers: [CharactersService]
})
export class CharactersModule { }
