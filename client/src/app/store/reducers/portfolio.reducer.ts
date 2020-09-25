import { createReducer, on } from '@ngrx/store';
import { IInstrument } from '../../../../../shared';
import { PortfolioActions } from '../actions';

export const name = 'portfolio';

export interface State {
  entities: Record<number, IInstrument>;
  watchlist: number[];
}

const initialState: State = {
  entities: {
  },
  watchlist: []
};

export const reducer = createReducer(
  initialState,
  on(PortfolioActions.getInstrumentsSuccess, (state, { instruments }) => ({
    ...state,
    entities: instruments,
  }))
);
