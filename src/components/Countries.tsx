'use client'

import React from 'react'
import { MapPin, Users, Briefcase, Euro } from 'lucide-react'

const Countries = () => {
  const countries = [
    {
      name: 'Германия',
      flag: '🇩🇪',
      description: 'Крупнейшая экономика Европы с высоким уровнем жизни',
      averageSalary: '3,500 - 5,000',
      popularJobs: ['IT специалисты', 'Инженеры', 'Медработники', 'Производство'],
      language: 'Немецкий',
      population: '83 млн',
      minWage: '12€/час',
      image: 'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Польша',
      flag: '🇵🇱',
      description: 'Быстро развивающаяся экономика с дружелюбным отношением к иностранцам',
      averageSalary: '1,200 - 2,500',
      popularJobs: ['IT', 'Логистика', 'Производство', 'Строительство'],
      language: 'Польский',
      population: '38 млн',
      minWage: '4.2€/час',
      image: 'https://images.unsplash.com/photo-1544986581-efac024faf62?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Чехия',
      flag: '🇨🇿',
      description: 'Красивая страна с развитой промышленностью и туризмом',
      averageSalary: '1,000 - 2,200',
      popularJobs: ['Туризм', 'Производство', 'IT', 'Сервис'],
      language: 'Чешский',
      population: '10.7 млн',
      minWage: '4.1€/час',
      image: 'https://images.unsplash.com/photo-1541849546-216549ae216d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Нидерланды',
      flag: '🇳🇱',
      description: 'Высокий уровень жизни и отличные условия труда',
      averageSalary: '3,000 - 5,500',
      popularJobs: ['IT', 'Логистика', 'Сельское хозяйство', 'Финансы'],
      language: 'Нидерландский',
      population: '17.4 млн',
      minWage: '11.4€/час',
      image: 'https://images.unsplash.com/photo-1534351590666-13e3e96b5017?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Австрия',
      flag: '🇦🇹',
      description: 'Стабильная экономика и высокое качество жизни',
      averageSalary: '2,800 - 4,500',
      popularJobs: ['Туризм', 'Производство', 'IT', 'Медицина'],
      language: 'Немецкий',
      population: '9 млн',
      minWage: '10.8€/час',
      image: 'https://images.unsplash.com/photo-1516550893923-42d28e5677af?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      name: 'Италия',
      flag: '🇮🇹',
      description: 'Богатая культура и развитая экономика',
      averageSalary: '1,800 - 3,200',
      popularJobs: ['Туризм', 'Мода', 'Производство', 'Сельское хозяйство'],
      language: 'Итальянский',
      population: '60 млн',
      minWage: '9€/час',
      image: 'https://images.unsplash.com/photo-1515542622106-78bda8ba0e5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    }
  ]

  return (
    <section id="countries" className="py-20 bg-white" data-testid="countries-section">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Страны для трудоустройства
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Мы работаем с ведущими работодателями в самых привлекательных странах Европы. 
            Выберите страну, которая подходит именно вам.
          </p>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {countries.map((country, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
              data-testid={`country-card-${index}`}
            >
              {/* Country Image */}
              <div 
                className="h-48 bg-cover bg-center relative"
                style={{ backgroundImage: `url(${country.image})` }}
              >
                <div className="absolute inset-0 bg-black/40"></div>
                <div className="absolute top-4 left-4">
                  <span className="text-4xl">{country.flag}</span>
                </div>
                <div className="absolute bottom-4 left-4 text-white">
                  <h3 className="text-2xl font-bold">{country.name}</h3>
                </div>
              </div>

              {/* Country Info */}
              <div className="p-6">
                <p className="text-gray-600 mb-6">{country.description}</p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Euro className="w-5 h-5 text-green-600 mr-1" />
                    </div>
                    <div className="text-sm text-gray-600">Зарплата</div>
                    <div className="font-semibold text-gray-800">{country.averageSalary}€</div>
                  </div>
                  
                  <div className="text-center p-3 bg-gray-50 rounded-lg">
                    <div className="flex items-center justify-center mb-2">
                      <Users className="w-5 h-5 text-blue-600 mr-1" />
                    </div>
                    <div className="text-sm text-gray-600">Население</div>
                    <div className="font-semibold text-gray-800">{country.population}</div>
                  </div>
                </div>

                {/* Additional Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <MapPin className="w-4 h-4 text-gray-500 mr-3" />
                    <span className="text-sm text-gray-600">Язык: {country.language}</span>
                  </div>
                  <div className="flex items-center">
                    <Euro className="w-4 h-4 text-gray-500 mr-3" />
                    <span className="text-sm text-gray-600">Мин. зарплата: {country.minWage}</span>
                  </div>
                </div>

                {/* Popular Jobs */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-800 mb-3">Популярные вакансии:</h4>
                  <div className="flex flex-wrap gap-2">
                    {country.popularJobs.map((job, jobIndex) => (
                      <span 
                        key={jobIndex}
                        className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm"
                      >
                        {job}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button 
                  className="w-full bg-primary-600 hover:bg-primary-700 text-white py-3 rounded-lg font-medium transition-colors duration-300"
                  data-testid={`country-button-${index}`}
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  Узнать о вакансиях
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Info */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white rounded-2xl p-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Не нашли подходящую страну?
            </h3>
            <p className="text-primary-100 mb-6">
              Мы также работаем с работодателями в других европейских странах. 
              Расскажите нам о ваших предпочтениях, и мы найдем идеальный вариант.
            </p>
            <button 
              className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300"
              data-testid="other-countries-button"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Обсудить другие варианты
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Countries
