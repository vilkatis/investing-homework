import { Actions, createEffect, Effect, ofType, ROOT_EFFECTS_INIT } from '@ngrx/effects';
import { Observable, of } from 'rxjs';
import { Action } from '@ngrx/store';
import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { PortfolioActions } from '../actions';

@Injectable()
export class RootEffects {
  @Effect()
  public init$: Observable<Action> = createEffect(() => this.actions$
    .pipe(
      ofType(ROOT_EFFECTS_INIT),
      switchMap(() => {
        return of(PortfolioActions.getInstrumentsRequest())
      })
    )
  );

  public constructor(
    private actions$: Actions
  ) {
  }
}
