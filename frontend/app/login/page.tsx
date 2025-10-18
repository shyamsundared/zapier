"use client"
import { Appbar } from "@/components/Appbar";
import { Primarybutton } from "@/components/buttons/Primarybutton";
import { Checkfeature } from "@/components/Checkfeature";
import { Input } from "@/components/Input";
import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/app/config";
import { Secondarybutton } from "@/components/buttons/Secondarybutton";
import { useRouter } from "next/navigation";
export default function LoginPage(){
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
            
            
            
            
            <Input label={"password"} placeholder="enter your password" onChange={(e)=>{
                setpassword(e.target.value);
            }} type="password"></Input>
            <div className="pt-6 text-center">
                <Primarybutton onClick={ async ()=>{
                    const res= await axios.post(`${BACKEND_URL}/api/v1/user/signin`,{
                        username:Email,
                        password
                    })
                    localStorage.setItem("token",res.data.token)
                        router.push('/Dashboard')
                }} size="big">
                    login
                </Primarybutton>
            </div>
        </div>
    </div>
    </div>
    </div>
    
}