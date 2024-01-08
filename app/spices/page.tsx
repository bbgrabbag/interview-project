import { fetchSpices } from "@/data/api"
import { SpiceList } from "@/common/components/SpiceList";


const Spices = async () => {
  const spices = await fetchSpices()
  return (
    <SpiceList spices={spices} />
  )
}

export default Spices