import { fetchSpices } from "@/data/api"
import Link from "@/node_modules/next/link"

const Spices = async () => {
  const spices = await fetchSpices()
  return (
    <div className="p-24">
      <h1 className="text-xl">Spice List</h1>
      {spices.map(spice => <div key={spice.name}><Link href={`/spice/${spice.name}`}>{spice.name}</Link></div>)}
    </div>
  )
}

export default Spices