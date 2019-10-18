import cors from 'cors';
import bodyParser from 'body-parser';
import compression from 'compression';
import { Router } from 'express';

export const compressionHandler = (router: Router)=>{
    router.use(compression());
} 

export const corsHandler = (router: Router)=>{
    router.use(cors({credentials: true, origin: true}));
}

export const bodyParserHandler = ( router: Router )=>{
    router.use(bodyParser.urlencoded({extended: true}));
    router.use( bodyParser.json());
}