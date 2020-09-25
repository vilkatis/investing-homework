import { Component, Input } from '@angular/core';
import { IInstrument } from '../../../../../shared';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent {
  @Input() public watchlist: IInstrument[];
}
