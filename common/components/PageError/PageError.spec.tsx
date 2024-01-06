/**
 * @jest-environment jsdom
 */
import { render, screen } from '@testing-library/react'
import { PageError } from './'

it('renders a loading message', () => {
    render(<PageError error={{message: 'test message', name:'test'}}/>)
    expect(screen.getByText('test message')).toBeDefined();
})
