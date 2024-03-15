"use client"

import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { FaDiscord } from "react-icons/fa6"

export default function ButtonLogin(){
  const handleLogin = async()=>{
    await supabase.auth.signInWithOAuth({provider:"discord"})
  }
  return(
    <Button onClick={handleLogin} className="flex gap-2 font-medium text-lg">
      <FaDiscord size={29}/>
        Login with discord
    </Button>
  )
}