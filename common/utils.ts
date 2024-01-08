import { SpiceFilterKeys, Spice, FilterRuleMap, SortRuleMap, SortKeys, BlendFilterKeys, Blend } from "./types";

export const spiceFilterRuleMap: FilterRuleMap<SpiceFilterKeys, Spice> = {
    search: (spice, keyword): boolean => spice.name.toLowerCase().includes((keyword as string).toLowerCase()),
    color: (spice, keyword) => spice.color.toLowerCase().includes((keyword as string).toLowerCase()),
    price: (spice, keyword) => keyword === 'All' || spice.price === keyword,
    heat: (spice, keyword) => keyword === 'All' || String(spice.heat) === keyword,
}

export const blendFilterRuleMap: FilterRuleMap<BlendFilterKeys, Blend> = {
    search: (blend, keyword): boolean => [
        blend.name,
        blend.description
    ]
        .some(str => str.toLowerCase()
            .includes((keyword as string).toLowerCase()))
}

export const sortMap: SortRuleMap<SortKeys, Spice | Blend> = {
    'a-z': (spiceA, spiceB) => spiceA.name.localeCompare(spiceB.name),
    'z-a': (spiceA, spiceB) => spiceA.name.localeCompare(spiceB.name) * -1
}