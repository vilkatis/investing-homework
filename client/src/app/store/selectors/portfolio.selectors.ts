import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromPortfolio, IRootState } from '../reducers';

const selectInstrumentState = createFeatureSelector<IRootState, fromPortfolio.State>(fromPortfolio.name);

const selectInstruments = createSelector(selectInstrumentState, state => state.instruments);
const selectWatchlist = createSelector(selectInstrumentState, state => state.watchlist);

export const selectInstrumentsArray = createSelector(selectInstruments, entities => Object.values(entities));

export const selectWatchlistArray = createSelector(selectWatchlist, selectInstruments, (ids, entities) => ids.reduce((acc, id) => {
  const entity = entities[id];
  if (entity) acc.push(entity);
  return acc;
}, []));

export const selectInstrumentsNotInWatchlist = createSelector(selectInstrumentsArray, selectWatchlist, (instruments, watchlist) => {
  return instruments.filter(({instrumentId}) => watchlist.indexOf(instrumentId) === -1);
});
