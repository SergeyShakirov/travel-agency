'use client'

import React, { useState } from 'react'
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle, 
  Send,
  CheckCircle,
  ExternalLink 
} from 'lucide-react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    country: '',
    profession: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        phone: '',
        email: '',
        country: '',
        profession: '',
        message: ''
      })
    }, 3000)
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Телефон',
      content: '+7 (777) 123-45-67',
      link: 'tel:+77771234567',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'info@eurowork.kz',
      link: 'mailto:info@eurowork.kz',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: MapPin,
      title: 'Адрес',
      content: 'г. Алматы, ул. Абая 150, офис 25',
      link: '#',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Clock,
      title: 'Время работы',
      content: 'Пн-Пт: 9:00-18:00, Сб: 10:00-15:00',
      link: '#',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ]

  const socialContacts = [
    {
      name: 'WhatsApp',
      icon: MessageCircle,
      link: 'https://wa.me/77771234567',
      color: 'bg-green-500 hover:bg-green-600',
      description: 'Быстрые ответы 24/7'
    },
    {
      name: 'Telegram',
      icon: MessageCircle,
      link: 'https://t.me/eurowork_kz',
      color: 'bg-blue-500 hover:bg-blue-600',
      description: 'Консультации и новости'
    },
    {
      name: 'Instagram',
      icon: ExternalLink,
      link: 'https://instagram.com/eurowork.kz',
      color: 'bg-pink-500 hover:bg-pink-600',
      description: 'Истории успеха клиентов'
    }
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50" data-testid="contact-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Готовы помочь вам найти работу мечты в Европе. Получите бесплатную консультацию уже сегодня!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Оставьте заявку на консультацию
            </h3>
            
            {isSubmitted ? (
              <div className="text-center py-12" data-testid="success-message">
                <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-gray-800 mb-2">
                  Спасибо за заявку!
                </h4>
                <p className="text-gray-600">
                  Мы свяжемся с вами в ближайшее время
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6" data-testid="contact-form">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Ваше имя *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Введите ваше имя"
                      data-testid="name-input"
                    />
                  </div>

                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон *
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="+7 (___) ___-__-__"
                      data-testid="phone-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                    data-testid="email-input"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-2">
                      Интересующая страна
                    </label>
                    <select
                      id="country"
                      name="country"
                      value={formData.country}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      data-testid="country-select"
                    >
                      <option value="">Выберите страну</option>
                      <option value="germany">Германия</option>
                      <option value="poland">Польша</option>
                      <option value="czech">Чехия</option>
                      <option value="netherlands">Нидерланды</option>
                      <option value="austria">Австрия</option>
                      <option value="italy">Италия</option>
                      <option value="other">Другая</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="profession" className="block text-sm font-medium text-gray-700 mb-2">
                      Профессия
                    </label>
                    <input
                      type="text"
                      id="profession"
                      name="profession"
                      value={formData.profession}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                      placeholder="Ваша специальность"
                      data-testid="profession-input"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Сообщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors resize-none"
                    placeholder="Расскажите о ваших целях и пожеланиях..."
                    data-testid="message-textarea"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center ${
                    isSubmitting 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-primary-600 hover:bg-primary-700 transform hover:scale-105'
                  } text-white`}
                  data-testid="submit-button"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                      Отправляем...
                    </>
                  ) : (
                    <>
                      Отправить заявку
                      <Send className="ml-2 w-5 h-5" />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Контактная информация
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-center space-x-4">
                    <div className={`${info.bgColor} w-12 h-12 rounded-full flex items-center justify-center`}>
                      <info.icon className={`w-6 h-6 ${info.color}`} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{info.title}</h4>
                      {info.link !== '#' ? (
                        <a 
                          href={info.link}
                          className="text-gray-600 hover:text-primary-600 transition-colors"
                        >
                          {info.content}
                        </a>
                      ) : (
                        <p className="text-gray-600">{info.content}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Contacts */}
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">
                Мы в мессенджерах
              </h3>
              
              <div className="space-y-4">
                {socialContacts.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`${social.color} text-white p-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center group`}
                    data-testid={`social-contact-${social.name.toLowerCase()}`}
                  >
                    <social.icon className="w-6 h-6 mr-4" />
                    <div>
                      <h4 className="font-semibold">{social.name}</h4>
                      <p className="text-sm opacity-90">{social.description}</p>
                    </div>
                    <ExternalLink className="w-4 h-4 ml-auto opacity-70 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8">
              <h3 className="text-xl font-bold mb-4">
                Экстренная консультация
              </h3>
              <p className="text-primary-100 mb-6">
                Нужна срочная помощь? Звоните прямо сейчас и получите консультацию в течение 15 минут!
              </p>
              <a
                href="tel:+77771234567"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-6 py-3 rounded-lg transition-colors duration-300 inline-flex items-center"
                data-testid="emergency-call-button"
              >
                <Phone className="w-5 h-5 mr-2" />
                Позвонить сейчас
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
