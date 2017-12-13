import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { routing } from './app.routes';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';

import { CharactersComponent } from './characters/characters.component';
import { CharactersService } from './characters/characters.service';

import { StarshipsComponent } from './starships/starships.component';
import { StarshipsService } from './starships/starships.service';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CharactersComponent,
    StarshipsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    routing
  ],
  providers: [CharactersService, StarshipsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
