"use client"
import { IoNotificationsOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { TbUsers } from "react-icons/tb";
import Link from "next/link";
import ButtonLogout from "./ButtonLogout";

export default function Sidebar(){
  return(
    <div className="flex flex-col p-2 border rounded-md">
      <h1 className="flex text-white text-lg font-medium my-2 px-4">Navigation</h1>
      <div className="flex flex-col mx-3 space-y-4 text-white my-2">
        <Link href={"/"} className="flex gap-2.5 text-lg items-center">
          <GoHome size={29}/>
          <span>Home</span>
        </Link>
        <Link href={"/"} className="flex gap-2.5 text-lg items-center">
          <TbUsers size={29}/>
          <span>Friends</span>
        </Link>
        <Link href={"/"} className="flex gap-2.5 text-lg items-center">
          <IoNotificationsOutline size={29}/>
          <span>Notification</span>
        </Link>
        <ButtonLogout />
      </div>
    </div>
  )
}