"use client"
import { supabase } from "@/lib/supabase";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { useRouter, redirect } from "next/navigation";
import { useEffect, useState } from "react";
import ButtonLogout from "@/components/ButtonLogout";
import Sidebar from "@/components/Sidebar";
import TopNavbar from "@/components/TopNavbar";

export default function Home() {
  const router = useRouter()

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


  return (
    <div className="container flex p-2 gap-2">
      <div className="my-2">
        <Sidebar />
      </div>
      <div className="flex-1">
        <TopNavbar />
      </div>
    </div>
  );
}
