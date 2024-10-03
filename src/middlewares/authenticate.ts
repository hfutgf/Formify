import jwt, { JwtPayload } from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';
import IRequest from '@src/types/request.type.js';

const authenticate = async (
    req: IRequest,
    res: Response,
    next: NextFunction
): Promise<any> => {
    try {
        const authorization = req.headers.authorization;
        if (!authorization) {
            return res
                .status(401)
                .json({ message: 'User is not authenticated' });
        }
        const accessToken = authorization.split(' ')[1];
        if (!accessToken) {
            return res
                .status(401)
                .json({ message: 'Token is missing or invalid' });
        }
        jwt.verify(
            accessToken,
            process.env.JWT_SECRET!,
            (err, decoded: JwtPayload | any) => {
                if (err) {
                    return res.status(403).json({ message: 'Invalid token' });
                }
                req.userId = decoded.id;
                next();
            }
        );
    } catch (error) {
        const e = error as Error;
        return res.status(500).json({ message: e.message });
    }
};

export default authenticate;
