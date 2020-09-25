import { InjectionToken } from '@angular/core';
import { ActionReducerMap } from '@ngrx/store';
import * as fromPortfolio from './portfolio.reducer';

export interface IRootState {
  [fromPortfolio.name]: fromPortfolio.State;
}

export const REDUCERS = new InjectionToken<ActionReducerMap<IRootState>>('Root reducers token', {
  factory: () => ({
    [fromPortfolio.name]: fromPortfolio.reducer,
  })
});

export { fromPortfolio };
