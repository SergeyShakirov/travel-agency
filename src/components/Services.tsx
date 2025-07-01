'use client'

import React from 'react'
import { 
  Briefcase, 
  FileText, 
  Plane, 
  Home, 
  GraduationCap, 
  Users,
  CheckCircle,
  ArrowRight 
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: Briefcase,
      title: 'Поиск работы',
      description: 'Подбор вакансий в соответствии с вашей квалификацией и опытом работы',
      features: [
        'Анализ резюме и навыков',
        'Подбор подходящих вакансий',
        'Подготовка к собеседованию',
        'Сопровождение до трудоустройства'
      ],
      price: 'От 500 €',
      popular: false
    },
    {
      icon: FileText,
      title: 'Оформление документов',
      description: 'Полное сопровождение в получении всех необходимых документов',
      features: [
        'Подготовка документов',
        'Переводы и апостиль',
        'Подача в консульство',
        'Отслеживание статуса'
      ],
      price: 'От 300 €',
      popular: true
    },
    {
      icon: Plane,
      title: 'Визовая поддержка',
      description: 'Помощь в получении рабочих виз для стран Европейского союза',
      features: [
        'Консультация по типу визы',
        'Подготовка документов',
        'Запись на подачу',
        'Сопровождение процесса'
      ],
      price: 'От 400 €',
      popular: false
    },
    {
      icon: Home,
      title: 'Поиск жилья',
      description: 'Содействие в поиске комфортного жилья в стране трудоустройства',
      features: [
        'Подбор вариантов жилья',
        'Проверка документов',
        'Помощь с договором',
        'Поддержка при заселении'
      ],
      price: 'От 200 €',
      popular: false
    },
    {
      icon: GraduationCap,
      title: 'Языковая подготовка',
      description: 'Курсы европейских языков для успешной интеграции',
      features: [
        'Базовый разговорный курс',
        'Профессиональная лексика',
        'Подготовка к собеседованию',
        'Культурная адаптация'
      ],
      price: 'От 150 €',
      popular: false
    },
    {
      icon: Users,
      title: 'Полное сопровождение',
      description: 'Комплексная программа от поиска работы до успешной адаптации',
      features: [
        'Все услуги в комплексе',
        'Персональный менеджер',
        'Поддержка 24/7',
        'Гарантия результата'
      ],
      price: 'От 1200 €',
      popular: true
    }
  ]

  return (
    <section id="services" className="py-20 bg-gray-50" data-testid="services-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Наши услуги
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Предоставляем полный спектр услуг для успешного трудоустройства в Европе. 
            Работаем с каждым клиентом индивидуально.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-primary-500' : ''
              }`}
              data-testid={`service-card-${index}`}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-primary-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                    Популярно
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-primary-600" />
              </div>

              {/* Title & Description */}
              <h3 className="text-2xl font-bold text-gray-800 mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-6">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Price & CTA */}
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-3xl font-bold text-primary-600">
                    {service.price}
                  </span>
                </div>
                <button 
                  className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-medium transition-colors duration-300 flex items-center group"
                  data-testid={`service-button-${index}`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Заказать
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Не можете определиться с услугой?
            </h3>
            <p className="text-gray-600 mb-6">
              Получите бесплатную консультацию наших экспертов. Мы поможем выбрать 
              оптимальный план действий для вашей ситуации.
            </p>
            <button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              data-testid="consultation-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Получить бесплатную консультацию
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
