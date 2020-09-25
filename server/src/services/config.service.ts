import { Container, Service } from 'typedi';
import { ENV } from './injectables';
import { EnvVar } from '../models';
import { ErrorHandlerService } from './error-handler.service';

@Service()
export class ConfigService {
  public serverPort: number;
  public dbHost: string;
  public dbPort: number;
  public dbUser: string;
  public dbPass: string;
  public dbName: string;

  constructor() {
    const errorHandlerService = Container.get(ErrorHandlerService);
    const env = Container.get(ENV);
    try {
      console.log('Initializing config');
      this.serverPort = env.get(EnvVar.SERVER_PORT).required().asPortNumber();
      this.dbHost = env.get(EnvVar.DB_HOST).required().asString();
      this.dbPort = env.get(EnvVar.DB_PORT).required().asPortNumber();
      this.dbUser = env.get(EnvVar.DB_USER).required().asString();
      this.dbPass = env.get(EnvVar.DB_PASS).required().asString();
      this.dbName = env.get(EnvVar.DB_NAME).required().asString();
      console.log('Initialized config');
    } catch (err) {
      console.log('Failed to initialize config');
      errorHandlerService.handleFatalError(err);
    }
  }
}
