import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IInstrument } from '../../../../../shared';

@Injectable({providedIn: 'root'})
export class ApiService {
  constructor(private _http: HttpClient) {}

  getInstruments(): Observable<IInstrument[]> {
    return this._http.get<IInstrument[]>('/api/v1/instruments');
  }

  getWatchlist(): Observable<number[]> {
    return this._http.get<number[]>('/api/v1/users/1/watchlist');
  }
}
