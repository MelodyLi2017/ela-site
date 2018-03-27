import * as Promise from 'bluebird';
import {Router, Request, Response, NextFunction} from 'express';
import { AutoWired, Inject } from 'typescript-ioc';
import * as util from 'util';

@AutoWired
class FileRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * TODO
   */
  add(req: Request, res: Response, next: NextFunction) {

  }

  /**
   * TODO
   */
  remove(req: Request, res: Response, next: NextFunction) {

  }

  /**
   * TODO
   */
  details(req: Request, res: Response, next: NextFunction) {

  }

  /**
   * TODO
   */
  audio(req: Request, res: Response, next: NextFunction) {

  }

  init() {
    this.router.post('/', this.add);
    this.router.delete('/:id/', this.remove);
    this.router.get('/:id/details/', this.details);
    this.router.get('/:id/audio', this.audio);
  }

}

export default new FileRouter().router;
