import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CouleurService } from './couleur.service';
import { CouleurSlideComponent } from './couleur-slide/couleur-slide.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, CouleurSlideComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CouleurService]
})
export class AppModule { }
