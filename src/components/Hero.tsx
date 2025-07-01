'use client'

import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800"
      data-testid="hero-section"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-black/30"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1551218808-94e220e084d2?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">
          {/* Badge */}
          <div className="inline-flex items-center bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
            <CheckCircle className="w-5 h-5 text-green-400 mr-2" />
            <span className="text-sm font-medium">Более 500 успешных трудоустройств</span>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in">
            Работа в{' '}
            <span className="bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
              Европе
            </span>
            <br />
            Ваш путь к успеху
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto animate-slide-up">
            Профессиональная помощь в поиске работы и трудоустройстве в европейских странах. 
            Легальное оформление, визовая поддержка, полное сопровождение.
          </p>

          {/* Features List */}
          <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm md:text-base">
            {[
              'Официальное трудоустройство',
              'Помощь с документами',
              'Визовая поддержка',
              'Поиск жилья'
            ].map((feature, index) => (
              <div 
                key={index}
                className="flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2"
                data-testid={`feature-${index}`}
              >
                <CheckCircle className="w-4 h-4 text-green-400 mr-2" />
                <span>{feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center group"
              data-testid="main-cta-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Получить консультацию бесплатно
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300"
              data-testid="secondary-cta-button"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Узнать подробнее
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/20">
            {[
              { number: '500+', label: 'Трудоустроенных' },
              { number: '15', label: 'Стран Европы' },
              { number: '3', label: 'Года опыта' },
              { number: '24/7', label: 'Поддержка' },
            ].map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300 text-sm md:text-base">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero
