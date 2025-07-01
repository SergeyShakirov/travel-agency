import { render, screen, fireEvent } from '@testing-library/react'
import Contact from '@/components/Contact'

describe('Contact Component', () => {
  beforeEach(() => {
    render(<Contact />)
  })

  test('renders contact section with heading', () => {
    const contact = screen.getByTestId('contact-section')
    expect(contact).toBeInTheDocument()
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent(/Свяжитесь с нами/i)
  })

  test('displays contact form', () => {
    const form = screen.getByTestId('contact-form')
    expect(form).toBeInTheDocument()
    
    // Check for form fields
    expect(screen.getByLabelText(/имя/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/телефон/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  test('has submit button', () => {
    const submitButton = screen.getByRole('button', { name: /отправить/i })
    expect(submitButton).toBeInTheDocument()
  })

  test('shows contact information', () => {
    // Look for contact details
    expect(screen.getByText(/\+7/)).toBeInTheDocument()
    expect(screen.getByText(/info@eurowork/)).toBeInTheDocument()
  })
})
