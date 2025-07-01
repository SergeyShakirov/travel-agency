import { render, screen } from '@testing-library/react'
import Services from '@/components/Services'

describe('Services Component', () => {
  beforeEach(() => {
    render(<Services />)
  })

  test('renders services section with heading', () => {
    const services = screen.getByTestId('services-section')
    expect(services).toBeInTheDocument()
    
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Наши услуги')
  })

  test('displays all service cards', () => {
    // Check for service titles
    expect(screen.getByText('Поиск работы')).toBeInTheDocument()
    expect(screen.getByText('Оформление документов')).toBeInTheDocument()
    expect(screen.getByText('Визовая поддержка')).toBeInTheDocument()
    expect(screen.getByText('Поиск жилья')).toBeInTheDocument()
    expect(screen.getByText('Языковая подготовка')).toBeInTheDocument()
  })

  test('shows service descriptions', () => {
    expect(screen.getByText(/Подбор вакансий в соответствии с вашей квалификацией/)).toBeInTheDocument()
    expect(screen.getByText(/Полное сопровождение в получении всех необходимых документов/)).toBeInTheDocument()
    expect(screen.getByText(/Помощь в получении рабочих виз для стран Европейского союза/)).toBeInTheDocument()
  })

  test('displays service icons', () => {
    const serviceCards = screen.getAllByTestId(/service-card-/)
    expect(serviceCards).toHaveLength(6)
    
    // Each card should have an icon
    serviceCards.forEach(card => {
      const icon = card.querySelector('svg')
      expect(icon).toBeInTheDocument()
    })
  })

  test('has proper styling for service cards', () => {
    const serviceCards = screen.getAllByTestId(/service-card-/)
    
    serviceCards.forEach(card => {
      expect(card).toHaveClass('bg-white')
    })
  })
})
