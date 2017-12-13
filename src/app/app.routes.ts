import { CharactersComponent } from './characters/characters.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { StarshipsComponent } from './starships/starships.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'characters', component: CharactersComponent },
  { path: 'starships', component: StarshipsComponent },
  { path: '**', component: HomeComponent }
];

export const routing = RouterModule.forRoot(appRoutes);
