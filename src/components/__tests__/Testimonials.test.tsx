import { render, screen } from '@testing-library/react'
import Testimonials from '@/components/Testimonials'

describe('Testimonials Component', () => {
  beforeEach(() => {
    render(<Testimonials />)
  })

  test('renders testimonials section with heading', () => {
    const testimonials = screen.getByTestId('testimonials-section')
    expect(testimonials).toBeInTheDocument()
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(/Отзывы/i)
  })

  test('displays testimonial cards', () => {
    // Test for visible testimonial content instead of data-testid
    const annaElements = screen.getAllByText(/Анна Петрова/i)
    expect(annaElements.length).toBeGreaterThan(0)
  })

  test('shows testimonial content', () => {
    // Check for testimonial text content - use getAllByText for multiple elements
    const euroWorkElements = screen.getAllByText(/EuroWork/i)
    expect(euroWorkElements.length).toBeGreaterThan(0)
  })
})
