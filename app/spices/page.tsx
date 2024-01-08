import { fetchSpices } from "@/data/api"
import { SpiceList } from "@/common/components/SpiceList";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Spice List',
  description: 'All the greatest spices',
  openGraph:{
    title: 'Spice List',
    description:'All the greatest spices',
  }
}

const Spices = async () => {
  const spices = await fetchSpices()
  return (
    <SpiceList spices={spices} />
  )
}

export default Spices