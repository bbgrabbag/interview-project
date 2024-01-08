import { ActiveFilters, FilterConfig } from "@/common/types";
import { Dispatch, HTMLInputTypeAttribute, SetStateAction, useCallback } from "react";

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
        <div className="pb-2 max-w-[250px]">
            <label>
                {label}
                <input className='w-full'type={type} value={value || ''} onChange={(e) => {
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
        <div className="pb-2">
            <label className="w-full">
                {label}
                <select className='ml-2 bg-white'value={value || options[0]} onChange={e => handleChange({ value: e.target.value })}>
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
        <form data-testid='filter-form' className="pb-4 w-full">
            <div className="flex flex-col md:flex-row md:gap-2 md:items-end">
                {renderFormControls()}
            </div>
            <button className='border border-white px-2'type='button' onClick={onClear}>Clear Filters</button>
        </form>
    )
}