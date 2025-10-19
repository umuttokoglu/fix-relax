'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [activeHotspot, setActiveHotspot] = useState<number | null>(null)
  return (
    <section className="w-full min-h-[603px] md:h-[900px] max-w-[1440px] mx-auto px-4 md:px-[24px] pt-[8px] md:pt-[36px]">
      <div className="flex flex-col md:flex-row gap-[20px] min-h-[603px] md:h-[741px]">
        {/* Left Section */}
        <div className="w-full md:flex-1 bg-[#fcfcfd] md:bg-[rgba(242,244,247,0.25)] rounded-[24px] overflow-hidden relative min-h-[603px]">
          {/* Customer Badge */}
          <div className="absolute top-[20px] md:top-[48px] left-1/2 transform -translate-x-1/2 bg-white rounded-full px-[8px] pr-[14px] py-[6px] md:py-[8px] flex items-center gap-[6px] shadow-lg z-10">
            <div className="flex items-center -space-x-3">
              <Image src="/images/hero/customer-1.jpg" alt="Customer" width={24} height={24} className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full border-2 border-white object-cover" />
              <Image src="/images/hero/customer-2.jpg" alt="Customer" width={24} height={24} className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full border-2 border-white object-cover" />
              <Image src="/images/hero/customer-3.jpg" alt="Customer" width={24} height={24} className="w-[20px] h-[20px] md:w-[24px] md:h-[24px] rounded-full border-2 border-white object-cover" />
            </div>
            <span className="text-[12px] md:text-[14px] font-medium text-text-primary">10000+ Mutlu Müşteri</span>
          </div>

          {/* Main Heading */}
          <div className="absolute top-[130px] md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2 text-center w-full px-[24px] md:px-[48px] z-10">
            <h1 className="text-[36px] md:text-[54px] font-semibold leading-[normal] md:leading-[65px] text-text-primary mb-0 md:mb-[12px]">
              Bahçenize Konfor,<br />Yaşamınıza
            </h1>
            <div className="flex items-center justify-center gap-[8px] my-0 md:mb-[12px]">
              <span className="text-[36px] md:text-[54px] font-['Sofia',serif] italic text-[#CEF240]">Zerafet</span>
              <div className="w-[36px] md:w-[54px] h-[2px] bg-text-primary"></div>
            </div>
            <h2 className="text-[36px] md:text-[48px] font-semibold text-text-primary mb-[24px] md:mb-[32px]">
              Katıyoruz!
            </h2>

            {/* CTA Buttons */}
            <div className="flex items-center justify-center gap-[12px] flex-wrap relative z-20">
              <button className="bg-[#CEF240] px-[24px] py-[14px] md:py-[16px] rounded-[53px] text-[14px] md:text-[16px] font-semibold text-text-primary hover:bg-[#b8d930] transition-colors whitespace-nowrap">
                Şimdi Satın Al
              </button>
              <button className="bg-white border border-text-primary px-[24px] py-[14px] md:py-[16px] rounded-[53px] text-[14px] md:text-[16px] font-semibold text-text-primary flex items-center gap-[4px] hover:bg-gray-50 transition-colors whitespace-nowrap">
                Keşfet
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4 14L14 4M14 4H6M14 4V12" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </div>
          </div>

          {/* Bottom Product Card */}
          <div className="absolute bottom-[16px] md:bottom-[24px] left-1/2 transform -translate-x-1/2 w-[calc(100%-26px)] max-w-[318px] md:max-w-[638px] h-[164px] md:h-[194px] bg-white rounded-[24px] border border-[#eceef2] z-10 overflow-hidden">
            <div className="relative w-full h-full">
              {/* Content - Left Side */}
              <div className="absolute left-[16px] md:left-[72px] top-[16px] w-[133px] md:w-[273px] flex flex-col gap-[12px]">
                <button className="bg-[#fbfcfc] px-[12px] py-[8px] rounded-[53px] text-[11px] font-semibold text-text-primary flex items-center gap-[4px] hover:bg-gray-50 transition-colors w-fit">
                  Seriye Göz At
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                    <path d="M3 11L11 3M11 3H5M11 3V9" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                
                <div className="flex flex-col gap-[5px]">
                  <h3 className="text-[16px] md:text-[18px] font-medium text-text-primary leading-normal">Solina Serisi</h3>
                  <p className="text-[12px] md:text-[14px] text-text-secondary leading-normal">
                    Özel dokusu ve modern çizgileriyle konforu ve şıklığı tek kişilik koltukta buluşturur.
                  </p>
                </div>
              </div>

              {/* Image - Right Side */}
              <div className="absolute right-[16px] top-[58px] md:right-[24px] md:top-1/2 md:-translate-y-1/2 w-[133px] md:w-[237px] h-[90px] md:h-[162px] bg-[#f9f9f9] rounded-[16px] overflow-hidden">
                <Image 
                  src="/images/categories/vorhang-referenz-005.jpg" 
                  alt="Solina Serisi" 
                  fill
                  className="object-cover"
                />
              </div>
              
              {/* Navigation Arrows - Mobile */}
              <div className="flex md:hidden items-center gap-[8px] absolute right-[16px] top-[21px]">
                <button className="border border-text-primary rounded-[24px] w-[20px] h-[20px] flex items-center justify-center opacity-30">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-90">
                    <path d="M7 3L7 11M7 11L3 7M7 11L11 7" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="border border-text-primary rounded-[24px] w-[20px] h-[20px] flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-90 scale-y-[-1]">
                    <path d="M7 3L7 11M7 11L3 7M7 11L11 7" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
              
              {/* Navigation Arrows - Desktop */}
              <div className="hidden md:flex items-center gap-[8px] absolute left-[289px] top-[154px]">
                <button className="border border-text-primary rounded-[24px] w-[24px] h-[24px] flex items-center justify-center opacity-30 hover:opacity-50 transition-opacity">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-90">
                    <path d="M7 3L7 11M7 11L3 7M7 11L11 7" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
                <button className="border border-text-primary rounded-[24px] w-[24px] h-[24px] flex items-center justify-center hover:bg-text-primary/10 transition-colors">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-90 scale-y-[-1]">
                    <path d="M7 3L7 11M7 11L3 7M7 11L11 7" stroke="#212121" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section - Image (Hidden on mobile) */}
        <div className="hidden md:block flex-1 bg-[#f9f9f9] rounded-[24px] overflow-hidden relative">
          <Image 
            src="/images/hero/raffbare-sonnensegel.jpg" 
            alt="Fix Relax Bahçe Mobilyaları" 
            fill
            className="object-cover object-center"
          />
          
          {/* Hotspot 1 - Sunsail Fix (Top Left) */}
          <div 
            className="absolute left-[266px] top-[263px] z-10"
            onMouseEnter={() => setActiveHotspot(1)}
            onMouseLeave={() => setActiveHotspot(null)}
          >
            {/* Hotspot Dot */}
            <div className="relative">
              <svg width="26" height="26" viewBox="0 0 26 26" className="cursor-pointer">
                <circle cx="13" cy="13" r="13" fill="white" opacity="0.9"/>
                <circle cx="13" cy="13" r="6" fill="#CEF240"/>
                <circle cx="13" cy="13" r="13" fill="white" opacity="0.3">
                  <animate attributeName="r" from="13" to="20" dur="1.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" from="0.3" to="0" dur="1.5s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            
            {/* Product Card 1 */}
            {activeHotspot === 1 && (
              <div className="absolute left-[-192px] top-[-46px] w-[160px] h-[154px] animate-fade-in">
                {/* Background Card with Shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[8px] shadow-[0_8px_32px_rgba(0,0,0,0.25)]"></div>
                
                {/* Connecting Line */}
                <svg width="77" height="77" viewBox="0 0 77 77" className="absolute left-[140px] top-[30px] z-[-1]">
                  <line x1="0" y1="0" x2="77" y2="77" stroke="#E0E0E0" strokeWidth="1" strokeDasharray="3 3"/>
                </svg>
                
                {/* Card Content */}
                <div className="relative w-full h-full p-[8px] z-10">
                  <div className="bg-[#f9f9f9] rounded-[16px] w-[144px] h-[90px] overflow-hidden mb-[5px] relative">
                    <Image 
                      src="/images/hero/flex-referenzen.jpg"
                      alt="Sunsail Fix Serisi"
                      width={144}
                      height={90}
                      className="object-cover"
                    />
                  </div>
                  <div className="leading-[1.4]">
                    <p className="text-[14px] font-medium text-white mb-0">Sunsail Fix Serisi</p>
                    <p className="text-[12px] text-white/75 mb-0">+3 renk</p>
                  </div>
                </div>
                
                {/* Color Options */}
                <div className="absolute right-[-35px] top-[0.64px] flex items-center gap-[5px] z-10">
                  <div className="w-[24px] h-[24px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
                  </div>
                  <div className="w-[24px] h-[24px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#a9c558]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Hotspot 2 - Luno Series (Bottom Left) */}
          <div 
            className="absolute left-[278px] top-[586px] z-10"
            onMouseEnter={() => setActiveHotspot(2)}
            onMouseLeave={() => setActiveHotspot(null)}
          >
            {/* Hotspot Dot */}
            <div className="relative">
              <svg width="26" height="26" viewBox="0 0 26 26" className="cursor-pointer">
                <circle cx="13" cy="13" r="13" fill="white" opacity="0.9"/>
                <circle cx="13" cy="13" r="6" fill="#CEF240"/>
                <circle cx="13" cy="13" r="13" fill="white" opacity="0.3">
                  <animate attributeName="r" from="13" to="20" dur="1.5s" repeatCount="indefinite"/>
                  <animate attributeName="opacity" from="0.3" to="0" dur="1.5s" repeatCount="indefinite"/>
                </circle>
              </svg>
            </div>
            
            {/* Product Card 2 */}
            {activeHotspot === 2 && (
              <div className="absolute left-[63px] top-[-33px] w-[160px] h-[154px] animate-fade-in">
                {/* Background Card with Shadow */}
                <div className="absolute inset-0 bg-gradient-to-b from-[#2a2a2a] to-[#1a1a1a] rounded-[8px] shadow-[0_8px_32px_rgba(0,0,0,0.25)]"></div>
                
                {/* Connecting Line */}
                <svg width="77" height="77" viewBox="0 0 77 77" className="absolute left-[-64px] top-[13px] z-[-1]">
                  <line x1="77" y1="77" x2="0" y2="0" stroke="#E0E0E0" strokeWidth="1" strokeDasharray="3 3"/>
                </svg>
                
                {/* Card Content */}
                <div className="relative w-full h-full p-[8px] z-10">
                  <div className="bg-[#f9f9f9] rounded-[16px] w-[144px] h-[90px] overflow-hidden mb-[5px] relative">
                    <Image 
                      src="/images/hero/reload-corner-seat.jpg"
                      alt="Luno Serisi"
                      width={144}
                      height={90}
                      className="object-cover"
                    />
                  </div>
                  <div className="leading-[1.4]">
                    <p className="text-[14px] font-medium text-white mb-0">Luno Serisi</p>
                    <p className="text-[12px] text-white/75 mb-0">+3 renk</p>
                  </div>
                </div>
                
                {/* Color Options */}
                <div className="absolute right-[-58px] top-[0.64px] flex items-center gap-[5px] z-10">
                  <div className="w-[24px] h-[24px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-[20px] h-[20px] rounded-full bg-white"></div>
                  </div>
                  <div className="w-[24px] h-[24px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#a9c558]"></div>
                  </div>
                  <div className="w-[24px] h-[24px] rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center cursor-pointer hover:scale-110 transition-transform">
                    <div className="w-[20px] h-[20px] rounded-full bg-[#e76237]"></div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
