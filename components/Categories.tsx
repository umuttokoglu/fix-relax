'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Categories() {
  const [currentIndex, setCurrentIndex] = useState(0)
  
  const categories = [
    {
      name: 'SUNSAIL FIX',
      description: 'Açık alanlara zarafet ve gölge getirir, sağlamlığıyla konforu kalıcı kılar.',
      rating: 5.0,
      image: '/images/categories/marley-referenzen.jpg'
    },
    {
      name: 'Flexo',
      description: 'Gölge ve şıklığı birleştirir, dayanıklılığıyla yıllarca konfor sağlar.',
      rating: 4.8,
      image: '/images/categories/vorhang-referenz-005.jpg'
    }
  ]
  
  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % categories.length)
  }
  
  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + categories.length) % categories.length)
  }

  return (
    <section className="w-full bg-[#f2f4f7] md:bg-white rounded-[24px] p-4 md:p-[96px] my-[24px] md:my-[48px] relative min-h-[700px] md:min-h-[700px]">
      <div className="max-w-[1392px] mx-auto">
        {/* Top Section - Badge and Pagination */}
        <div className="flex items-center justify-between mb-[32px] md:mb-[48px]">
          <div className="flex items-center gap-[8px]">
            <button className="bg-white px-[24px] py-[16px] rounded-full text-[13px] md:text-[14px] font-semibold text-text-primary w-[32px] h-[32px] md:w-[40px] md:h-[40px] flex items-center justify-center">
              1
            </button>
            <div className="w-[155px] md:w-[290px] h-[1px] md:h-[2px] bg-gray-300"></div>
          </div>
          
          <div className="flex items-center gap-[8px]">
            <span className="text-[12px] md:text-[14px] text-text-secondary opacity-50 font-medium">02  03</span>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-[24px] md:gap-[24px]">
          {/* Left Content */}
          <div className="flex-1 max-w-full md:max-w-[386px]">
            <p className="text-[12px] md:text-[14px] text-text-secondary opacity-50 md:opacity-100 mb-[8px] md:mb-[12px]">/Kategoriler</p>
            
            <h2 className="text-[32px] md:text-[48px] font-bold text-text-primary mb-[16px] md:mb-[24px] leading-[normal] max-w-[311px] md:max-w-none">
              Yaşam Alanlarını İlk Dokunuşta Güçlendiriyoruz
            </h2>
            
            <p className="hidden md:block text-[14px] md:text-[16px] text-text-primary mb-[32px] max-w-[284px]">
              Her detay özenle seçildi. İhtiyacını bulmak için kategorilerimize göz at.
            </p>

            <button className="bg-text-primary text-white pl-[16px] md:pl-[16px] pr-[6px] py-[6px] rounded-[53px] flex items-center gap-[12px] font-medium hover:bg-text-primary/90 transition-colors">
              <span className="text-[14px] md:text-[16px]">Detaylı İncele</span>
              <div className="bg-white rounded-full w-[24px] h-[24px] md:w-[32px] md:h-[32px] flex items-center justify-center">
                <svg width="16" height="16" className="md:w-[20px] md:h-[20px]" viewBox="0 0 20 20" fill="none">
                  <path d="M5 15L15 5M15 5H7M15 5V13" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
            </button>
          </div>

          {/* Right Content - Category Cards */}
          <div className="flex-1 relative">
            {/* Navigation Arrows */}
            <div className="absolute right-[16px] md:right-0 top-[48px] md:top-[50%] md:-translate-y-1/2 flex items-center gap-[8px] z-20">
              <button 
                onClick={prevSlide}
                className="bg-white rounded-[24px] w-[24px] h-[24px] flex items-center justify-center opacity-30 hover:opacity-100 transition-opacity"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-90">
                  <path d="M7 3L7 11M7 11L3 7M7 11L11 7" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                onClick={nextSlide}
                className="bg-text-primary rounded-[24px] w-[24px] h-[24px] md:w-[36px] md:h-[36px] flex items-center justify-center hover:bg-text-primary/90 transition-colors"
              >
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-90 scale-y-[-1]">
                  <path d="M7 3L7 11M7 11L3 7M7 11L11 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>

            {/* Cards Container */}
            <div className="relative h-[488px] md:h-[563px]">
              {/* First Card - SUNSAIL FIX (Larger, Behind) */}
              <div className="absolute left-0 top-0 w-full md:w-[358px] h-[488px] md:h-[563px] rounded-[24px] overflow-hidden transition-all duration-300">
                <Image 
                  src={categories[currentIndex].image}
                  alt={categories[currentIndex].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-text-primary/80 via-text-primary/20 to-transparent"></div>
                
                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-[16px] z-10">
                  <div className="bg-black/15 backdrop-blur-sm rounded-[6px] p-[14px]">
                    {/* Rating */}
                    <div className="absolute top-[14px] right-[14px] flex items-center gap-[5px]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="10" height="10" viewBox="0 0 10 10" fill="#CEF240">
                          <path d="M5 0L6.18 3.09L9.5 3.63L7.25 5.82L7.82 9.13L5 7.59L2.18 9.13L2.75 5.82L0.5 3.63L3.82 3.09L5 0Z"/>
                        </svg>
                      ))}
                      <span className="text-white text-[10px] font-medium ml-[5px]">{categories[currentIndex].rating}</span>
                    </div>

                    <h3 className="text-white text-[16px] font-semibold mb-[8px]">
                      {categories[currentIndex].name}
                    </h3>
                    <p className="text-white/50 text-[14px] leading-[16px] mb-[12px] tracking-tight max-w-[230px]">
                      {categories[currentIndex].description}
                    </p>
                    
                    <div className="flex items-center gap-[1px]">
                      <button className="bg-white px-[12px] py-[6px] rounded-full text-[11px] font-medium text-text-primary hover:bg-gray-100 transition-colors">
                        Kategoriye Git
                      </button>
                      <div className="bg-white rounded-full w-[25px] h-[25px] flex items-center justify-center ml-[1px]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 11L11 3M11 3H5M11 3V9" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Second Card - FLEXO (Smaller, In Front) - Hidden on mobile */}
              <div className="hidden md:block absolute right-0 md:left-[374px] top-0 w-full md:w-[338px] h-[452px] rounded-[24px] overflow-hidden transition-all duration-300">
                <Image 
                  src={categories[(currentIndex + 1) % categories.length].image}
                  alt={categories[(currentIndex + 1) % categories.length].name}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[rgba(33,33,33,0.1)]"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-text-primary/80 via-text-primary/20 to-transparent"></div>
                
                {/* Card Content */}
                <div className="absolute bottom-0 left-0 right-0 p-[16px] z-10">
                  <div className="bg-black/15 backdrop-blur-sm rounded-[6px] p-[14px]">
                    {/* Rating */}
                    <div className="absolute top-[14px] right-[14px] flex items-center gap-[5px]">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} width="10" height="10" viewBox="0 0 10 10" fill="#CEF240">
                          <path d="M5 0L6.18 3.09L9.5 3.63L7.25 5.82L7.82 9.13L5 7.59L2.18 9.13L2.75 5.82L0.5 3.63L3.82 3.09L5 0Z"/>
                        </svg>
                      ))}
                      <span className="text-white text-[10px] font-medium ml-[5px]">{categories[(currentIndex + 1) % categories.length].rating}</span>
                    </div>

                    <h3 className="text-white text-[16px] font-semibold uppercase mb-[8px]">
                      {categories[(currentIndex + 1) % categories.length].name}
                    </h3>
                    <p className="text-white/50 text-[14px] leading-[16px] mb-[12px] tracking-tight max-w-[230px]">
                      {categories[(currentIndex + 1) % categories.length].description}
                    </p>
                    
                    <div className="flex items-center gap-[1px]">
                      <button className="bg-white px-[12px] py-[6px] rounded-full text-[11px] font-medium text-text-primary hover:bg-gray-100 transition-colors">
                        Kategoriye Git
                      </button>
                      <div className="bg-white rounded-full w-[25px] h-[25px] flex items-center justify-center ml-[1px]">
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M3 11L11 3M11 3H5M11 3V9" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
