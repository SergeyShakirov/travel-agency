import { render, screen, fireEvent } from '@testing-library/react'
import Hero from '@/components/Hero'

describe('Hero Component', () => {
  beforeEach(() => {
    render(<Hero />)
  })

  test('renders hero section with main heading', () => {
    const hero = screen.getByTestId('hero-section')
    expect(hero).toBeInTheDocument()
    
    const mainHeading = screen.getByRole('heading', { level: 1 })
    expect(mainHeading).toHaveTextContent('Работа в')
    expect(mainHeading).toHaveTextContent('Европе')
  })

  test('displays features and description', () => {
    const description = screen.getByText(/Профессиональная помощь в поиске работы/)
    expect(description).toBeInTheDocument()
    
    expect(screen.getByText('Официальное трудоустройство')).toBeInTheDocument()
    expect(screen.getByText('Помощь с документами')).toBeInTheDocument()
    expect(screen.getByText('Визовая поддержка')).toBeInTheDocument()
    expect(screen.getByText('Поиск жилья')).toBeInTheDocument()
  })

  test('shows statistics', () => {
    const clientsCount = screen.getByText('500+')
    const countriesCount = screen.getByText('15')
    const experienceCount = screen.getByText('3')
    const supportCount = screen.getByText('24/7')
    
    expect(clientsCount).toBeInTheDocument()
    expect(countriesCount).toBeInTheDocument()
    expect(experienceCount).toBeInTheDocument()
    expect(supportCount).toBeInTheDocument()
    
    expect(screen.getByText('Трудоустроенных')).toBeInTheDocument()
    expect(screen.getByText('Стран Европы')).toBeInTheDocument()
    expect(screen.getByText('Года опыта')).toBeInTheDocument()
    expect(screen.getByText('Поддержка')).toBeInTheDocument()
  })

  test('has call-to-action buttons', () => {
    const consultationBtn = screen.getByTestId('main-cta-button')
    const secondaryBtn = screen.getByTestId('secondary-cta-button')
    
    expect(consultationBtn).toBeInTheDocument()
    expect(secondaryBtn).toBeInTheDocument()
    
    expect(consultationBtn).toHaveTextContent('Получить консультацию бесплатно')
    expect(secondaryBtn).toHaveTextContent('Узнать подробнее')
  })

  test('has proper background styling', () => {
    const hero = screen.getByTestId('hero-section')
    expect(hero).toHaveClass('bg-gradient-to-br')
  })
})
