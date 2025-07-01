import { render, screen } from '@testing-library/react'
import Countries from '@/components/Countries'

describe('Countries Component', () => {
  beforeEach(() => {
    render(<Countries />)
  })

  test('renders countries section with heading', () => {
    const countries = screen.getByTestId('countries-section')
    expect(countries).toBeInTheDocument()
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Страны для трудоустройства')
  })

  test('displays country cards', () => {
    // Check for some country names
    expect(screen.getByText('Германия')).toBeInTheDocument()
    expect(screen.getByText('Польша')).toBeInTheDocument()
    expect(screen.getByText('Чехия')).toBeInTheDocument()
    expect(screen.getByText('Нидерланды')).toBeInTheDocument()
  })

  test('shows country information', () => {
    const countryCards = screen.getAllByTestId(/country-card-/)
    expect(countryCards.length).toBeGreaterThan(0)
    
    // Each card should have emoji flag and title
    countryCards.forEach(card => {
      const emoji = card.querySelector('span')
      expect(emoji).toBeTruthy()
    })
  })

  test('displays job categories for countries', () => {
    // Look for common job categories that should be displayed - use getAllByText for multiple elements
    const productionElements = screen.getAllByText(/Производство/i)
    expect(productionElements.length).toBeGreaterThan(0)
  })
})
