import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilmsComponent } from './films.component';
import { FilmsService } from './films.service';

@NgModule({
  declarations: [FilmsComponent],
  imports: [FilmsComponent],
  providers: [FilmsService]
})
export class FilmsModule { }
