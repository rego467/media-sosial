"use client"
import { Button } from "@/components/ui/button"

export default function ButtonLogout(){
  const handleLogout = async()=>{
    await supabase.auth.signOut()   
  }
  return(
    <Button onClick={handleLogout}>Logout</Button>
  )
}