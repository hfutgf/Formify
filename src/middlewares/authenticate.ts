import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from 'express';

const authenticate = async (
    req: Request,
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
        jwt.verify(accessToken, process.env.JWT_SECRET!, (err, decoded) => {
            if (err) {
                return res.status(403).json({ message: 'Invalid token' });
            }

            next();
        });
    } catch (error) {
        const e = error as Error;
        return res.status(500).json({ message: e.message });
    }
};

export default authenticate;
