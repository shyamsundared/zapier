import { ReactNode } from "react";
export const Secondarybutton =({children,onClick}:{children:ReactNode,onClick:()=>void})=>{
    return <div className="py-4 px-8 text-black  bg-white rounded-full border border-slate-950 cursor-pointer hover:shadow-md" onClick={onClick}>
        {children}
    </div>
}