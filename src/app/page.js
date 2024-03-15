"use client"

import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)
export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState({})

  useEffect(()=>{
    async function getUser(){
      await supabase.auth.getUser().then((value)=>{
        if(value.data?.user){
          console.log(value.data?.user)
          setUser(value.data?.user)
        }
      })
    }
    getUser()
  },[])

  const handleLogout = async()=>{
    const {error} = await  supabase.auth.signOut()
    router.push("/login")
  }
  console.log(user, "user")
  return (
    <div>
      {Object.keys(user).length !== 0 ? (
        <>
          <h1>{user.user_metadata.full_name}</h1>
          <button type="button" onClick={handleLogout}>Logout</button>
        </>
      ): (
        <h1>tidak ada user</h1>
      )}
      
    </div>
  );
}
