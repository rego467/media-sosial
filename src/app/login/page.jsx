"use client"
import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { createClient } from "@supabase/supabase-js";
import Image from "next/image";
import { useRouter } from "next/navigation";
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY)

export default function Login(){
  const handleLogin = async()=>{
    await supabase.auth.signInWithOAuth({provider:"discord"})
  }
  return(
    <div className="flex bg-neutral-800 h-screen">
      <div className="flex-1 flex justify-center items-center">
        {/* <Auth 
          supabaseClient={supabase}
          appearance={{ theme: ThemeSupa }}
          providers={["discord"]}
        /> */}
        <button onClick={handleLogin}>login with discord</button>
      </div>
      <div className="flex-1">
        <div className="relative flex h-full w-full">
          <Image 
            src={"/foto-login.jpg"}
            priority
            quality={100}
            width={500}
            height={500}
            alt="foto-login"
            className="object-cover object-center w-full h-full"
          />
        </div>
      </div>
    </div>
  )
}