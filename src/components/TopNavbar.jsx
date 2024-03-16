import CardPosts from "./CardPosts"
import InputStatus from "./InputStatus"

export default function TopNavbar(){
  return(
    <div className="flex flex-col p-2">
      <div>
        <InputStatus />
      </div>
      <div className="flex my-5">
        <CardPosts />
      </div>
    </div>
  )
}