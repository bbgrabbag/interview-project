import { fetchSpices } from "@/data/api";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
    const baseUrl = 'http://localhost:3000';
    const spices = await fetchSpices()
    return spices.map(spice => ({url: `${baseUrl}/spices/${encodeURIComponent(spice.name)}`}))
}

export default sitemap;