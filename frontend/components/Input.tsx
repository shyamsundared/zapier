
export const Input =({label,placeholder, onChange,type}:{
    label:string,
    placeholder:string,
    onChange:(e:any)=>void,
    type:"text"|"password"
})=>{
    return <div>
        <div>
            <label className="text-sm">{label}</label></div>
       
        <input className=" border rounded px-2 py-1"type={type} placeholder={placeholder} onChange={onChange} />
    </div>
}