import { useCallback, useMemo, useState } from "react";
import { ActiveFilters, FilterRuleMap, SortOption, SortRuleMap } from "./types";

export const useFilter = <K extends string, T>(
    filterRuleMap: FilterRuleMap<K, T>,
    defaultActiveFilters?: ActiveFilters<K>
) => {
    const [activeFilters, setActiveFilters] = useState<ActiveFilters<K>>(defaultActiveFilters || {})

    const clearFilters = useCallback(() => {
        setActiveFilters(defaultActiveFilters || {});
    }, [defaultActiveFilters])

    const applyFilters = useCallback((items: T[]) => {
        return items.filter((item) => {
            for (const k in activeFilters) {
                const key = k as K;
                const activeFilter = activeFilters[key] ?? null;
                if (activeFilter === null) continue;
                if (!filterRuleMap[key](item, activeFilter)) return false
            }
            return true
        })
    }, [activeFilters]);

    return useMemo(() => (
        {
            activeFilters,
            defaultActiveFilters,
            setActiveFilters,
            applyFilters,
            clearFilters
        }
    ), [activeFilters, setActiveFilters, applyFilters, clearFilters, defaultActiveFilters])
}

export const useSort = <K extends string, T>(
    options: SortOption<K>[],
    sortRuleMap: SortRuleMap<K, T>
) => {

    const [activeSortOption, setActiveSortOption] = useState<SortOption<K>>(options[0])

    const applySort = useCallback((items: T[]) => {
        return items.sort(sortRuleMap[activeSortOption.value])
    }, [sortRuleMap, activeSortOption]);

    return useMemo(() => {
        return {
            options,
            activeSortOption,
            setActiveSortOption,
            applySort
        }
    }, [options, activeSortOption])
}