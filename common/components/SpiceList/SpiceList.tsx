'use client'

import { SortKeys, Spice, SpiceFilterKeys } from "@/common/types";
import { FilterForm } from "../FilterForm";
import Link from "next/link";
import { SPICE_FILTER_CONFIG, SPICE_SORT_OPTIONS } from "@/common/constants";
import { spiceFilterRuleMap, spiceSortMap } from "@/common/utils";
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
        SPICE_SORT_OPTIONS,
        spiceSortMap
    );

    return (
        <div className="p-24">
            <h1 className="text-xl">Spice List</h1>
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
            <div>
                {applySort(applyFilters(spices)).map(spice => <div key={spice.name}><Link href={`/spice/${spice.name}`}>{spice.name}</Link></div>)}
            </div>
        </div>
    )
}