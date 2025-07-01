'use client'

import React, { useState, useEffect } from 'react'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0)

  const testimonials = [
    {
      name: 'Анна Петрова',
      position: 'IT-специалист',
      country: 'Германия',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b002?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'EuroWork помогли мне найти отличную работу в Берлине всего за 3 недели! Профессиональная команда, которая действительно заботится о своих клиентах. Рекомендую всем, кто мечтает о работе в Европе.',
      date: 'Март 2024'
    },
    {
      name: 'Дмитрий Козлов',
      position: 'Инженер-строитель',
      country: 'Нидерланды',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Благодаря EuroWork я получил работу в Амстердаме с зарплатой в 3 раза выше, чем дома. Полное сопровождение от поиска вакансии до оформления визы. Очень доволен результатом!',
      date: 'Февраль 2024'
    },
    {
      name: 'Елена Смирнова',
      position: 'Медсестра',
      country: 'Австрия',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Мечтала работать в европейской клинике, и EuroWork сделали это реальностью. Теперь работаю в Вене, получаю достойную зарплату и развиваюсь профессионально. Спасибо за веру в меня!',
      date: 'Январь 2024'
    },
    {
      name: 'Алексей Иванов',
      position: 'Водитель',
      country: 'Польша',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Переехал в Варшаву с семьей. EuroWork не только нашли мне работу, но и помогли с жильем и школой для детей. Комплексный подход - это то, что отличает их от других агентств.',
      date: 'Декабрь 2023'
    },
    {
      name: 'Мария Новикова',
      position: 'Повар',
      country: 'Чехия',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80',
      rating: 5,
      text: 'Работаю шеф-поваром в ресторане в Праге. EuroWork помогли не только с трудоустройством, но и с языковыми курсами. Теперь чувствую себя уверенно в новой стране.',
      date: 'Ноябрь 2023'
    }
  ]

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => 
        prev === testimonials.length - 1 ? 0 : prev + 1
      )
    }, 5000)

    return () => clearInterval(timer)
  }, [testimonials.length])

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === testimonials.length - 1 ? 0 : prev + 1
    )
  }

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => 
      prev === 0 ? testimonials.length - 1 : prev - 1
    )
  }

  const currentReview = testimonials[currentTestimonial]

  return (
    <section id="testimonials" className="py-20 bg-white" data-testid="testimonials-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Отзывы наших клиентов
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Истории успеха людей, которые доверили нам свою мечту о работе в Европе
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-6 right-6 opacity-20">
              <Quote className="w-20 h-20 text-primary-600" />
            </div>

            {/* Content */}
            <div className="relative z-10">
              {/* Stars */}
              <div className="flex items-center mb-6">
                {[...Array(currentReview.rating)].map((_, index) => (
                  <Star 
                    key={index} 
                    className="w-6 h-6 text-yellow-400 fill-current" 
                  />
                ))}
              </div>

              {/* Testimonial Text */}
              <blockquote className="text-xl md:text-2xl text-gray-800 leading-relaxed mb-8 font-medium">
                "{currentReview.text}"
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center justify-between flex-wrap gap-4">
                <div className="flex items-center">
                  <img 
                    src={currentReview.avatar} 
                    alt={currentReview.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800">
                      {currentReview.name}
                    </h4>
                    <p className="text-gray-600">
                      {currentReview.position}
                    </p>
                    <p className="text-primary-600 font-medium">
                      {currentReview.country} • {currentReview.date}
                    </p>
                  </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center space-x-4">
                  <button 
                    onClick={prevTestimonial}
                    className="bg-white hover:bg-gray-50 text-primary-600 p-3 rounded-full shadow-md transition-colors duration-300"
                    data-testid="prev-testimonial"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="bg-white hover:bg-gray-50 text-primary-600 p-3 rounded-full shadow-md transition-colors duration-300"
                    data-testid="next-testimonial"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Indicators */}
        <div className="flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentTestimonial 
                  ? 'bg-primary-600' 
                  : 'bg-gray-300 hover:bg-gray-400'
              }`}
              data-testid={`testimonial-indicator-${index}`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="mt-20">
          <h3 className="text-2xl md:text-3xl font-bold text-center text-gray-800 mb-12">
            Все отзывы
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 hover:shadow-lg transition-shadow duration-300"
                data-testid={`testimonial-card-${index}`}
              >
                {/* Stars */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, starIndex) => (
                    <Star 
                      key={starIndex} 
                      className="w-4 h-4 text-yellow-400 fill-current" 
                    />
                  ))}
                </div>

                {/* Text */}
                <p className="text-gray-700 mb-4 line-clamp-4">
                  "{testimonial.text}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name}
                    className="w-10 h-10 rounded-full object-cover mr-3"
                  />
                  <div>
                    <h5 className="font-semibold text-gray-800">
                      {testimonial.name}
                    </h5>
                    <p className="text-sm text-gray-600">
                      {testimonial.position}, {testimonial.country}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8 md:p-12">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Станьте следующей историей успеха!
            </h3>
            <p className="text-primary-100 mb-8 max-w-2xl mx-auto">
              Присоединяйтесь к сотням довольных клиентов, которые уже нашли работу мечты в Европе
            </p>
            <button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105"
              data-testid="testimonials-cta-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Начать свою историю успеха
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
