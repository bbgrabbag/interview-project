'use client'

import { SortKeys, Spice, SpiceFilterKeys } from "@/common/types";
import { FilterForm } from "../FilterForm";
import Link from "next/link";
import { SPICE_FILTER_CONFIG, SORT_OPTIONS } from "@/common/constants";
import { spiceFilterRuleMap, sortMap } from "@/common/utils";
import { useFilter, useSort } from "@/common/hooks";
import { SortForm } from "../SortForm";


interface SpiceListProps {
    spices: Spice[];
}

export const SpiceList: React.FC<SpiceListProps> = ({ spices }) => {

    const {
        activeFilters,
        applyFilters,
        clearFilters,
        setActiveFilters,
    } = useFilter(
        spiceFilterRuleMap,
        {
            search: null,
            color: null,
            price: 'All',
            heat: 'All'
        }
    )

    const {
        options,
        activeSortOption,
        setActiveSortOption,
        applySort
    } = useSort(
        SORT_OPTIONS,
        sortMap
    );

    return (
        <div className="px-4 pt-4">
            <h1 className="text-xl pb-4">Spice List</h1>
            <FilterForm<SpiceFilterKeys>
                activeFilters={activeFilters}
                onClear={clearFilters}
                setActiveFilters={setActiveFilters}
                config={SPICE_FILTER_CONFIG}
            />
            <SortForm<SortKeys>
                options={options}
                activeSortOption={activeSortOption}
                onSortChange={setActiveSortOption}
            />
            <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-4">
                {applySort(applyFilters(spices)).map(spice => <div key={spice.name}><Link href={`/spice/${spice.name}`}>{spice.name}</Link></div>)}
            </div>
        </div>
    )
}