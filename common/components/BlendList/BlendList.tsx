'use client'

import { Blend, BlendFilterKeys, SortKeys } from "@/common/types";
import { FilterForm } from "../FilterForm";
import Link from "next/link";
import { BLEND_FILTER_CONFIG, SORT_OPTIONS } from "@/common/constants";
import { blendFilterRuleMap, sortMap } from "@/common/utils";
import { useFilter, useSort } from "@/common/hooks";
import { SortForm } from "../SortForm";


interface BlendListProps {
    blends: Blend[];
}

export const BlendList: React.FC<BlendListProps> = ({ blends }) => {

    const {
        activeFilters,
        applyFilters,
        clearFilters,
        setActiveFilters,
    } = useFilter(
        blendFilterRuleMap,
        {
            search: null,
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
        <div className="p-24">
            <h1 className="text-xl">Blend List</h1>
            <FilterForm<BlendFilterKeys>
                activeFilters={activeFilters}
                onClear={clearFilters}
                setActiveFilters={setActiveFilters}
                config={BLEND_FILTER_CONFIG}
            />
            <SortForm<SortKeys>
                options={options}
                activeSortOption={activeSortOption}
                onSortChange={setActiveSortOption}
            />
            <div>
                {applySort(applyFilters(blends)).map(blend => <div key={blend.name}><Link href={`/blend/${blend.name}`}>{blend.name}</Link></div>)}
            </div>
        </div>
    )
}