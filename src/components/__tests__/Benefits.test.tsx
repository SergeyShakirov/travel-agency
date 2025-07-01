import { render, screen } from '@testing-library/react'
import Benefits from '@/components/Benefits'

describe('Benefits Component', () => {
  beforeEach(() => {
    render(<Benefits />)
  })

  test('renders benefits section with heading', () => {
    const benefits = screen.getByTestId('benefits-section')
    expect(benefits).toBeInTheDocument()
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(/Почему выбирают нас/i)
  })

  test('displays benefit items', () => {
    const benefitCards = screen.getAllByTestId(/benefit-card-/)
    expect(benefitCards.length).toBeGreaterThan(0)
    
    // Check for some expected benefits
    expect(screen.getByText(/Гарантия безопасности/i)).toBeTruthy()
    expect(screen.getByText(/Быстрое трудоустройство/i)).toBeTruthy()
    expect(screen.getByText(/Персональный менеджер/i)).toBeTruthy()
  })

  test('shows benefit icons', () => {
    const benefitCards = screen.getAllByTestId(/benefit-card-/)
    
    benefitCards.forEach(card => {
      const icon = card.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })
  })
})
