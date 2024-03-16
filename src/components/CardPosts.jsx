"use client"

import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"

export default function CardPosts(){
  const [posts,setPosts] = useState([])
  
  const getPost = async()=>{
    try {
      let {data:posts,error} = await supabase.from("posts").select("*")
      setPosts(posts)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getPost()
  },[])
  
  console.log(posts, "ini post user")
  return(
    <div className="bg-white">
      <h1>ini card post</h1>
    </div>
  )
}