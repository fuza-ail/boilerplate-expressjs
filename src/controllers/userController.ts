import { NextFunction, Request, Response } from 'express'

export class UserController {
  static getUser(req: Request<{}, {}, {}>, res: Response, next: NextFunction) {
    try {
    } catch (error) {
      next()
    }
  }
}
