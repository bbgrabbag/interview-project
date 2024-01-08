import { ActiveFilters, FilterConfig } from "@/common/types";
import { HTMLInputTypeAttribute, useEffect, useState } from "react";

const TextInput = ({
    value,
    label,
    handleChange,
    type = 'text'
}: {
    value: string | null,
    label: string
    handleChange: (config: { value: string | null }) => void,
    type?: HTMLInputTypeAttribute
}) => {
    return (
        <div>
            <label>
                {label}
                <input type={type} value={value || ''} onChange={(e) => {
                    handleChange({ value: e.target.value || null })
                }} />
            </label>
        </div>
    )
}

const DropdownMenu = ({
    value,
    label,
    options,
    handleChange

}: {
    value: string | null,
    options: string[];
    label: string
    handleChange: (config: { value: string | null }) => void,

}) => {

    return (
        <div>
            <label>
                {label}
                <select value={value || options[0]} onChange={e => handleChange({ value: e.target.value })}>
                    {options.map((opt, i) => <option key={i}>{opt}</option>)}
                </select>
            </label>
        </div>
    )

}


interface FilterFormProps<K extends string> {
    filters: FilterConfig<K>;
    defaultActiveFilters?: ActiveFilters<K>;
    onFilterChange: (activeFilters: ActiveFilters<K>) => void,
}

export const FilterForm = <K extends string,>({ filters, defaultActiveFilters, onFilterChange }: FilterFormProps<K>) => {

    const [activeFilters, setActiveFilters] = useState<ActiveFilters<K>>(defaultActiveFilters || {})

    useEffect(() => {
        onFilterChange(activeFilters);
    }, [activeFilters]);

    return (
        <form className="flex flex-col">
            {Object.keys(filters).map(k => {
                const filterKey = k as keyof typeof filters;
                const config = filters[filterKey];
                const activeFilter = activeFilters[filterKey];
                switch (config?.type) {
                    case 'text':
                        return (
                            <TextInput
                                label={config.label}
                                key={filterKey}
                                value={activeFilter as string}
                                handleChange={({ value }) => setActiveFilters(prev => ({ ...prev, [filterKey]: value }))}
                            />
                        );
                    case 'dropdown':
                        return (
                            <DropdownMenu
                                label={config.label}
                                key={filterKey}
                                value={activeFilter as string}
                                options={config.options || []}
                                handleChange={({ value }) => setActiveFilters(prev => ({ ...prev, [filterKey]: value }))}
                            />
                        )
                    default:
                        return null;
                }
            })}
            <button type='button' onClick={() => setActiveFilters(defaultActiveFilters || {})}>Clear Filters</button>
        </form>
    )
}