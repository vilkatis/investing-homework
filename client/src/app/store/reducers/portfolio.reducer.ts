import { createReducer, on } from '@ngrx/store';
import { IInstrument } from '../../../../../shared';
import { PortfolioActions } from '../actions';

export const name = 'portfolio';

export interface State {
  instruments: Record<number, IInstrument>;
  watchlist: number[];
}

const initialState: State = {
  instruments: {},
  watchlist: []
};

export const reducer = createReducer(
  initialState,
  on(PortfolioActions.getInstrumentsSuccess, (state, { instruments }) => ({
    ...state,
    instruments,
  })),
  on(PortfolioActions.getWatchlistSuccess, (state, { watchlist }) => ({
    ...state,
    watchlist,
  }))
);
