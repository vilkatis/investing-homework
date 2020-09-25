import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PortfolioActions } from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../../providers/services';
import { of } from 'rxjs';

@Injectable()
export class PortfolioEffects {
  public getGuilds$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PortfolioActions.getInstrumentsRequest),
      switchMap(() =>
        this._apiService.getInstruments().pipe(
          map(instrumentsArray => {
            const instruments = instrumentsArray.reduce((acc, instrument) => {
              acc[instrument.instrumentId] = instrument;
              return acc;
            }, {});
            return PortfolioActions.getInstrumentsSuccess({ instruments })
          }),
          catchError(err => of(PortfolioActions.getInstrumentsFailure()))
        )
      )
    )
  );

  public constructor(private _actions$: Actions, private _apiService: ApiService) {}
}
