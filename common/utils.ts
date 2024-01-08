import { SpiceFilterKeys, Spice, FilterRuleMap } from "./types";

export const spiceFilterRuleMap: FilterRuleMap<SpiceFilterKeys, Spice> = {
    search: (spice, keyword): boolean => spice.name.toLowerCase().includes((keyword as string).toLowerCase()),
    color: (spice, keyword) => spice.color.toLowerCase().includes((keyword as string).toLowerCase()),
    price: (spice, keyword) => keyword === 'All' || spice.price === keyword,
    heat: (spice, keyword) => keyword === 'All' || String(spice.heat) === keyword,
}