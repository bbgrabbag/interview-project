import { SortOption } from "@/common/types";

interface SortFormProps<K extends string> {
    options: SortOption<K>[];
    activeSortOption: SortOption<K>;
    onSortChange: (opt: SortOption<K>) => void
}

export const SortForm = <K extends string,>({
    options,
    activeSortOption,
    onSortChange
}: SortFormProps<K>) => {

    return (
        <form>
            <label>
                Sort By
                <select value={activeSortOption.value} onChange={e => onSortChange(options.find(opt => opt.value === e.target.value) as SortOption<K>)}>
                    {options.map(opt => <option key={opt.value}value={opt.value}>{opt.label}</option>)}
                </select>
            </label>
        </form>
    )
}