import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';

export const auth = async (request: Request, response: Response, next: NextFunction) => {
    try {
        const header = reques.headers.authorization;

        if (!header) throw new Error(`Token is Required!`);

        const [ ,token] = header.split(' '),

        await jwt.verify(token, process.env.KEY_SECRET);

        next();
    } catch (e) {
        return response.status(401).json({ "Message" : `${e}`})
    }
}