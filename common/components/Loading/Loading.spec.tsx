/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { Loading } from './'

it('renders a loading message', () => {
    render(<Loading />)
    expect(screen.getByText('...Loading')).toBeDefined()
})
