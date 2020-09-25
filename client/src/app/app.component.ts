import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { selectInstrumentsNotInWatchlist, selectWatchlistArray } from './store/selectors';
import { IRootState } from './store/reducers';
import { IEvent, IInstrument } from './models';
import { PortfolioActions } from './store/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public watchlist$: Observable<IInstrument[]>;
  public instruments$: Observable<IInstrument[]>

  constructor(private _store: Store<IRootState>) {
    this.watchlist$ = _store.pipe(select(selectWatchlistArray));
    this.instruments$ = _store.pipe(select(selectInstrumentsNotInWatchlist));
  }

  public catchEvent(event: IEvent) {
    switch (event.type) {
      case 'instrument':
        switch (event.action.type) {
          case 'addInstrument':
            this._store.dispatch(PortfolioActions.addInstrumentRequest({instrumentId: event.action.payload}));
            break;
          case 'removeInstrument':
            this._store.dispatch(PortfolioActions.removeInstrumentRequest({instrumentId: event.action.payload}));
            break;
        }
        break;
      default:
        break;
    }
  }
}
