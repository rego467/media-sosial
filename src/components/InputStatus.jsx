"use client"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"
import { MdOutlinePhotoSizeSelectActual } from "react-icons/md";
import Image from "next/image"
import { revalidatePath } from "next/cache"

export default function InputStatus(){
  const [user,setUser] = useState({})
  const [content,setContent] = useState("")

  const getUser = async()=>{
    try {
      const {data:{user}} = await supabase.auth.getUser()  
      setUser(user)
    } catch (error) {
      console.log(error)
    }
  }

  const createPost = async()=>{
    try {
      const {data, error} = await supabase.from("posts").insert({content:content, user_id:user.id})
      if(data){
        console.log(data, 'create new post')
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    getUser()
  },[])

  return(
    <div className="flex flex-col gap-2 border rounded-md p-1 px-2.5 py-2.5">
      <div className="flex">
        {
          Object.keys(user).length !== 0 ? (
            <div className="w-full flex flex-col gap-4">
              <div className="flex w-full gap-3">
                <Image 
                  src={user.user_metadata.avatar_url} 
                  width={80} 
                  height={80}
                  alt="photo_profile"
                  priority
                  className="rounded-full"
                />
                <Textarea
                  value={content}
                  onChange={(e)=>setContent(e.target.value)} 
                  placeholder={`Whats on your mind, @${user.user_metadata.full_name}?`} 
                  className="flex text-base"
                />
              </div>
              <div className="flex items-center justify-between">
                <button className="flex items-center space-x-1.5">
                  <MdOutlinePhotoSizeSelectActual color="white" size={29}/>
                  <span className="text-white font-medium">Photos</span>
                </button>
                <Button onClick={createPost}>Send</Button>
              </div>
            </div>
          ): (null)
        }
      </div>
    </div>
  )
}