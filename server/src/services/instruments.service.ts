import { Container, Service } from 'typedi';
import { MySQLService } from './mysql.service';
import { IInstrument } from '../../../shared';

@Service()
export class InstrumentsService {
  private _mysqlService: MySQLService;
  constructor() {
    this._mysqlService = Container.get(MySQLService);
  }
  public async getAll(): Promise<IInstrument[]> {
    return this._mysqlService.query('SELECT instrumentId, name, symbol, instrumentType FROM instrument');
  }
}
