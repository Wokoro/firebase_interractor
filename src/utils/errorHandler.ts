import { Request, Response, NextFunction } from 'express'
import { HTTP404Error, HTTPClientError } from './httpErrors'

export const notFoundError = ()=>{
   throw new HTTP404Error('Method not found');
}

export const clientError = (err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(err instanceof HTTPClientError ){
        res.status(err.status).send(err.message);
    }else{
        next(err);
    }
}

export const serverError = (err: Error, req: Request, res: Response, next: NextFunction)=>{
    if(process.env.NODE_ENV=='production'){
        res.status(500).send('Internal Server Error');
    }else{
        res.status(500).send(err.stack);
    }
}