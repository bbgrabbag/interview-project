import { PageProps } from "@/.next/types/app/page"
import { fetchSpice } from "@/data/api"

interface SpicesProps extends PageProps {
  params: { name: string }
}

const Spices: React.FC<SpicesProps> = async ({ params }) => {
  const spice = await fetchSpice(decodeURIComponent(params.name))
  return (
    <div className="p-24">
      <h1 className='text-xl'>Spice Detail</h1>
      <div>Name: {spice.name}</div>
      <div>Price: {spice.price}</div>
      <div>Heat: {spice.heat}</div>
      <div>Color: {spice.color}</div>
    </div>
  )
}

export default Spices