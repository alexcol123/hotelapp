import { fetchProfileImage } from "@/utils/actions"
import { LuUser2 } from "react-icons/lu"

const UserIcon = async () => {

  const profileImage = await fetchProfileImage()

  if (profileImage) {
    return (
      // eslint-disable-next-line @next/next/no-img-element
      <img src={profileImage} alt="profile" className="w-6 h-6 object-cover rounded-full" />
    )
  }

  return (
    <LuUser2 className="w-6 h-6 bg-primary rounded-full text-white" />
  )
}
export default UserIcon