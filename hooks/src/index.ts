import express from 'express'
import { PrismaClient } from './generated/prisma/index.js';
const app=express()
const client=new PrismaClient
app.post('/hooks/catch/:userId/:zapId',async (req,res)=>{
    const userId=req.params.userId;
    const zapId= req.params.zapId;
    const body =req.body;
    await client.$transaction(async tx =>{
        const run= await client.zapRun.create({
            data:{
                zapId:zapId,
                metadata:body
            }
        })
        await client.zapRunOutbox.create({
            data :{
                zapRunid:run.id
            }
        })

    })
    
    
}

)