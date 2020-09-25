import { createPool, Pool } from 'mysql';
import { Container, Service } from 'typedi';
import { ConfigService } from './config.service';

@Service()
export class MySQLService {
  private _pool: Pool;
  constructor() {
    const { dbHost, dbPort, dbUser, dbPass, dbName } = Container.get(ConfigService);
    this._pool = createPool({
      host: dbHost,
      port: dbPort,
      user: dbUser,
      password: dbPass,
      database: dbName
    });
  }

  public query<T>(query: string): Promise<T> {
    return new Promise((resolve, reject) => {
      this._pool.query(query, (err, res) => {
        if (err) reject(err);
        resolve(res);
      });
    });
  }
}
