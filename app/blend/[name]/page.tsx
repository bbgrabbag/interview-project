import { PageProps } from "@/.next/types/app/page"
import { fetchBlend, fetchBlends, fetchSpices } from "@/data/api"
import { Metadata } from "next";
import Link from "next/link";


export const generateMetadata = async ({ params }: PageProps): Promise<Metadata> => {
    const blend = await fetchBlend(decodeURIComponent(params.name))
    return {
        title: blend.name,
        description: blend.description,
        keywords: [blend.name, 'spice blends']
    }
}

interface BlendProps extends PageProps {
    params: { name: string }
}

const Blend: React.FC<BlendProps> = async ({ params }) => {
    const blend = await fetchBlend(decodeURIComponent(params.name));
    const [spices, blends] = await Promise.all([fetchSpices(blend.spices), fetchBlends(blend.blends)]);
    return (
        <div className="p-24">
            <h1 className='text-xl'>Blend Detail</h1>
            <div>Name: {blend.name}</div>
            <div>Description: {blend.description}</div>
            <h3>Spices:</h3>
            <ul className="list-disc">
                {spices.map(spice => <li className="ml-8" key={spice.id}><Link href={`/spice/${spice.name}`}>{spice.name}</Link></li>)}
            </ul>
            <h3>Blends:</h3>
            {blends.length ? <ul className="list-disc">
                {blends.map(blend => <li className="ml-8" key={blend.id}><Link href={`/blend/${blend.name}`}>{blend.name}</Link></li>)}
            </ul> : 'N/A'}
        </div>
    )
}

export default Blend