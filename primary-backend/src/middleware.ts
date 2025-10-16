import type { NextFunction } from "express";
import type { Request ,Response} from "express";
import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "./config.js";
import { unknown } from "zod";
export function authmiddleware (req:Request,res:Response,next:NextFunction){
        const token =req.headers.authorization as unknown as string
        try {
            
            const payload =jwt.verify(token,JWT_SECRET)
            //@ts-ignore
            req.id=payload.id
            next();
        } catch (error) {
            res.status(403).json({
                message :"not loged in"

            })
        }
        
       
        
}