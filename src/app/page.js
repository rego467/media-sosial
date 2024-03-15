"use client"
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { useRouter, redirect } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState({})

  async function getUser(){
    await supabase.auth.getUser().then((value)=>{
      if(value.data?.user){
        console.log(value.data?.user)
        setUser(value.data?.user)
      }
    })
  }

  async function getSessions(){
    try {
      const {data:{session}} = await supabase.auth.getSession()
      if(!session){
        router.push("/login")
      }
      console.log(session, "ini session")
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getSessions()
    getUser()
  },[])

  const handleLogout = async()=>{
    const {error} = await supabase.auth.signOut()
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
