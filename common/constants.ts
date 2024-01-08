import { FilterConfig, SortKeys, SortOption, SpiceFilterKeys } from "./types";

export const SPICE_FILTER_CONFIG: FilterConfig<SpiceFilterKeys> = {
    search: {
        label: 'Search by keyword',
        type: 'text',
    },
    color: {
        label: 'Color',
        type: 'text'
    },
    price: {
        label: 'Price',
        type: 'dropdown',
        options: ['All', '$', '$$', '$$$', '$$$$', '$$$$$']
    },
    heat: {
        label: 'Heat',
        type: 'dropdown',
        options: ['All', '0', '1', '2', '3', '4', '5']
    }
}

export const SPICE_SORT_OPTIONS: SortOption<SortKeys>[] = [
    { label: 'Name A-Z', value: 'a-z' },
    { label: 'Name Z-A', value: 'z-a' },
]