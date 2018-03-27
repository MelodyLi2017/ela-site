import { Connection } from "typeorm";

export abstract class Database {

  constructor() { }

  /**
   * @returns Promise<Connection> a typeorm connection to the database.
   */
  public abstract getConnection(): Connection;

  /** Initializes connection to the database */
  public abstract createConnection(): void;

}
