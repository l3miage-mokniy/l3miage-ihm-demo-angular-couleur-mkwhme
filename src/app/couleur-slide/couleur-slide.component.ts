import { Component, OnInit } from '@angular/core';
import { CouleurService } from '../couleur.service';
import { codeToRGB, RGBToCode } from '../tools';

@Component({
  selector: 'app-couleur-slide',
  templateUrl: './couleur-slide.component.html',
  styleUrls: ['./couleur-slide.component.css']
})
export class CouleurSlideComponent implements OnInit {
  R = 30;
  G = 30;
  B = 30;

  constructor(private CS: CouleurService) {
    CS.colorObs.subscribe( s => {
      const {R, G, B} = codeToRGB(s);
      this.R = R;
      this.B = B;
      this.G = G;
    })
  }

  ngOnInit() {
  }

  updateR(v: number): void {
    this.CS.colorCode = RGBToCode({
      R: v,
      G: this.G,
      B: this.B
    });
  }
}