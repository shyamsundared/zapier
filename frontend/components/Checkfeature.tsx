export const Checkfeature =({label} :{label:string})=>{
    return <div className="flex">
        <div className="pr-4">
            <CheckMark/>
        </div>
        {label}
    </div>
}
 function CheckMark(){
    return <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-amber-700">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
  </svg>
 }