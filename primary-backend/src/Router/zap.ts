import { Router } from "express";
import { authmiddleware } from "../middleware";
import { Zapcreateschema } from "../types";

import { prismaClient } from "../db";
const router =Router();


router.post('/',authmiddleware,async (req,res)=>{
    //@ts-ignore
    const id:string=req.id
    const body=req.body;
    const parsedData=Zapcreateschema.safeParse(body)
    if(!parsedData.success){
        return res.status(411).json({message:"invalid data"})
            
        
    }
    await prismaClient.$transaction(async (tx) =>{
        const zap=await prismaClient.zap.create({
            data:{
                userId:parseInt(id),
                triggerId:"",
                actions:{
                    create:parsedData.data.actions.map((x,index) =>({
                        actionId:x.availableActionId,
                        sortingOrder:index
                    }))

                }
            }
        })
        const trigger =await prismaClient.trigger.create({
            data :{
                TriggerId: parsedData.data.availableTriggerId,
                zapId:zap.id
            }

        })
        await tx.zap.update({
            where :{
                id:zap.id
            },
            data:{
                triggerId:trigger.id
            }
        })

        return res.json({
            message:"received"
        })


    })
    router.get('/',authmiddleware,async (req,res)=>{
        //@ts-ignore
        const id=req.id;
        const zaps=await prismaClient.zap.findMany({
            where :{
                userId:id
            },
            include :{
                actions:{
                    include:{
                        type:true
                    }
                },trigger:{
                    include:{
                        type:true
                    }
                }
            }
        })
        return res.json({
            zaps
        })
    })
    router.get('/:zapId',authmiddleware,async (req,res)=>{
        //@ts-ignore
        const id=req.id
        const zapId=req.params.zapId as string
        const zaps=await prismaClient.zap.findFirst({
            where :
            {userId:parseInt(id),
                id:zapId
                
            },
            include :{
                actions:{
                    include:{
                        type:true
                    }
                },trigger:{
                    include:{
                        type:true
                    }
                }
            }
        })
        return res.json({
            zaps
        })
    })

})
export const zapRouter =router