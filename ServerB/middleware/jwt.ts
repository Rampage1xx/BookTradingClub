import * as express from 'express';
import * as jwt from 'jsonwebtoken';

const verifyToken = async (req: express.Request, res: express.Response, next: express.NextFunction) => {
    let payload: object;
    const token = req.header('x-auth');
    try {
        payload = await jwt.verify(token, 'starcraft');
    } catch (err) {

        return {error: 'invalid token'};
    }
    next();
};
