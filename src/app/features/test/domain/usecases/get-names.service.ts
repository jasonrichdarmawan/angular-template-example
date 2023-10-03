import { Injectable } from '@angular/core';
import { delay, map, of } from 'rxjs';

@Injectable()
export class GetNamesService {
  private names = ['Batman', 'Superman', 'Joker', 'Luthor'];

  constructor() { }

  get() {
    return of(this.names)
      .pipe(
        map((items) => {
          let oneOrZero = Math.round(Math.random());

          if (oneOrZero == 0) return [];

          return items;
        }),
        delay(1000),
      )
  }
}
