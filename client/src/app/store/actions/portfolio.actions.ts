import { createAction, props } from '@ngrx/store';
import { IInstrument, IWatchlistItem } from '../../models';

export const getInstrumentsRequest = createAction('[Portfolio] Get instruments request');
export const getInstrumentsSuccess = createAction('[Portfolio] Get instruments success', props<{ instruments: Record<number, IInstrument> }>());
export const getInstrumentsFailure = createAction('[Portfolio] Get instruments failure');

export const getWatchlistRequest = createAction('[Portfolio] Get watchlist request');
export const getWatchlistSuccess = createAction('[Portfolio] Get watchlist success', props<{ watchlist: number[] }>());
export const getWatchlistFailure = createAction('[Portfolio] Get watchlist failure');

export const addInstrumentRequest = createAction('[Portfolio] Add instrument request', props<IWatchlistItem>());
export const addInstrumentSuccess = createAction('[Portfolio] Add instrument success', props<IWatchlistItem>());
export const addInstrumentFailure = createAction('[Portfolio] Add instrument failure');

export const removeInstrumentRequest = createAction('[Portfolio] Remove instrument request', props<IWatchlistItem>());
export const removeInstrumentSuccess = createAction('[Portfolio] Remove instrument success', props<IWatchlistItem>());
export const removeInstrumentFailure = createAction('[Portfolio] Remove instrument failure');
