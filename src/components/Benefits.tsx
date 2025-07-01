'use client'

import React from 'react'
import { 
  Shield, 
  Clock, 
  Users, 
  Award, 
  HeartHandshake, 
  Zap, 
  CheckCircle,
  Star 
} from 'lucide-react'

const Benefits = () => {
  const benefits = [
    {
      icon: Shield,
      title: 'Гарантия безопасности',
      description: 'Работаем только с проверенными работодателями. Все договоры официальные.',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      icon: Clock,
      title: 'Быстрое трудоустройство',
      description: 'Средний срок поиска работы составляет 2-4 недели благодаря нашей базе контактов.',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      icon: Users,
      title: 'Персональный менеджер',
      description: 'Каждому клиенту назначается личный менеджер для полного сопровождения.',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    },
    {
      icon: Award,
      title: 'Высокое качество услуг',
      description: '98% клиентов рекомендуют нас друзьям. Работаем на результат.',
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-100'
    },
    {
      icon: HeartHandshake,
      title: 'Поддержка адаптации',
      description: 'Помогаем не только найти работу, но и успешно адаптироваться в новой стране.',
      color: 'text-red-600',
      bgColor: 'bg-red-100'
    },
    {
      icon: Zap,
      title: 'Инновационный подход',
      description: 'Используем современные технологии и методы для максимально эффективного поиска.',
      color: 'text-indigo-600',
      bgColor: 'bg-indigo-100'
    }
  ]

  const stats = [
    { number: '500+', label: 'Успешных трудоустройств', icon: Users },
    { number: '98%', label: 'Довольных клиентов', icon: Star },
    { number: '15', label: 'Стран партнеров', icon: Award },
    { number: '24/7', label: 'Поддержка клиентов', icon: Clock }
  ]

  return (
    <section id="benefits" className="py-20 bg-gray-50" data-testid="benefits-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы предоставляем не просто услуги по трудоустройству, а комплексную поддержку 
            на пути к вашей новой жизни в Европе.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`benefit-card-${index}`}
            >
              {/* Icon */}
              <div className={`${benefit.bgColor} w-16 h-16 rounded-full flex items-center justify-center mb-6`}>
                <benefit.icon className={`w-8 h-8 ${benefit.color}`} />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {benefit.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Наши достижения в цифрах
            </h3>
            <p className="text-gray-600">
              Результаты, которыми мы гордимся
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index}
                className="text-center"
                data-testid={`stat-${index}`}
              >
                <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary-600" />
                </div>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Process Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Как мы работаем
            </h3>
            <p className="text-gray-600">
              Простой и понятный процесс от консультации до трудоустройства
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Консультация',
                description: 'Бесплатная консультация и анализ ваших возможностей'
              },
              {
                step: '02',
                title: 'Подбор вакансий',
                description: 'Поиск подходящих предложений в базе наших партнеров'
              },
              {
                step: '03',
                title: 'Оформление',
                description: 'Помощь с документами, визой и всеми формальностями'
              },
              {
                step: '04',
                title: 'Трудоустройство',
                description: 'Успешное трудоустройство и поддержка адаптации'
              }
            ].map((process, index) => (
              <div 
                key={index}
                className="text-center relative"
                data-testid={`process-step-${index}`}
              >
                {/* Step Number */}
                <div className="bg-primary-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>

                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden md:block absolute top-8 left-1/2 w-full h-0.5 bg-gray-300 -z-10"></div>
                )}

                {/* Content */}
                <h4 className="text-lg font-semibold text-gray-800 mb-3">
                  {process.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {process.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Готовы начать новую жизнь в Европе?
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Не откладывайте свою мечту на потом. Получите бесплатную консультацию 
              и узнайте о ваших возможностях уже сегодня.
            </p>
            <button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              data-testid="benefits-cta-button"
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

export default Benefits
