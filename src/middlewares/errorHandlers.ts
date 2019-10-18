import { Router, NextFunction, Request, Response } from 'express';
import * as Errors from '../utils/errorHandler';

export const handle404Error = (router: Router)=>{
    router.use(( req: Request, res: Response, next: NextFunction)=>{
        Errors.notFoundError();
    })
}

export const handleClientError = (router: Router)=>{
    router.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
        Errors.clientError(err, req, res, next);
    })
}

export const handleServerError = (router: Router)=>{
    router.use((err: Error, req: Request, res: Response, next: NextFunction)=>{
        Errors.serverError(err, req, res, next);
    })
}

export default [handleClientError, handleServerError, handle404Error]