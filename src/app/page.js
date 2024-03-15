"use client"
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { useRouter, redirect } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonLogout from "@/components/ButtonLogout";

export default function Home() {
  const router = useRouter()
  const [user, setUser] = useState({})

  async function getUser(){
    await supabase.auth.getUser().then((value)=>{
      if(value.data?.user){
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
  },[])

  console.log(user, "user")
  return (
    <div>
      <h1>home page</h1>
    </div>
  );
}
