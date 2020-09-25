import { Container, Service } from 'typedi';
import { MySQLService } from './mysql.service';

@Service()
export class UsersService {
  private _mysqlService: MySQLService;
  constructor() {
    this._mysqlService = Container.get(MySQLService);
  }

  public async getWatchlist(userId: number): Promise<number[]> {
    return this._mysqlService.query(`SELECT instrumentId FROM watchlist WHERE userId = ${userId}`);
  }

  public async addToWatchlist(userId: number, instrumentId: number): Promise<unknown> {
    return this._mysqlService.query(`INSERT INTO watchlist VALUE (${userId}, ${instrumentId})`);
  }

  public async removeFromWatchlist(userId: number, instrumentId: number): Promise<unknown> {
    return this._mysqlService.query(`DELETE FROM watchlist WHERE userId=${userId} AND instrumentId=${instrumentId}`);
  }
}
