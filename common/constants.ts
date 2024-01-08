import { FilterConfig, SpiceFilterKeys } from "./types";

export const SPICE_FILTERS: FilterConfig<SpiceFilterKeys> = {
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