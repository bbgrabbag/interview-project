import { MetadataRoute } from "next";

const sitemap = (): MetadataRoute.Sitemap => {
    const baseUrl = 'http://localhost:3000';
    return [
        {
            url: `${baseUrl}`,
        },
        {
            url: `${baseUrl}/spices`,
        },
        {
            url: `${baseUrl}/blends`,
        }
    ]
}

export default sitemap;