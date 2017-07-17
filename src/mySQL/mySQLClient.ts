import * as mysql from 'mysql';
import * as Promise from 'bluebird';
import { AutoWired, Singleton } from 'typescript-ioc'

import * as constants from '../helpers/constants';

@Singleton
@AutoWired
export class MySQLClient {

  private database: mysql.IPool;

  constructor() {
    let connectionConfig: mysql.IPoolConfig = {
      host: process.env[constants.DB_HOST],
      user: process.env[constants.DB_USERNAME],
      password: process.env[constants.DB_PASSWORD],
      database: constants.CLICKER_BUCKET,
      port: constants.DB_PORT in process.env ? process.env[constants.DB_PORT] : null,
      connectionLimit: constants.DB_CONNECTION_LIMIT
    };
    this.database = mysql.createPool(connectionConfig);
  }

  public getDisposableConnection(): Promise.Disposer<mysql.IConnection> {
    return Promise.promisify(
      this.database.getConnection, { context: this.database }
    )().disposer((conn, promise) => {
        conn.release();
      });
  }

  /**
   * Runs the given query on the database. Returns the result.
   * @param query: string The query to be executed.
   * @param queryTerms: query terms to inject into the query.
   * @return Promise<any> A promise containing the result.
   */
  public runQuery(query: string, queryTerms: any[]): Promise<any> {
    return Promise.using(this.getDisposableConnection(), (conn: mysql.IConnection) => {
      return new Promise((accept, reject) => {
        conn.query(query, queryTerms, (err, res) => {
          if (err) reject(err);
          else accept(res);
        });
      });
    });
  }

}
