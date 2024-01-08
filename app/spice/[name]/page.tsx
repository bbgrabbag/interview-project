import { PageProps } from "@/.next/types/app/page"
import { fetchSpice } from "@/data/api"
import { Metadata } from "next"


export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
  const spice = await fetchSpice(decodeURIComponent(params.name))
  return {
    title: spice.name,
    description: 'spice information details for ' + spice.name,
    keywords: [spice.name, 'spice']
  }
}

interface SpicesProps extends PageProps {
  params: { name: string }
}

const Spices: React.FC<SpicesProps> = async ({ params }) => {
  const spice = await fetchSpice(decodeURIComponent(params.name))
  return (
    <div className="p-24 w-fit">
      <h1 className='text-xl'>Spice Detail</h1>
      <div>Name: {spice.name}</div>
      <div>Price: {spice.price}</div>
      <div>Heat: {spice.heat}</div>
      <div className="flex flex-row items-center">Color: <code className="ml-2 rounded-md border-[1px] border-black" style={{ backgroundColor: `#${spice.color}` }}> #{spice.color}</code></div>
    </div>
  )
}

export default Spices