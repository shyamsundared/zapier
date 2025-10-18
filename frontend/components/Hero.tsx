"use client"
import { Primarybutton } from "./buttons/Primarybutton"
export const Hero=()=>{
    return <div>
        <div className="flex justify-center">
        <div className=" text-5xl text-centerfont-semibold pt-8 max-w-xl">
            Automate as fast as you can
        </div>
        </div>
    <div className="flex justify-center">
        <div className=" text-5xl text-centerfont-semibold pt-8 max-w-xl">
            Automate as fast as you can
        </div>
    </div>
    <div className="flex"> 
        <Primarybutton onClick={()=>{}} size="big">
Get Started Free
        </Primarybutton>
    </div>
    </div>
}