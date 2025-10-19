'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function Products() {
  const [activeFilter, setActiveFilter] = useState('Keşfet')
  
  const products = [
    {
      category: 'SOLINA',
      name: 'Solina Perde 200x260 cm – Karartma Özellikli, Modern Tasarım',
      price: 19500,
      oldPrice: 21000,
      badge: 'En Çok Satan',
      badgeColor: 'bg-red-500',
      isNew: false,
      discount: 0,
      image: '/images/products/vorhang-referenz-010.jpg'
    },
    {
      category: 'FLEXO',
      name: 'Beyaz Flexo Tente 4x3 m – Su Geçirmez Kumaş, UV Koruması',
      price: 19500,
      oldPrice: 21000,
      badge: 'Yeni',
      badgeColor: 'bg-primary',
      isNew: true,
      discount: 10,
      image: '/images/products/raff-referenzen-001.jpg'
    },
    {
      category: 'SUNSAIL FIX',
      name: 'SUNSAIL FIX 4x4 m – Rüzgâr Dayanımlı, Nefes Alabilir Kumaş',
      price: 19500,
      oldPrice: 21000,
      badge: 'Yeni',
      badgeColor: 'bg-primary',
      isNew: true,
      discount: 10,
      image: '/images/products/reload-outdoormoebel.jpg'
    },
    {
      category: 'LUNO',
      name: 'Luno Koltuk 180 cm – Geniş Oturum, Modern Tasarım',
      price: 19500,
      oldPrice: 21000,
      badge: null,
      badgeColor: '',
      isNew: false,
      discount: 10,
      image: '/images/gallery/soliday-lounge.jpg'
    }
  ]

  return (
    <section className="w-full bg-white rounded-[24px] p-4 md:p-[96px] my-[24px] md:my-[48px]">
      <div className="max-w-[1392px] mx-auto">
        {/* Section Header */}
        <div className="mb-[48px]">
          <div className="flex items-center justify-between mb-[32px]">
            <div>
              <div className="flex items-center gap-[8px] mb-[24px]">
                <span className="text-[14px] text-text-secondary opacity-20">01</span>
                <div className="w-[104px] h-[1px] bg-gray-200"></div>
                <button className="bg-white border border-text-primary px-[24px] py-[16px] rounded-full text-[14px] font-semibold text-text-primary w-[40px] h-[40px] flex items-center justify-center">
                  2
                </button>
                <div className="w-[220px] h-[2px] bg-gray-300"></div>
                <span className="text-[14px] text-text-secondary">03</span>
              </div>
              
              <div className="mb-[32px]">
              <h2 className="text-[28px] md:text-[36px] font-semibold text-text-primary mb-[8px]">
                Ürünler
              </h2>
              <p className="text-[14px] md:text-[16px] text-text-secondary max-w-[386px]">
                Zamansız İşçiliği, Konforu ve güzelliği harmanalayan,
              </p>
              </div>
            </div>

            <div className="text-right max-w-[387px]">
              <p className="text-[24px] text-text-secondary/50">
                <span className="text-text-primary font-medium">Modern</span> yaşam için özenle işlenmiş{' '}
                <span className="text-text-primary font-medium">ayrıcalıklı</span> dokunuşlar.
              </p>
            </div>
          </div>

               {/* Filter Tabs */}
               <div className="flex items-center gap-[8px] md:gap-[14px] mb-[32px] overflow-x-auto pb-2">
                 {['Keşfet', 'Flexo', 'Luno', 'Relax Lounge', 'Solina', 'Sunsail Fix'].map((filter) => (
                   <button
                     key={filter}
                     onClick={() => setActiveFilter(filter)}
                     className={`px-[16px] md:px-[24px] py-[8px] md:py-[10px] rounded-full text-[12px] md:text-[14px] whitespace-nowrap transition-all ${
                       activeFilter === filter
                         ? 'bg-primary border border-primary font-semibold text-text-primary'
                         : 'border border-text-secondary/50 text-text-secondary opacity-50 hover:opacity-100'
                     }`}
                   >
                     {filter}
                   </button>
                 ))}
               </div>
        </div>

               {/* Products Grid */}
               <div className="grid grid-cols-2 lg:grid-cols-4 gap-[16px] md:gap-[24px] mb-[48px]">
                 {products
                   .filter(product => 
                     activeFilter === 'Keşfet' || 
                     product.category.toLowerCase().replace(' ', '-') === activeFilter.toLowerCase().replace(' ', '-')
                   )
                   .map((product, index) => (
            <div key={index} className="bg-[#f9f9f9] rounded-[24px] overflow-hidden">
              {/* Product Image */}
              <div className="relative bg-white h-[112px] md:h-[200px] m-[10px] md:m-[16px] rounded-[16px] overflow-hidden">
                <Image 
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-cover"
                />
                
                {/* Badges */}
                {product.badge && (
                  <div className={`absolute top-0 left-0 ${product.badgeColor} text-white px-[12px] py-[6px] rounded-br-[8px] text-[10px] md:text-[12px] font-medium`}>
                    {product.badge}
                  </div>
                )}
                {product.isNew && !product.badge && (
                  <div className="absolute top-[8px] left-[8px] bg-primary text-primary-dark px-[6px] py-[6px] rounded-full text-[8px] md:text-[10px] font-medium w-[24px] h-[24px] md:w-[28px] md:h-[28px] flex items-center justify-center">
                    Yeni
                  </div>
                )}
                {product.discount > 0 && !product.badge && (
                  <div className="absolute top-[40px] left-[8px] bg-red-500 text-white px-[6px] py-[6px] rounded-full text-[8px] md:text-[10px] font-medium w-[24px] h-[24px] md:w-[28px] md:h-[28px] flex items-center justify-center">
                    %{product.discount}
                  </div>
                )}
              </div>

              {/* Product Info */}
              <div className="p-[10px] md:p-[16px] pt-[8px]">
                <p className="text-[12px] md:text-[14px] text-text-secondary opacity-50 mb-[2px] font-medium">
                  {product.category}
                </p>
                <h3 className="text-[12px] md:text-[16px] font-medium text-text-primary mb-[12px] leading-normal capitalize line-clamp-2 md:line-clamp-none">
                  {product.name}
                </h3>
                
                <div className="border-t border-gray-200 pt-[12px] flex items-end justify-between">
                  <div>
                    <p className="text-[20px] md:text-[24px] font-semibold text-text-primary">
                      {product.price.toLocaleString('tr-TR')}₺
                    </p>
                    <p className="text-[12px] md:text-[14px] text-text-secondary/50 line-through">
                      {product.oldPrice.toLocaleString('tr-TR')}₺
                    </p>
                  </div>
                  <button className="bg-primary-dark rounded-full w-[24px] h-[24px] md:w-[36px] md:h-[36px] flex items-center justify-center hover:bg-primary-dark/90 transition-colors">
                    <svg width="15" height="15" className="md:w-[20px] md:h-[20px]" viewBox="0 0 20 20" fill="none">
                      <path d="M5 10H15M10 5V15" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="flex justify-center">
          <button className="bg-text-primary text-white px-[24px] py-[16px] rounded-full flex items-center gap-[12px] font-medium hover:bg-text-primary/90 transition-colors">
            Tümünü Gör
            <div className="bg-white rounded-full w-[32px] h-[32px] flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M5 15L15 5M15 5H7M15 5V13" stroke="#212121" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
