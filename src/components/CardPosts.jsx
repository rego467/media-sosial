"use client"

import { supabase } from "@/lib/supabase"
import Image from "next/image"
import { useEffect, useState } from "react"
import { RiMoreFill } from "react-icons/ri"

export default function CardPosts(){
  const [posts,setPosts] = useState([])
  const [user,setUser] = useState({})

  const getPost = async()=>{
    try {
      let {data:posts,error} = await supabase.from("posts").select("*")
      setPosts(posts)
    } catch (error) {
      console.log(error)
    }
  }

  const getUser = async()=>{
    try {
      const {data:{user}} = await supabase.auth.getUser()  
      setUser(user)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getPost()
    getUser()
  },[])
  
  console.log(posts, "ini post user")
  return(
    <div className="flex w-full">
      <div className="flex flex-col w-full gap-5">
        {
          Array.isArray(posts) ? (
            posts.map((post, index)=>{
              return(
                <div key={index} className="bg-white rounded-md p-2">
                  <div className="flex justify-between">
                    <div className="flex space-x-2.5">
                      <Image 
                        src={user.user_metadata.avatar_url}
                        width={50}
                        height={50}
                        priority
                        alt="photo_profile"
                        className="flex rounded-full"
                      />
                      <h1 className="text-base font-medium flex gap-2">
                        {user.user_metadata.full_name}
                        <span className="text-gray-500">shared a post</span>
                      </h1>
                    </div>
                    <RiMoreFill size={29} />
                  </div>
                  <div className="my-1.5">
                    <p>{post.content}</p>
                  </div>
                </div>
              )
            })
          ):(null)
        }
      </div>
    </div>
  )
}