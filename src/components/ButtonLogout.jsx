"use client"
import { Button } from "@/components/ui/button"
import { IoIosLogOut } from "react-icons/io";

export default function ButtonLogout(){
  const handleLogout = async()=>{
    await supabase.auth.signOut()   
  }
  return(
    <button onClick={handleLogout} className="flex gap-2.5 text-lg items-center">
      <IoIosLogOut size={29}/>
      Logout
    </button>
  )
}