'use client'

import Image from 'next/image'
import { useState, useRef } from 'react'

export default function Partners() {
  const scrollRef = useRef<HTMLDivElement>(null)
  
  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const scrollAmount = 300
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      })
    }
  }
  
  const partners = [
    {
      name: 'Trendyol',
      logo: '/images/partners/trendyol-logo.png',
    },
    {
      name: 'Amazon',
      logo: '/images/partners/amazon-logo.png',
    },
    {
      name: 'Hepsiburada',
      logo: '/images/partners/hepsiburada-logo.png',
    },
    {
      name: 'N11',
      logo: '/images/partners/n11-logo.png',
    },
  ]

  return (
    <section className="w-full bg-bg-light rounded-[24px] p-4 md:p-[80px] my-[24px] md:my-[48px]">
      <div className="max-w-[1392px] mx-auto">
        {/* Section Header */}
        <div className="mb-[48px]">
          <p className="text-[14px] md:text-[16px] text-text-secondary opacity-50 mb-[4px]">
            İş Birliği Yaptığımız Markalar
          </p>
          <h2 className="text-[32px] md:text-[36px] font-semibold text-text-primary">
            Pazar Yerleri
          </h2>
        </div>

        {/* Partners Carousel */}
        <div className="flex items-center gap-[20px]">
          {/* Left Arrow */}
          <button 
            onClick={() => scroll('left')}
            className="hidden md:flex bg-white rounded-full w-[36px] h-[36px] items-center justify-center shadow-md hover:shadow-lg transition-shadow transform rotate-180"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>

          {/* Partners Grid */}
          <div ref={scrollRef} className="flex-1 flex gap-[16px] overflow-x-auto pb-2 scrollbar-hide">
            {partners.map((partner, index) => (
              <div 
                key={index}
                className="bg-white h-[100px] rounded-[8px] flex items-center justify-center px-[40px] min-w-[260px] hover:shadow-md transition-shadow"
              >
                <div className="relative w-full h-[48px]">
                  <Image 
                    src={partner.logo}
                    alt={partner.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button 
            onClick={() => scroll('right')}
            className="hidden md:flex bg-white rounded-full w-[36px] h-[36px] items-center justify-center shadow-md hover:shadow-lg transition-shadow"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 15L12.5 10L7.5 5" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}


