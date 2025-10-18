import express from 'express'
const app= express();
import cors from "cors"
app.use(express.json())
app.use(cors())
import { userRouter } from './Router/user.js';

import { zapRouter } from './Router/zap.js';
app.use('/api/v1/user',userRouter)

app.use('/api/v1/zap',zapRouter)
app.listen(3001,()=>{
    console.log("server runnign")
});