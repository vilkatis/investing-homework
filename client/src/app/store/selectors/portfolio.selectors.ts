import { createFeatureSelector, createSelector } from '@ngrx/store';
import { fromPortfolio, IRootState } from '../reducers';

const selectInstrumentState = createFeatureSelector<IRootState, fromPortfolio.State>(fromPortfolio.name);

const selectInstrumentEntities = createSelector(selectInstrumentState, state => state.entities);
const selectWatchlist = createSelector(selectInstrumentState, state => state.watchlist);

export const selectInstrumentsArray = createSelector(selectInstrumentEntities, entities => Object.values(entities));

export const selectWatchlistArray = createSelector(selectWatchlist, selectInstrumentEntities, (ids, entities) => ids.reduce((acc, id) => {
  const entity = entities[id];
  if (entity) acc.push(entity);
  return acc;
}, []));
