'use client'

import { Blend, BlendFilterKeys, SortKeys } from "@/common/types";
import { FilterForm } from "../FilterForm";
import Link from "next/link";
import { BLEND_FILTER_CONFIG, SORT_OPTIONS } from "@/common/constants";
import { blendFilterRuleMap, sortMap } from "@/common/utils";
import { useFilter, useSort } from "@/common/hooks";
import { SortForm } from "../SortForm";
import { Loading } from "../Loading";


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
        <div className="px-4 pt-4">
            <h1 className="text-xl pb-4">Blend List</h1>
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
            <div className="grid gap-2 sm:grid-cols-3 md:grid-cols-4">
                {applySort(applyFilters(blends)).map(blend => <div key={blend.name}><Link href={`/blend/${blend.name}`}>{blend.name}</Link></div>)}
            </div>
        </div>
    )
}