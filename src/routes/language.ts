import * as Promise from 'bluebird';
import {Router, Request, Response, NextFunction} from 'express';
import { AutoWired, Inject } from 'typescript-ioc';
import * as util from 'util';

@AutoWired
class LanguageRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * TODO
   */
  languages(req: Request, res: Response, next: NextFunction) {

  }

  /**
   * TODO
   */
  audioFileOfLanguage(req: Request, res: Response, next: NextFunction) {

  }

  init() {
    this.router.get('/', this.languages);
    this.router.get('/:language/', this.audioFileOfLanguage);
  }

}

export default new LanguageRouter().router;
