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
  watchlist: [1, 6, 9, 10, 15, 16, 52, 175, 1487, 1525, 2124, 15978, 956731, 976573, 997393, 998227]
};

export const reducer = createReducer(
  initialState,
  on(PortfolioActions.getInstrumentsSuccess, (state, { instruments }) => ({
    ...state,
    entities: instruments,
  }))
);
