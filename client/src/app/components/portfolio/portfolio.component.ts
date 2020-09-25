import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IInstrument } from '../../../../../shared';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { IEvent } from '../../models';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {
  @Input() public watchlist: IInstrument[];
  @Input() public instruments: IInstrument[];
  @Output() public fireEvent = new EventEmitter<IEvent>();
  public filterForm: FormGroup;
  public addForm: FormGroup;
  public filterValues: Partial<IInstrument> = {};
  private _initialFilterFormValue: Partial<IInstrument> = {
    name: "",
    symbol: "",
    instrumentType: ""
  }

  constructor(private _fb: FormBuilder) {
  }

  public ngOnInit() {
    this.filterForm = this._fb.group(this._initialFilterFormValue);
    this.addForm = this._fb.group({
      instrumentId: [null, Validators.required]
    });
    this.filterForm.valueChanges.pipe(
      distinctUntilChanged(),
      debounceTime(500)
    ).subscribe(value => this.filterValues = value);
  }

  public removeFromWatchlist(instrumentId: number) {

  }

  public resetFilter() {
    this.filterForm.setValue(this._initialFilterFormValue);
  }

  public onAddFormSubmit() {
    this.fireEvent.emit({
      type: 'instrument',
      action: {
        type: 'addInstrument',
        payload: this.addForm.value
      }
    });
  }
}
