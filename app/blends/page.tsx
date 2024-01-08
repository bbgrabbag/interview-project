import { BlendList } from "@/common/components/BlendList";
import { fetchBlends } from "@/data/api"

const Spices = async () => {
  const blends = await fetchBlends();
  return (
    <BlendList blends={blends} />
  )
}

export default Spices