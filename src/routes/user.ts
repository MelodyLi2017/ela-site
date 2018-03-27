import * as Promise from 'bluebird';
import * as crypto from 'crypto';
import {Router, Request, Response, NextFunction} from 'express';
import { AutoWired, Inject } from 'typescript-ioc';
import * as util from 'util';

import * as constants from '../constants';
import { Database } from '../database/database';

@AutoWired
class UserRouter {

  @Inject
  database: Database;
  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * TODO
   */
  create(req: Request, res: Response, next: NextFunction) {
    let body = req.body;
    ['email', 'firstName', 'lastName'].forEach((field) => {
      if (!(field in body))
        return res.status(400).json({ message: constants.MALFORMED_MESSAGE });
    });


  }

  /**
   * TODO
   */
  delete(req: Request, res: Response, next: NextFunction) {

  }

  /**
   * TODO
   */
  forgotPassword(req: Request, res: Response, next: NextFunction) {

  }

  /**
   * TODO
   */
  changePassword(req: Request, res: Response, next: NextFunction) {

  }

  init() {
    this.router.post('/create/', this.create);
    this.router.delete('/delete/', this.delete);
    this.router.post('/forgotPassword/', this.forgotPassword);
    this.router.put('/changePassword/', this.changePassword);
  }

}

export default new UserRouter().router;
