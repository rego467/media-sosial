import Image from "next/image";
import ButtonLogin from "@/components/ButtonLogin";

export default function Login(){

  return(
    <div className="flex bg-neutral-800 h-screen">
      <div className="flex-1 flex justify-center items-center">
        <ButtonLogin />
      </div>
      <div className="flex-1 hidden lg:inline-block">
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