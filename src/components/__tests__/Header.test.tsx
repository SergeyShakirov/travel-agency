import { render, screen, fireEvent } from '@testing-library/react'
import Header from '@/components/Header'

// Mock scroll behavior
Object.defineProperty(window, 'scrollY', { writable: true, value: 0 })
window.addEventListener = jest.fn()
window.removeEventListener = jest.fn()

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />)
  })

  test('renders header with logo', () => {
    const header = screen.getByTestId('header')
    expect(header).toBeInTheDocument()
    
    const logo = screen.getByText('EuroWork')
    expect(logo).toBeInTheDocument()
  })

  test('displays contact information', () => {
    const phoneLink = screen.getByTestId('phone-link')
    const emailLink = screen.getByTestId('email-link')
    
    expect(phoneLink).toHaveAttribute('href', 'tel:+77771234567')
    expect(emailLink).toHaveAttribute('href', 'mailto:info@eurowork.kz')
  })

  test('shows social media links', () => {
    const whatsappLink = screen.getByTestId('social-whatsapp')
    const telegramLink = screen.getByTestId('social-telegram')
    const instagramLink = screen.getByTestId('social-instagram')
    
    expect(whatsappLink).toHaveAttribute('href', 'https://wa.me/77771234567')
    expect(telegramLink).toHaveAttribute('href', 'https://t.me/eurowork_kz')
    expect(instagramLink).toHaveAttribute('href', 'https://instagram.com/eurowork.kz')
  })

  test('has navigation menu items', () => {
    const servicesNav = screen.getByTestId('nav-услуги')
    const countriesNav = screen.getByTestId('nav-страны')
    const benefitsNav = screen.getByTestId('nav-преимущества')
    const testimonialsNav = screen.getByTestId('nav-отзывы')
    const contactNav = screen.getByTestId('nav-контакты')
    
    expect(servicesNav).toBeInTheDocument()
    expect(countriesNav).toBeInTheDocument()
    expect(benefitsNav).toBeInTheDocument()
    expect(testimonialsNav).toBeInTheDocument()
    expect(contactNav).toBeInTheDocument()
  })

  test('displays consultation button', () => {
    const consultationButton = screen.getByTestId('contact-button')
    expect(consultationButton).toBeInTheDocument()
    expect(consultationButton).toHaveTextContent('Получить консультацию')
  })

  test('mobile menu toggle works', () => {
    const mobileMenuButton = screen.getByTestId('mobile-menu-button')
    
    // Initially mobile menu should not be visible
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
    
    // Click to open mobile menu
    fireEvent.click(mobileMenuButton)
    expect(screen.getByTestId('mobile-menu')).toBeInTheDocument()
    
    // Click to close mobile menu
    fireEvent.click(mobileMenuButton)
    expect(screen.queryByTestId('mobile-menu')).not.toBeInTheDocument()
  })

  test('social links open in new tab', () => {
    const socialLinks = [
      screen.getByTestId('social-whatsapp'),
      screen.getByTestId('social-telegram'),
      screen.getByTestId('social-instagram')
    ]
    
    socialLinks.forEach(link => {
      expect(link).toHaveAttribute('target', '_blank')
      expect(link).toHaveAttribute('rel', 'noopener noreferrer')
    })
  })
})
