import { createReducer, on } from '@ngrx/store';
import { PortfolioActions } from '../actions';
import { IInstrument } from '../../models';

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
  })),
  on(PortfolioActions.addInstrumentSuccess, (state, { instrumentId }) => ({
    ...state,
    watchlist: [...state.watchlist, instrumentId],
  })),
  on(PortfolioActions.removeInstrumentSuccess, (state, { instrumentId }) => ({
    ...state,
    watchlist: state.watchlist.filter(id => id !== instrumentId),
  }))
);
