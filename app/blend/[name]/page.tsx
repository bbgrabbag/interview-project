import { PageProps } from "@/.next/types/app/page"
import { fetchBlend, fetchBlends, fetchSpices } from "@/data/api"
import Link from "next/link";

interface SpicesProps extends PageProps {
    params: { name: string }
}

const Spices: React.FC<SpicesProps> = async ({ params }) => {
    const blend = await fetchBlend(decodeURIComponent(params.name));
    const [spices, blends] = await Promise.all([fetchSpices(blend.spices), fetchBlends(blend.blends)]);
    return (
        <div className="p-24">
            <h1 className='text-xl'>Blend Detail</h1>
            <div>Name: {blend.name}</div>
            <div>Description: {blend.description}</div>
            <h3>Spices:</h3>
            <ul className="list-disc">
                {spices.map(spice => <li className="ml-8"><Link href={`/spice/${spice.name}`}>{spice.name}</Link></li>)}
            </ul>
            <h3>Blends:</h3>
            {blends.length ? <ul className="list-disc">
                {blends.map(blend => <li className="ml-8"><Link href={`/blend/${blend.name}`}>{blend.name}</Link></li>)}
            </ul> : 'N/A'}
        </div>
    )
}

export default Spices