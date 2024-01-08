import { SpiceFilterKeys, Spice, FilterRuleMap, SortRuleMap, SortKeys } from "./types";

export const spiceFilterRuleMap: FilterRuleMap<SpiceFilterKeys, Spice> = {
    search: (spice, keyword): boolean => spice.name.toLowerCase().includes((keyword as string).toLowerCase()),
    color: (spice, keyword) => spice.color.toLowerCase().includes((keyword as string).toLowerCase()),
    price: (spice, keyword) => keyword === 'All' || spice.price === keyword,
    heat: (spice, keyword) => keyword === 'All' || String(spice.heat) === keyword,
}

export const spiceSortMap: SortRuleMap<SortKeys, Spice> = {
    'a-z': (spiceA, spiceB) => spiceA.name.localeCompare(spiceB.name),
    'z-a': (spiceA, spiceB) => spiceA.name.localeCompare(spiceB.name) * -1
}