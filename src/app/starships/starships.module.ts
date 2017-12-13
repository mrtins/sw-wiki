import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarshipsComponent } from './starships.component';
import { StarshipsService } from './starships.service';

@NgModule({
  declarations: [StarshipsComponent],
  exports: [StarshipsComponent],
  providers: [StarshipsService]
})
export class StarshipsModule { }
