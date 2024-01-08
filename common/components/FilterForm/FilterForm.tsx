import { ActiveFilters, FilterConfig } from "@/common/types";
import { Dispatch, HTMLInputTypeAttribute, SetStateAction, useCallback, useEffect, useState } from "react";

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
    config: FilterConfig<K>;
    activeFilters: ActiveFilters<K>;
    onClear: () => void;
    setActiveFilters: Dispatch<SetStateAction<ActiveFilters<K>>>;
}

export const FilterForm = <K extends string,>({ config, activeFilters, setActiveFilters, onClear }: FilterFormProps<K>) => {

    const renderFormControls = useCallback(() => {
        return Object.keys(config).map(k => {
            const filterKey = k as keyof typeof config;
            const filterConfig = config[filterKey];
            const activeFilter = activeFilters[filterKey];
            switch (filterConfig?.type) {
                case 'text':
                    return (
                        <TextInput
                            label={filterConfig.label}
                            key={filterKey}
                            value={activeFilter as string}
                            handleChange={({ value }) => setActiveFilters(prev => ({ ...prev, [filterKey]: value }))}
                        />
                    );
                case 'dropdown':
                    return (
                        <DropdownMenu
                            label={filterConfig.label}
                            key={filterKey}
                            value={activeFilter as string}
                            options={filterConfig.options || []}
                            handleChange={({ value }) => setActiveFilters(prev => ({ ...prev, [filterKey]: value }))}
                        />
                    )
                default:
                    return null;
            }
        })
    }, [config, activeFilters])
    return (
        <form data-testid='filter-form'>
            <div>
                {renderFormControls()}
            </div>
            <button type='button' onClick={onClear}>Clear Filters</button>
        </form>
    )
}