'use client'

import React, { useState, useEffect } from 'react'
import { Phone, Mail, MessageCircle, Menu, X, ExternalLink } from 'lucide-react'

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
      icon: MessageCircle, 
      label: 'WhatsApp',
      color: 'hover:text-green-500'
    },
    { 
      href: 'https://t.me/eurowork_kz', 
      icon: MessageCircle, 
      label: 'Telegram',
      color: 'hover:text-blue-500'
    },
    { 
      href: 'https://instagram.com/eurowork.kz', 
      icon: ExternalLink, 
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
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`${link.color} transition-colors`}
                  aria-label={link.label}
                  data-testid={`social-${link.label.toLowerCase()}`}
                >
                  <link.icon size={16} />
                </a>
              ))}
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
