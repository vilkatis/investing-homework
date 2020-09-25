import { createAction, props } from '@ngrx/store';
import { IInstrument } from '../../../../../shared';

export const getInstrumentsRequest = createAction('[Portfolio] Get instruments request');
export const getInstrumentsSuccess = createAction('[Portfolio] Get instruments success', props<{ instruments: Record<number, IInstrument> }>());
export const getInstrumentsFailure = createAction('[Portfolio] Get instruments failure');

export const getWatchlistRequest = createAction('[Portfolio] Get watchlist request');
export const getWatchlistSuccess = createAction('[Portfolio] Get watchlist success', props<{ watchlist: number[] }>());
export const getWatchlistFailure = createAction('[Portfolio] Get watchlist failure');
