
import * as Promise from 'bluebird';
import {Router, Request, Response, NextFunction} from 'express';
import { AutoWired, Inject } from 'typescript-ioc';
import * as util from 'util';

@AutoWired
class EditRouter {

  router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  /**
   * TODO
   */
  editsOfTranscript(req: Request, res: Response, next: NextFunction) {

  }

  /** Retrieves the edit who's id is req.id. */
  get(req: Request, res: Response, next: NextFunction) {

  }

  /**
   * TODO
   */
  submit(req: Request, res: Response, next: NextFunction) {

  }

  /**
   * TODO
   */
  approve(req: Request, res: Response, next: NextFunction) {

  }

  /**
   * TODO
   */
  delete(req: Request, res: Response, next: NextFunction) {

  }

  init() {
    this.router.get('/transcript/:file_id/', this.editsOfTranscript);
    this.router.get('/:id/', this.get);
    this.router.post('/:file_id/submit/', this.submit);
    this.router.post('/:file_id/approve/', this.approve);
    this.router.delete('/:file_id/', this.delete);
  }

}

export default new EditRouter().router;
