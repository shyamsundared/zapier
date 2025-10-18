'use client'
import { ReactNode } from "react"

export const Linkbutton =({children,onClick}:{children :ReactNode,onClick:()=>void})=>{
    return <div className="px-2 py-1  text-sm font-light cursor-pointer text-center hover:bg-slate-100" onClick={onClick}>
        {children}
    </div>
}