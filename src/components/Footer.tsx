'use client'

import React from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink,
  Heart,
  ArrowUp 
} from 'lucide-react'

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
      color: 'hover:text-green-400'
    },
    { 
      name: 'Telegram',
      href: 'https://t.me/eurowork_kz',
      color: 'hover:text-blue-400'
    },
    { 
      name: 'Instagram',
      href: 'https://instagram.com/eurowork.kz',
      color: 'hover:text-pink-400'
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
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    aria-label={social.name}
                    data-testid={`footer-social-${social.name.toLowerCase()}`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </a>
                ))}
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
