'use client'

import React, { useState, useEffect } from 'react'
import { Phone, Mail, Menu, X } from 'lucide-react'

// SVG иконки для социальных сетей
const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
  </svg>
)

const TelegramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { href: '#services', label: 'Услуги' },
    { href: '#countries', label: 'Страны' },
    { href: '#benefits', label: 'Преимущества' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#contact', label: 'Контакты' },
  ]

  const socialLinks = [
    { 
      href: 'https://wa.me/77771234567', 
      icon: WhatsAppIcon, 
      label: 'WhatsApp',
      color: 'hover:text-green-500'
    },
    { 
      href: 'https://t.me/eurowork_kz', 
      icon: TelegramIcon, 
      label: 'Telegram',
      color: 'hover:text-blue-500'
    },
    { 
      href: 'https://instagram.com/eurowork.kz', 
      icon: InstagramIcon, 
      label: 'Instagram',
      color: 'hover:text-pink-500'
    },
  ]

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-sm shadow-lg' 
          : 'bg-transparent'
      }`}
      data-testid="header"
    >
      {/* Top bar with contacts */}
      <div className="bg-primary-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-between items-center text-sm">
            <div className="flex items-center space-x-6">
              <a 
                href="tel:+77771234567" 
                className="flex items-center space-x-2 hover:text-primary-200 transition-colors"
                data-testid="phone-link"
              >
                <Phone size={16} />
                <span>+7 (777) 123-45-67</span>
              </a>
              <a 
                href="mailto:info@eurowork.kz" 
                className="flex items-center space-x-2 hover:text-primary-200 transition-colors"
                data-testid="email-link"
              >
                <Mail size={16} />
                <span>info@eurowork.kz</span>
              </a>
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="hidden md:block">Мы в соцсетях:</span>
              {socialLinks.map((link, index) => {
                const IconComponent = link.icon
                return (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${link.color} transition-colors`}
                    aria-label={link.label}
                    data-testid={`social-${link.label.toLowerCase()}`}
                  >
                    <IconComponent />
                  </a>
                )
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="bg-primary-600 text-white p-2 rounded-lg">
              <span className="font-bold text-xl">EW</span>
            </div>
            <div>
              <h1 className={`font-bold text-xl ${isScrolled ? 'text-gray-800' : 'text-white'}`}>
                EuroWork
              </h1>
              <p className={`text-sm ${isScrolled ? 'text-gray-600' : 'text-gray-200'}`}>
                Работа в Европе
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-medium transition-colors ${
                  isScrolled 
                    ? 'text-gray-800 hover:text-primary-600' 
                    : 'text-white hover:text-primary-200'
                }`}
                data-testid={`nav-${item.label.toLowerCase()}`}
              >
                {item.label}
              </a>
            ))}
            
            <button 
              className="bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
              data-testid="contact-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Получить консультацию
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            className={`lg:hidden p-2 ${isScrolled ? 'text-gray-800' : 'text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            data-testid="mobile-menu-button"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="lg:hidden mt-4 py-4 bg-white rounded-lg shadow-lg"
            data-testid="mobile-menu"
          >
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="px-4 py-2">
              <button 
                className="w-full bg-primary-600 text-white px-6 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors"
                onClick={() => {
                  setIsMenuOpen(false)
                  document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
                }}
              >
                Получить консультацию
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  )
}

export default Header
