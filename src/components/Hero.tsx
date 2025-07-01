'use client'

import React from 'react'
import { ArrowRight, CheckCircle } from 'lucide-react'

const Hero = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 pt-24"
      data-testid="hero-section"
    >
      {/* Background Image Overlay */}
      <div 
        className="absolute inset-0 bg-black/85"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      
      {/* Additional dark overlay for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/60 to-black/70" />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto text-center text-white">

          {/* Main Heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in text-white drop-shadow-2xl" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(0,0,0,0.6)'}}>
            Работа в{' '}
            <span className="text-yellow-400 font-extrabold" style={{textShadow: '2px 2px 8px rgba(0,0,0,0.9), 0 0 15px rgba(0,0,0,0.7)'}}>
              Европе
            </span>
            <br />
            Ваш путь к успеху
          </h1>

          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-white mb-8 max-w-3xl mx-auto animate-slide-up font-medium" style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0 0 15px rgba(0,0,0,0.5)'}}>
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
                className="flex items-center bg-black/40 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20"
                data-testid={`feature-${index}`}
                style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}
              >
                <CheckCircle className="w-4 h-4 text-green-400 mr-2 drop-shadow-lg" />
                <span className="text-white font-medium">{ feature}</span>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button 
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-4 rounded-lg transition-all duration-300 transform hover:scale-105 flex items-center group shadow-2xl"
              data-testid="main-cta-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Получить консультацию бесплатно
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              className="border-2 border-white bg-white/10 backdrop-blur-sm text-white hover:bg-white hover:text-primary-600 font-semibold px-8 py-4 rounded-lg transition-all duration-300 shadow-xl"
              data-testid="secondary-cta-button"
              onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
              style={{textShadow: '1px 1px 3px rgba(0,0,0,0.5)'}}
            >
              Узнать подробнее
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-16 border-t border-white/30">
            {[
              { number: '500+', label: 'Трудоустроенных' },
              { number: '15', label: 'Стран Европы' },
              { number: '3', label: 'Года опыта' },
              { number: '24/7', label: 'Поддержка' },
            ].map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <div 
                  className="text-3xl md:text-4xl font-bold text-yellow-400 mb-2"
                  style={{textShadow: '2px 2px 6px rgba(0,0,0,0.8), 0 0 10px rgba(0,0,0,0.6)'}}
                >
                  {stat.number}
                </div>
                <div 
                  className="text-gray-200 text-sm md:text-base font-medium"
                  style={{textShadow: '1px 1px 4px rgba(0,0,0,0.8)'}}
                >
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
