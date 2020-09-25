import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInstrument, IWatchlistItem } from '../../models';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getInstruments(): Observable<IInstrument[]> {
    return this._http.get<IInstrument[]>('/api/v1/instruments');
  }

  getWatchlist(): Observable<IWatchlistItem[]> {
    return this._http.get<IWatchlistItem[]>('/api/v1/users/1/watchlist');
  }

  addInstrument(request: IWatchlistItem) {
    return this._http.post('/api/v1/users/1/watchlist', request);
  }

  removeInstrument(request: IWatchlistItem) {
    return this._http.delete(`/api/v1/users/1/watchlist/${request.instrumentId}`);
  }
}
