'use client'

import { Spice, SpiceFilterKeys } from "@/common/types";
import { FilterForm } from "../FilterForm";
import Link from "next/link";
import { SPICE_FILTERS } from "@/common/constants";
import { spiceFilterRuleMap } from "@/common/utils";
import { useFilter } from "@/common/hooks";


interface SpiceListProps {
    spices: Spice[];
}

export const SpiceList: React.FC<SpiceListProps> = ({ spices }) => {

    const {
        applyFilters,
        setActiveFilters,
        defaultActiveFilters
    } = useFilter(
        spiceFilterRuleMap,
        {
            search: null,
            color: null,
            price: 'All',
            heat: 'All'
        }
    )

    return (
        <div className="p-24">
            <h1 className="text-xl">Spice List</h1>
            <FilterForm<SpiceFilterKeys>
                onFilterChange={filter => setActiveFilters(filter)}
                defaultActiveFilters={defaultActiveFilters}
                filters={SPICE_FILTERS}
            />
            <div>
                {applyFilters(spices).map(spice => <div key={spice.name}><Link href={`/spice/${spice.name}`}>{spice.name}</Link></div>)}
            </div>
        </div>
    )
}