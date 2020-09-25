import { Pool, createPool } from 'mysql';
import { Service } from 'typedi';
import { ConfigService } from '../config.service';

export const MySQL = Service<Pool, ConfigService>([ConfigService], configService => {
  const { dbHost, dbPort, dbUser, dbPass, dbName } = configService;
  return createPool({
    host: dbHost,
    port: dbPort,
    user: dbUser,
    password: dbPass,
    database: dbName
  });
});
