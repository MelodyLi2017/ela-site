import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as path from 'path';
import * as logger from 'morgan';

import AuthRouter from './routes/auth';
import CourseRouter from './routes/course';
import LectureRouter from './routes/lecture';
import QuestionRouter from './routes/question';
import UserRouter from './routes/user';

// Creates and configures an ExpressJS web server.
class App {

  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    this.express = express();
    this.middleware();
    this.routes();
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
    //this.express.use('/api/v1/auth/', AuthRouter);
  }

}

export default new App().express;
