import { Router } from "express";

import { signupschema,signinschema } from "../types/index.js";
import { client  } from "../db/index.js";
import { authmiddleware } from "../middleware.js";

import jwt from 'jsonwebtoken'
import { JWT_SECRET } from "../config.js";
const router = Router();
router.post('/signup',async (req,res)=>{
    const body=req.body
    console.log(body)
    const parsed = signupschema.safeParse(body)
    if (!parsed.success){
        return res.status(400).json({
            message : "password and email requrie atleat 6 chars"
        })
    }
    const userexists =await client.user.findFirst({
        where:{
            email: parsed.data.username,

        }
    })
    if (userexists){
        return res.json({
            message :"user already exists"
        })
    }
    const user =await client.user.create({
        data:{
            email: parsed.data.username,
            password: parsed.data.password,
            name: parsed.data.name
        }
   
        
})
        return res.json({
            message :" account created successfully"
        })
})

router.post('/signin',async (req,res)=>{
    const body=req.body
    const parsed = signinschema.safeParse(body)
    if (!parsed.success){
        return res.status(413).json({
            message : "invalid credentials"
        })
    }
    const user =await client.user.findFirst({
        where: {
            email:parsed.data.username,
            password:parsed.data.password
        }})
    if (!user){
        return res.status(403).json({
            message :"invalid credentials"
        })

    }
    const token =jwt.sign(
        {
            id :user.id
        },JWT_SECRET)
    res.json({
        token :token
    })

})
router.get('/',authmiddleware,async (req,res)=>{
    //@ts-ignore
    const id=req.id
    const user =await client.user.findFirst({
        where:{
            email:req.body.username,
        },
        select:{
            email:true,
            name:true
        }
    })
    res.json({
        user
    })
})



export const userRouter =router