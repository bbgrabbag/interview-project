import { useCallback, useMemo, useState } from "react";
import { ActiveFilters, FilterRuleMap } from "./types";

export const useFilter = <K extends string, T>(
    filterRuleMap: FilterRuleMap<K, T>,
    defaultActiveFilters?: ActiveFilters<K>
) => {
    const [activeFilters, setActiveFilters] = useState<ActiveFilters<K>>(defaultActiveFilters || {})

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
        }
    ), [activeFilters, setActiveFilters, applyFilters, defaultActiveFilters])
}