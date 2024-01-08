import { render } from "@testing-library/react"
import { SortForm } from "./SortForm"

describe('<SortForm> component', () => {
    it('Should initialize', async () => {
        const options = [{ label: 'test', value: 'test' }];
        const cmp = render(<SortForm options={options} activeSortOption={options[0]} onSortChange={jest.fn()} />)
        expect(await cmp.findByTestId('sort-form')).toBeInstanceOf(HTMLFormElement)
    })
})