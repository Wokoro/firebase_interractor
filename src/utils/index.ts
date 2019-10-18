import { Router, NextFunction, Request, Response } from 'express';

type Middleware = (( router: Router ) => void );

type Handler = ( req: Request, res: Response, next: NextFunction )=> Promise<void> | void;

type Route = { path: string, method: string, handler: Handler | Handler[] };

export const applyMiddlewares = (  middlewares: Middleware[], router: Router, )=>{
    for( const middleware of middlewares ){
        middleware(router);
    }
}

export const applyRoutes = ( routes: Route[], router: Router )=>{
    for( const route of routes ){
        const { path, method, handler } = route;
        (router as any)[method](path, handler);
    }
}

export const randomIndex = (max: number, min:number = 0): number => {
    return Math.floor( ( Math.random() * max ) + min );
}