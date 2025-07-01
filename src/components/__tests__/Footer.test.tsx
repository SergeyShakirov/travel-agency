import { render, screen } from '@testing-library/react'
import Footer from '@/components/Footer'

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />)
  })

  test('renders footer section', () => {
    const footer = screen.getByTestId('footer')
    expect(footer).toBeInTheDocument()
  })

  test('displays company information', () => {
    const euroWorkElements = screen.getAllByText(/EuroWork/)
    expect(euroWorkElements.length).toBeGreaterThan(0)
    expect(screen.getByText(/© 2025/)).toBeInTheDocument()
  })

  test('shows contact information in footer', () => {
    expect(screen.getByText(/\+7/)).toBeInTheDocument()
    expect(screen.getByText(/info@eurowork/)).toBeInTheDocument()
  })

  test('displays social media links', () => {
    const socialLinks = screen.getAllByRole('link')
    expect(socialLinks.length).toBeGreaterThan(0)
  })

  test('has proper styling', () => {
    const footer = screen.getByTestId('footer')
    expect(footer).toHaveClass('bg-gray-900')
  })
})
