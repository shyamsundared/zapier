import { ReactNode } from "react";

export const Primarybutton =({children,onClick,size='small'}:{children:ReactNode,onClick:()=>void,size?:"big"|"small"})=>{

return <div className={`  ${size === "small" ? "text-sm":"text-xl"}
 ${size==="small" ? "px-6 py-1 rounded md" :
    "px- py-2 rounded-full text-sm "
}  bg-amber-700  text-white rounded-full hover:shadow-md cursor-pointer `} onClick={onClick}>
{children}
</div>
}