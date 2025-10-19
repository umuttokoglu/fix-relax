'use client'

import Image from 'next/image'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }

  return (
    <footer className="bg-black rounded-[24px] overflow-hidden">
      <div className="max-w-[1392px] mx-auto px-4 md:px-[96px] py-[40px] md:py-[80px]">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between mb-[48px] md:mb-[80px] gap-[32px] md:gap-[48px]">
          {/* Logo and Description */}
          <div className="max-w-full md:max-w-[171px]">
            <h3 className="text-white text-[20px] md:text-[24px] font-bold mb-[16px] md:mb-[24px]">FIX RELAX</h3>
            <p className="text-white/80 text-[12px] md:text-[14px] leading-[20px] opacity-80">
              Her Parçasına rafine bir zerafetle modern yaşam için tasarlandı
            </p>
          </div>

          {/* Links Container */}
          <div className="flex gap-[48px] md:gap-[100px]">
            {/* Kurumsal Links */}
            <div>
              <h4 className="text-[#f4f4f4] text-[14px] md:text-[16px] font-medium mb-[12px] md:mb-[14px]">Kurumsal</h4>
              <ul className="space-y-[8px] md:space-y-[10px] text-[12px] md:text-[14px] text-text-secondary">
                <li><a href="#" className="hover:text-white transition-colors">Hakkımızda</a></li>
                <li><a href="#" className="hover:text-white transition-colors">İletişim</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Üyelik Sözleşmesi</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Aydınlatma Metni</a></li>
              </ul>
            </div>

            {/* Kategoriler Links */}
            <div>
              <h4 className="text-[#f4f4f4] text-[14px] md:text-[16px] font-medium mb-[12px] md:mb-[14px]">Kategoriler</h4>
              <ul className="space-y-[8px] md:space-y-[10px] text-[12px] md:text-[14px] text-text-secondary">
                <li><a href="#" className="hover:text-white transition-colors">FLEXO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">LUNO</a></li>
                <li><a href="#" className="hover:text-white transition-colors">RELAX LOUNGE</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SOLINA</a></li>
                <li><a href="#" className="hover:text-white transition-colors">SUNFAIL FIX</a></li>
              </ul>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-[20px] md:gap-[24px]">
            <a href="#" className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] hover:opacity-80 transition-opacity">
              <Image src="/images/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} />
            </a>
            <a href="#" className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] hover:opacity-80 transition-opacity">
              <Image src="/images/icons/instagram.svg" alt="Instagram" width={24} height={24} />
            </a>
            <a href="#" className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] hover:opacity-80 transition-opacity flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="white">
                <path d="M11.025.656h2.147L8.482 6.03 14 13.344H9.68L6.294 8.909l-3.87 4.435H.275l5.016-5.75L0 .657h4.43L7.486 4.71 11.025.656zM10.27 12.05h1.19L3.78 1.877H2.504L10.27 12.05z"/>
              </svg>
            </a>
            <a href="#" className="w-[20px] md:w-[24px] h-[20px] md:h-[24px] hover:opacity-80 transition-opacity">
              <Image src="/images/icons/youtube.svg" alt="YouTube" width={24} height={24} />
            </a>
          </div>
        </div>

        {/* Newsletter Section */}
        <div className="border-t border-white/10 pt-[24px] md:pt-[35px] pb-[24px] md:pb-[35px] flex flex-col md:flex-row items-start md:items-center justify-between gap-[24px]">
          <div className="text-left">
            <h3 className="text-white text-[20px] md:text-[24px] leading-[32px] mb-[6px] md:mb-[8px]">Bültenimize katılın</h3>
            <p className="text-[#f4f4f4]/70 text-[12px] md:text-[14px] leading-[20px]">
              Reflect ile ilgili tüm gelişmelerden haberdar olun
            </p>
          </div>

          <div className="flex gap-0 w-full md:w-[404px]">
            <input
              type="email"
              placeholder="E-posta adresinizi girin"
              className="flex-1 bg-transparent border border-white/10 rounded-l-[8px] px-[12px] py-[10px] md:py-[12px] text-[#f4f4f4]/60 text-[12px] md:text-[14px] focus:outline-none focus:border-white/20 transition-colors"
            />
            <button className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-r-[8px] px-[14px] md:px-[16px] py-[10px] md:py-[12px] text-[#f4f4f4] text-[12px] md:text-[14px] font-medium hover:bg-white/10 transition-colors whitespace-nowrap">
              Abone ol
            </button>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/10 pt-[24px] md:pt-[32px] flex flex-col md:flex-row items-center justify-between gap-[16px]">
          <p className="text-[#f4f4f4] opacity-50 text-[12px] md:text-[14px] capitalize">
            @2025 FIXRELAX . All rights reserved.
          </p>

          {/* Scroll to Top Button */}
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white rounded-full w-[32px] md:w-[36px] h-[32px] md:h-[36px] flex items-center justify-center hover:bg-gray-100 transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M10 15V5M10 5L5 10M10 5L15 10" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>
    </footer>
  )
}
