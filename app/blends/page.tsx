import { BlendList } from "@/common/components/BlendList";
import { fetchBlends } from "@/data/api"
import { Metadata } from "next";

export const metadata: Metadata = {
  title: 'Blend List',
  description: 'All the greatest blends',
  openGraph:{
    title: 'Blend List',
    description:'All the greatest blends',
  }
}


const Blends = async () => {
  const blends = await fetchBlends();
  return (
    <BlendList blends={blends} />
  )
}

export default Blends