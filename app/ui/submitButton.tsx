'use client'
import { useFormStatus } from "react-dom"

const SubmitButton = ({ message }: { message: string}) => {
    const { pending } = useFormStatus()
    
    return (
        <button disabled={pending} type="submit" className="text-oxford-blue py-2 px-4 rounded disabled:bg-slate-100 disabled:text-slate-400 shadow order-3 disabled:cursor-not-allowed bg-tea-green  hover:drop-shadow-xl transition-all transition-duration-100 text-xl flex flex-col mt-7">{message}</button>
    )
}

export default SubmitButton