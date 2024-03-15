"use client"

import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"
import ButtonLogout from "./ButtonLogout"

export default function Navbar(){
  const [user, setUser] = useState({})
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
    <div className="container flex bg-white">
      <div className="flex justify-between">
        <h1>MediaSosial</h1>
        <div>
          {
            Object.keys(user).length !== 0 ? (
              <div>
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