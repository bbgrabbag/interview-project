import { fetchBlends } from "@/data/api"
import Link from "next/link"

const Spices = async () => {
  const blends = await fetchBlends();
  return (
    <div className="p-24">
      <h1 className='text-xl'>Blend List</h1>
      {blends.map(blend => <div key={blend.name}><Link href={`/blend/${blend.name}`}>{blend.name}</Link></div>)}
    </div>
  )
}

export default Spices