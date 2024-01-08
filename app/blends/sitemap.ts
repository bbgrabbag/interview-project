import { fetchBlends } from "@/data/api";
import { MetadataRoute } from "next";

const sitemap = async (): Promise<MetadataRoute.Sitemap> => {
    const baseUrl = 'http://localhost:3000';
    const blends = await fetchBlends();
    return blends.map(blend => ({ url: `${baseUrl}/blends/${encodeURIComponent(blend.name)}` }))
}

export default sitemap;