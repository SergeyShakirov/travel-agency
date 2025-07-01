'use client'

import React from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Heart,
  ArrowUp 
} from 'lucide-react'

// SVG иконки для социальных сетей
const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.893 3.386"/>
  </svg>
)

const TelegramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
  </svg>
)

const InstagramIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
  </svg>
)

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { href: '#services', label: 'Услуги' },
    { href: '#countries', label: 'Страны' },
    { href: '#benefits', label: 'Преимущества' },
    { href: '#testimonials', label: 'Отзывы' },
    { href: '#contact', label: 'Контакты' }
  ]

  const countries = [
    { name: 'Германия', flag: '🇩🇪' },
    { name: 'Польша', flag: '🇵🇱' },
    { name: 'Чехия', flag: '🇨🇿' },
    { name: 'Нидерланды', flag: '🇳🇱' },
    { name: 'Австрия', flag: '🇦🇹' },
    { name: 'Италия', flag: '🇮🇹' }
  ]

  const socialLinks = [
    { 
      name: 'WhatsApp',
      href: 'https://wa.me/77771234567',
      color: 'hover:text-green-400',
      icon: WhatsAppIcon
    },
    { 
      name: 'Telegram',
      href: 'https://t.me/eurowork_kz',
      color: 'hover:text-blue-400',
      icon: TelegramIcon
    },
    { 
      name: 'Instagram',
      href: 'https://instagram.com/eurowork.kz',
      color: 'hover:text-pink-400',
      icon: InstagramIcon
    }
  ]

  return (
    <footer className="bg-gray-900 text-white" data-testid="footer">
      <div className="container mx-auto px-4">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-2 mb-6">
                <div className="bg-primary-600 text-white p-2 rounded-lg">
                  <span className="font-bold text-xl">EW</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">EuroWork</h3>
                  <p className="text-gray-400 text-sm">Работа в Европе</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6 leading-relaxed">
                Ваш надежный партнер в поиске работы в Европе. Помогаем найти работу мечты 
                и начать новую жизнь в европейских странах.
              </p>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="text-center bg-gray-800 rounded-lg p-3">
                  <div className="text-xl font-bold text-primary-400">500+</div>
                  <div className="text-xs text-gray-400">Клиентов</div>
                </div>
                <div className="text-center bg-gray-800 rounded-lg p-3">
                  <div className="text-xl font-bold text-primary-400">3</div>
                  <div className="text-xs text-gray-400">Года опыта</div>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`text-gray-400 ${social.color} transition-colors duration-300`}
                      aria-label={social.name}
                      data-testid={`footer-social-${social.name.toLowerCase()}`}
                    >
                      <IconComponent />
                    </a>
                  )
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Быстрые ссылки</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                      data-testid={`footer-link-${link.label.toLowerCase()}`}
                    >
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {link.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>

              <div className="mt-8">
                <h5 className="font-semibold mb-4">Полезная информация</h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Часто задаваемые вопросы
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Блог о работе в Европе
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                      Актуальные вакансии
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Countries */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Страны</h4>
              <ul className="space-y-3">
                {countries.map((country, index) => (
                  <li key={index}>
                    <a
                      href="#countries"
                      className="text-gray-300 hover:text-white transition-colors duration-300 flex items-center group"
                      data-testid={`footer-country-${country.name.toLowerCase()}`}
                    >
                      <span className="text-lg mr-2">{country.flag}</span>
                      <span className="group-hover:translate-x-1 transition-transform duration-300">
                        {country.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Контакты</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <a 
                      href="tel:+77771234567" 
                      className="text-gray-300 hover:text-white transition-colors"
                      data-testid="footer-phone"
                    >
                      +7 (777) 123-45-67
                    </a>
                    <p className="text-xs text-gray-500">Звонки принимаем 24/7</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <a 
                      href="mailto:info@eurowork.kz" 
                      className="text-gray-300 hover:text-white transition-colors"
                      data-testid="footer-email"
                    >
                      info@eurowork.kz
                    </a>
                    <p className="text-xs text-gray-500">Ответим в течение часа</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">г. Алматы</p>
                    <p className="text-gray-300">ул. Абая 150, офис 25</p>
                    <p className="text-xs text-gray-500">Центр города</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-primary-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="text-gray-300">Пн-Пт: 9:00-18:00</p>
                    <p className="text-gray-300">Сб: 10:00-15:00</p>
                    <p className="text-xs text-gray-500">Воскресенье - выходной</p>
                  </div>
                </div>
              </div>

              {/* Emergency Contact */}
              <div className="mt-6 p-4 bg-primary-900/30 rounded-lg border border-primary-700/30">
                <h5 className="font-semibold text-primary-300 mb-2">Экстренная связь</h5>
                <p className="text-xs text-gray-400 mb-2">
                  Нужна срочная помощь или консультация?
                </p>
                <a
                  href="https://wa.me/77771234567"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-400 hover:text-green-300 transition-colors text-sm font-medium"
                  data-testid="footer-emergency-contact"
                >
                  WhatsApp 24/7 →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-800 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © {currentYear} EuroWork. Все права защищены.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Сделано с <Heart className="w-3 h-3 text-red-400 inline mx-1" /> для вашего успеха
              </p>
            </div>

            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
              <div className="flex space-x-6 text-sm">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Политика конфиденциальности
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">
                  Условия использования
                </a>
              </div>
              
              <button
                onClick={scrollToTop}
                className="bg-primary-600 hover:bg-primary-700 text-white p-2 rounded-full transition-colors duration-300 group"
                aria-label="Scroll to top"
                data-testid="scroll-to-top"
              >
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
