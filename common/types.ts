export interface Spice {
    id: number,
    name: string,
    price: string,
    heat: number,
    color: string
}

export interface Blend {
    id: number,
    name: string,
    blends: number[],
    spices: number[],
    description: string
}

export type SpiceFilterKeys = 'search' | 'price' | 'heat' | 'color';
export type FilterValue = string | number | null;
export type FilterRuleMap<K extends string, T> = Record<K, ((item: T, filter: FilterValue) => boolean)>
export type ActiveFilters<K extends string> = Partial<Record<K, FilterValue>>;
export type FilterConfig<K extends string> = {
    [Key in K]?: {
        label: string;
        type: 'text' | 'dropdown' | 'color-picker',
        options?: Array<string>,
    }
}