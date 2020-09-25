import { Component, Input, OnInit } from '@angular/core';
import { IInstrument } from '../../../../../shared';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input() public watchlist: IInstrument[];
  public filterForm: FormGroup;
  public filterValues: Partial<IInstrument> = {};
  private _initialFilterValues: Partial<IInstrument> = {
    name: "",
    symbol: "",
    instrumentType: ""
  }

  constructor(private _fb: FormBuilder) {
  }

  public ngOnInit() {
    this.filterForm = this._fb.group(this._initialFilterValues);
    this.filterForm.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500)
    ).subscribe(value => this.filterValues = value);
  }

  public removeFromWatchlist(instrumentId: number) {

  }

  public resetFilter() {
    this.filterForm.setValue(this._initialFilterValues);
  }
}
