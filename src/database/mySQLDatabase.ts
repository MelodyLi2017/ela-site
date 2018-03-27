import { getConnectionManager, DriverOptions } from "typeorm";
import { Provides, Singleton, AutoWired } from 'typescript-ioc';

import { Database } from './database';

import * as config from '../../configurations/config.json';

@Provides(Database)
@Singleton
@AutoWired
export class MySQLDatabase extends Database {

  public getConnection() {
    return getConnectionManager().get();
  }

  public createConnection() {
    let driverOptions: DriverOptions = {
      type: "mysql",
      host: config.databaseConnectionConfig.host,
      username: config.databaseConnectionConfig.username,
      password: config.databaseConnectionConfig.password,
      database: config.databaseConnectionConfig.database,
      port: config.databaseConnectionConfig.port
    };

    getConnectionManager().createAndConnect({
      driver: driverOptions,
      entities: [
        __dirname + '../entities/*.js'
      ],
      autoSchemaSync: true
    }).catch(error => console.log(error));

    return;
  }
}
