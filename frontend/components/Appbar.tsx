"use client"
import { Linkbutton } from "./buttons/Linkbutton"
import {useRouter} from'next/navigation'
import { Primarybutton } from "./buttons/Primarybutton";
import { Hero } from "./Hero";
export const Appbar =()=>{
    const router =useRouter();

    return <div>
    <div className="flex  pb-5 p-3 justify-between ">
            <div className="flex flex-col justify-center">
                zapier
            </div>
            <div className="flex">
                <div className="pr-4">
                    <Linkbutton onClick={()=>{}}>contact sales</Linkbutton>
                </div>
                <div className="pr-4">
                    <Linkbutton onClick={()=>{
                    router.push('/login')
                }}> login</Linkbutton>
                </div>
                <div>
                    <Primarybutton size="small" onClick={()=>{
                    router.push('/signup')
                }} >
                    sign up
                </Primarybutton>
                </div>
            </div>
            
    </div>
    
    </div>
}