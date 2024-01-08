import { render } from "@testing-library/react"
import { FilterForm } from "./FilterForm"

describe('<FilterForm> component', () => {
    it('Should initialize', async () => {
        const cmp = render(<FilterForm config={{}} activeFilters={{}} onClear={jest.fn()} setActiveFilters={jest.fn()} />)
        expect(await cmp.findByTestId('filter-form')).toBeInstanceOf(HTMLFormElement)
    })
})