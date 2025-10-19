'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setProductsDropdownOpen(false)
      }
    }

    if (productsDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [productsDropdownOpen])

  const products = [
    {
      id: 'flexo',
      name: 'FLEXO',
      image: '/images/products/dropdown/flexo.jpg',
      subcategories: ['FLEXO CS', 'FLEXO M']
    },
    {
      id: 'relax-lounge',
      name: 'RELAX LOUNGE',
      image: '/images/products/dropdown/relax-lounge.jpg'
    },
    {
      id: 'luno',
      name: 'LUNO',
      image: '/images/products/dropdown/luno.jpg'
    },
    {
      id: 'solina',
      name: 'SOLINA',
      image: '/images/products/dropdown/solina.jpg'
    },
    {
      id: 'sunsail-fix',
      name: 'SUNSAIL FIX',
      image: '/images/products/dropdown/sunsail-fix.jpg'
    }
  ]

  return (
    <>
      {/* Top Bar */}
      <div className="bg-bg-light h-[34px] w-full overflow-hidden">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[120px] h-full flex items-center justify-between">
          <div className="flex items-center gap-[5px] text-[11px] text-text-primary font-normal">
            <Image src="/images/icons/phone.svg" alt="" width={14} height={14} />
            <span className="hidden sm:inline">Bizi Arayın:</span>
            <span>+90 0532 660 75 23</span>
          </div>
          
          <div className="flex items-center gap-[4px]">
            <Image src="/images/icons/turkey-flag.svg" alt="Türkçe" width={14} height={14} />
            <span className="text-[11px] text-text-primary">Türkçe</span>
            <Image src="/images/icons/dropdown-arrow.svg" alt="" width={10} height={10} />
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white h-[60px] md:h-[82px] w-full overflow-visible border-b border-gray-100 relative z-50">
        <div className="max-w-[1440px] mx-auto px-4 md:px-[120px] h-full flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-4">
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-[24px] h-[24px] flex items-center justify-center"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M3 12H21M3 6H21M3 18H21" stroke="#212121" strokeWidth="2" strokeLinecap="round"/>
              </svg>
            </button>
            
            <div className="h-[1px] w-[24px] bg-gray-200 rotate-90 md:hidden"></div>
            
            <h1 className="text-sm md:text-2xl font-bold text-text-primary">FIX RELAX</h1>
          </div>

          {/* Desktop Navigation Menu */}
          <nav className="hidden md:flex items-center gap-[30px] bg-[rgba(242,244,247,0.5)] rounded-full px-[4px] py-[4px] relative">
            <a 
              href="#" 
              className="flex items-center gap-[5px] bg-white px-[16px] py-[8px] rounded-full"
            >
              <div className="w-[5px] h-[5px] rounded-full bg-text-primary"></div>
              <span className="text-[14px] font-medium text-text-primary">Anasayfa</span>
            </a>
            <div 
              ref={dropdownRef}
              className="relative"
            >
              <button 
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
                className="flex items-center gap-[5px] text-[14px] text-text-primary hover:opacity-80 transition-opacity"
              >
                <span>Ürünler</span>
                <svg 
                  width="14" 
                  height="14" 
                  viewBox="0 0 14 14" 
                  fill="none"
                  className={`transition-transform duration-200 ${productsDropdownOpen ? 'rotate-180' : ''}`}
                >
                  <path d="M7 9.5L4.5 7L9.5 7L7 9.5Z" fill="#212121"/>
                </svg>
              </button>
              
              {/* Dropdown Menu */}
              {productsDropdownOpen && (
                <div className="absolute top-[calc(100%+20px)] left-[-50px] w-[460px] bg-white border border-[#f3f5fb] rounded-[16px] shadow-[0_8px_32px_rgba(0,0,0,0.08)] z-[100] p-[25px] animate-fade-in">
                  <div className="flex gap-[24px]">
                    {/* Main Products List */}
                    <div className="flex-1 flex flex-col gap-[4px]">
                      {products.map((product, index) => (
                        <a
                          key={product.id}
                          href={`/products/${product.id}`}
                          className={`flex items-center gap-[12px] p-[5px] rounded-[6px] h-[62px] transition-colors ${
                            index === 0 ? 'bg-[#f9f9fb]' : 'hover:bg-[#f9f9fb]'
                          }`}
                          onClick={() => setProductsDropdownOpen(false)}
                        >
                          <div className="w-[46px] h-[46px] rounded-[10px] overflow-hidden bg-[#f9f9fb] border border-[#f3f5fb] shrink-0">
                            <Image 
                              src={product.image}
                              alt={product.name}
                              width={46}
                              height={46}
                              className="object-cover w-full h-full"
                            />
                          </div>
                          <span className="text-[14px] text-text-primary font-normal uppercase flex-1">
                            {product.name}
                          </span>
                          {product.subcategories && (
                            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="rotate-[-90deg]">
                              <path d="M7 9.5L4.5 7L9.5 7L7 9.5Z" fill="#212121"/>
                            </svg>
                          )}
                        </a>
                      ))}
                    </div>
                    
                    {/* Vertical Divider */}
                    <div className="w-[1px] bg-gray-200"></div>
                    
                    {/* Subcategories (shown when FLEXO is hovered) */}
                    <div className="w-[80px] flex flex-col gap-[16px] pt-[5px]">
                      {products[0].subcategories?.map((sub) => (
                        <a 
                          key={sub}
                          href={`/products/flexo?variant=${sub.toLowerCase().replace(' ', '-')}`}
                          className="text-[14px] text-text-primary hover:text-text-primary/80 transition-colors"
                          onClick={() => setProductsDropdownOpen(false)}
                        >
                          {sub}
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
            <a href="#" className="text-[14px] text-text-primary">Alışveriş</a>
            <a href="#" className="text-[14px] text-text-primary">Referanslar</a>
            <a href="#" className="text-[14px] text-text-primary">İletişim</a>
          </nav>

          {/* Icons */}
          <div className="flex items-center gap-[8px] md:gap-[16px]">
            <button className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] rounded-full border border-[#ebebeb] flex items-center justify-center">
              <svg width="14" height="14" className="md:w-[18px] md:h-[18px]" viewBox="0 0 18 18" fill="none">
                <path d="M9 2L11.09 6.26L16 7.27L12.5 10.69L13.18 16L9 13.77L4.82 16L5.5 10.69L2 7.27L6.91 6.26L9 2Z" fill="#212121"/>
              </svg>
            </button>
            <button className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] rounded-full border border-[#ebebeb] flex items-center justify-center">
              <svg width="14" height="14" className="md:w-[18px] md:h-[18px]" viewBox="0 0 18 18" fill="none">
                <circle cx="8" cy="8" r="6" stroke="#212121" strokeWidth="1.5"/>
                <path d="M12.5 12.5L15.5 15.5" stroke="#212121" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
            <button className="w-[24px] h-[24px] md:w-[36px] md:h-[36px] rounded-full border border-[#ebebeb] flex items-center justify-center">
              <svg width="14" height="14" className="md:w-[18px] md:h-[18px]" viewBox="0 0 18 18" fill="none">
                <path d="M6 2L6 4M12 2V4M5 8H13M4 16H14C14.5523 16 15 15.5523 15 15V6C15 5.44772 14.5523 5 14 5H4C3.44772 5 3 5.44772 3 6V15C3 15.5523 3.44772 16 4 16Z" stroke="#212121" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-[94px] left-0 right-0 bg-white border-b border-gray-100 shadow-lg z-50">
            <nav className="flex flex-col p-4 gap-2">
              <a href="#" className="px-4 py-3 bg-primary rounded-lg text-text-primary font-medium">Anasayfa</a>
              <a href="#" className="px-4 py-3 hover:bg-gray-50 rounded-lg text-text-primary">Ürünler</a>
              <a href="#" className="px-4 py-3 hover:bg-gray-50 rounded-lg text-text-primary">Alışveriş</a>
              <a href="#" className="px-4 py-3 hover:bg-gray-50 rounded-lg text-text-primary">Referanslar</a>
              <a href="#" className="px-4 py-3 hover:bg-gray-50 rounded-lg text-text-primary">İletişim</a>
            </nav>
          </div>
        )}
      </header>
    </>
  )
}

