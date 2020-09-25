import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { PortfolioActions } from '../actions';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ApiService } from '../../providers/services';
import { of } from 'rxjs';

@Injectable()
export class PortfolioEffects {
  public getInstruments$ = createEffect(() =>
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

  public getWatchlist$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PortfolioActions.getWatchlistRequest),
      switchMap(() =>
        this._apiService.getWatchlist().pipe(
          map(response => {
            return PortfolioActions.getWatchlistSuccess({ watchlist: response.map(({instrumentId}) => instrumentId)});
          }),
          catchError(err => of(PortfolioActions.getWatchlistFailure()))
        )
      )
    )
  );

  public addInstrument$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PortfolioActions.addInstrumentRequest),
      switchMap((request) =>
        this._apiService.addInstrument(request).pipe(
          map(() => {
            return PortfolioActions.addInstrumentSuccess(request )
          }),
          catchError(err => of(PortfolioActions.addInstrumentFailure()))
        )
      )
    )
  );

  public removeInstrument$ = createEffect(() =>
    this._actions$.pipe(
      ofType(PortfolioActions.removeInstrumentRequest),
      switchMap((request) =>
        this._apiService.removeInstrument(request).pipe(
          map(() => {
            return PortfolioActions.removeInstrumentSuccess(request )
          }),
          catchError(err => of(PortfolioActions.removeInstrumentFailure()))
        )
      )
    )
  );

  public constructor(private _actions$: Actions, private _apiService: ApiService) {}
}
