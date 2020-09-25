import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { IInstrument } from '../../../shared/models/interfaces';
import { select, Store } from '@ngrx/store';
import { selectWatchlistArray } from './store/selectors';
import { IRootState } from './store/reducers';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public watchlist$: Observable<IInstrument[]>;

  constructor(store: Store<IRootState>) {
    this.watchlist$ = store.pipe(select(selectWatchlistArray));
  }
}
