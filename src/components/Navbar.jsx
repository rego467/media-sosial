"use client"

import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"
import ButtonLogout from "./ButtonLogout"

export default function Navbar(){
  const [user, setUser] = useState({})
  // git push -u origin main
  const getUser = async()=>{
    try {
      const {data:{user}} = await supabase.auth.getUser()
      setUser(user)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUser()
  },[])

  return(
    <div className="container flex border-b">
      <div className="flex items-center p-2 justify-between w-full">
        <h1 className="text-white font-medium text-xl">MediaSosial</h1>
        <div>
          {
            Object.keys(user).length !== 0 ? (
              <div className="flex items-center space-x-3">
                <h1>{user.user_metadata.full_name}</h1>
                <ButtonLogout />
              </div>
            ): (
              null
            )
          }
        </div>
      </div>
    </div>
  )
}