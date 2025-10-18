"use client"
import { Appbar } from "@/components/Appbar";
import { Primarybutton } from "@/components/buttons/Primarybutton";
import { Checkfeature } from "@/components/Checkfeature";
import { Input } from "@/components/Input";
import { useState } from "react";
import { BACKEND_URL } from "../config";
import axios from "axios";
import { useRouter } from "next/navigation";
export default function SignupPage(){
    const [Name,setName]=useState("");
    const [Email,setEmail]=useState("");
    const [password,setpassword]=useState("");
    const router=useRouter();
    return <div>
        <Appbar/>

    <div className="flex  justify-center">
        <div className="flex pt-8 max-w-4xl">

            <div className=" flex-1 pt-20 px-4">
               <div className="font-semibold text-3xl pb-4">
                join millions worldwide who automate their work with zapier.
               </div>
               
                
            
            <div className="pb-6 pt-4">
                <Checkfeature label={"easy setup, no coding required"}/>
            </div>

            <div className="pb-6">
                <Checkfeature label={"easy setup, no coding required"}/>
            </div>
        
                <Checkfeature label={"easy setup, no coding required"}/>
            
        </div>
        <div className="flex-1 pt-6 pb-6 mt-12 px-4 border rounded">
            
                <Input label={"email"} placeholder="enter your emali" onChange={(e)=>{
                    setEmail(e.target.value);
                }} type="text"></Input>
            
            
            <Input label={"name"} placeholder="enter your name" onChange={(e)=>{
                setName(e.target.value)
            }} type="text"></Input>
           
            
            <Input label={"password"} placeholder="enter your password" onChange={(e)=>{
                setpassword(e.target.value)
            }} type="password"></Input>
            <div className="pt-6 text-center">
                <Primarybutton onClick={async ()=>{
                    const res =await axios.post(`${BACKEND_URL}/api/v1/user/signup`,{
                        username :Email,
                        password:password,
                        name:Name
                    })
                    router.push('/login')
                }} size="big">
                    Get started for free
                </Primarybutton>
            </div>
        </div>
    </div>
    </div>
    </div>
    
}