import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class CouleurService {

  private subjColor = new BehaviorSubject<string>("#000000");
  public colorObs: Observable<string> = this.subjColor.asObservable();

  constructor() { }

  get colorCode(): string {       // code #RRGGBB
    return this.subjColor.value;
  }

  set colorCode(code: string) {    // code #RRGGBB
    this.subjColor.next(code);
  }

}
