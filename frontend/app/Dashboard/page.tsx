"use client"
import { Appbar } from "@/components/Appbar";
import { Darkbutton } from "@/components/buttons/Darkbutton";
import { useEffect, useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { Linkbutton } from "@/components/buttons/Linkbutton";
interface Zap{
    "id":string,
    "triggerId":string,
    "userId":number,
    "actions":[{
                "id":string,
                "zapId":string,
                "actionId":string,
                "sortingOrder":number,
                "type":{
                    "id":string,
                    "name":string
                }}]
    "trigger": {
                "id": string,
                "zapId": string,
                "TriggerId": string,
                "type": {
                    "id": string,
                    "name": string
                }}

            }
function useZaps(){
    const [loading,setloading]=useState(true)
    const [zaps,setzaps]=useState<Zap[]>([])
    useEffect(()=>{
        axios.get(`${BACKEND_URL}/api/v1/zap`,{
            headers:{
                "Authorization":localStorage.getItem("token")
            }
        }).
        then(res=>{
            setzaps(res.data.zaps);
            setloading(false)
    })
    },[])
    return {
        loading,zaps
    }
}
export default function(){
    const {loading,zaps}=useZaps()
    return <div>
        
        <Appbar/>
    <div className="flex justify-center pt-8 ">
    <div className="max-w-2xl w-full ">
        <div className=" flex justify-between pr-4">
            <div className="text-2xl font-bold">
                 my zaps
            </div>
        <Darkbutton onClick={()=>{}}>
            create
        </Darkbutton>
    </div>
    </div>
    </div>
    {loading ?"loading..." : <div className="flex justify-center"> <ZapTable zaps={zaps}/></div>}
    </div>
}
function ZapTable({zaps}:{zaps:Zap[]}){
    return <div className="p-8 max-w-full">
  
    <div className="flex">
      <div className="flex-1">Name</div>
      <div className="flex-1">Last Edit</div>
      <div className="flex-1">Running</div>
        <div className="flex-1 "> Go</div>
      
    </div>
  
  <div>
   { zaps.map(z =>
    
     <div className="flex border-b border-t py-4">
        <div className="flex-1">{z.id}</div>
        <div className="flex-1">{z.trigger.type.name} {z.actions.map(x =>x.type.name + " ") }</div>
        <div className="flex-1">time</div>
        <div className="flex-1"> <Linkbutton onClick={()=>{}}>
      Go</Linkbutton></div>
     </div>
      

    
   )}
   
  </div>
</div>
}