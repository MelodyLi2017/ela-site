import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';
import 'reflect-metadata';
import { Container } from 'typescript-ioc'

import UserRouter from './routes/user';
import EditRouter from './routes/edit';
import FileRouter from './routes/file';
import LanguageRouter from './routes/language';
import { Database } from './database/database';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.initDatabase();
    this.middleware();
    this.routes();
  }

  /* Initializes the connection to the database */
  private initDatabase(): void {
    (<Database>Container.get(Database)).createConnection();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
    // Setting path for frontend files.
    this.express.use(express.static(path.join(__dirname, '/../public')));
    this.express.get('*', (req, res) => res.sendFile(path.join(__dirname, '/../public/index.html')));
  }

  // Configure API endpoints.
  private routes(): void {
    this.express.use('/api/v1/user/', UserRouter);
    this.express.use('/api/v1/edit/', EditRouter);
    this.express.use('/api/v1/file/', FileRouter);
    this.express.use('/api/v1/language/', LanguageRouter);
  }

}

export default new App().express;
