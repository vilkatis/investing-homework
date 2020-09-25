import { Get, JsonController } from 'routing-controllers';
import { InstrumentsService } from '../services';
import { Container } from 'typedi';
import { IInstrument } from '../../../shared';

@JsonController('/instruments')
export class InstrumentsController {
  private _instrumentsService: InstrumentsService;

  constructor() {
    this._instrumentsService = Container.get(InstrumentsService);
  }

  @Get('/')
  public getAll(): Promise<IInstrument[]> {
    return this._instrumentsService.getAll();
  }
}
