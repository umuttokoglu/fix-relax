'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ProductDetailProps {
  slug: string
}

export default function ProductDetail({ slug }: ProductDetailProps) {
  const [activeImage, setActiveImage] = useState(0)
  const [activeAccordion, setActiveAccordion] = useState<string | null>(null)

  // Mock product data - gerçek uygulamada API'den gelecek
  const product = {
    name: 'Flexo',
    title: 'Yaşamınıza Konfor Katın',
    description: 'Zarafet ve şıklığı, konforu ve güzelliği harmanlayan. Özenle hazırlanmış ürünlerimizi keşfedin.',
    mainImage: '/images/hero/raffbare-sonnensegel.jpg',
    gallery: [
      '/images/gallery/soliday-lounge.jpg',
      '/images/products/raff-referenzen-001.jpg',
      '/images/products/reload-outdoormoebel.jpg',
      '/images/hero/raffbare-sonnensegel.jpg',
      '/images/categories/marley-referenzen.jpg'
    ],
    features: {
      title: 'Su Geçirmez Kumaş Teknolojisi',
      description: 'Fix Relax tenteler, özel olarak geliştirilmiş, yüksek yoğunluklu su geçirmez kumaş yapısı sayesinde en ağır yağış koşullarına karşı tam koruma sağlar. Detay doktaları ve takviyeler üzerine, su tutma karakterini en üst düzeyde geliştirir.',
      additionalInfo: 'Bu sayede yağmurun havalarda bile açık aşan korfor ile kurumuştan oluşunuzda, sopayanızın ve mekanlarınızın tam olma alana sikilli siniz.',
      images: [
        '/images/categories/vorhang-referenz-005.jpg',
        '/images/products/vorhang-referenz-010.jpg',
        '/images/categories/marley-referenzen.jpg'
      ]
    },
    specifications: {
      title: 'Beyaz Flexo Tente 4x3 m – Su Geçirmez Kumaş, UV Koruması',
      features: [
        {
          icon: '✓',
          title: 'Esneyerek ve Su Geçirmez Kumaş',
          description: 'Yüksek kaliteli, esnek kumaş yapısı sayesinde su yağışlarda en iyi korumayı sağlar. Ana özellik tüh, sağlam koku güverci elastıklık detayları ile rüzgara hazırlanır, kaymanlar ve kaçaklar gibi çerin şekilde davereler.'
        },
        {
          icon: '✓',
          title: 'Sağlam ve Esnek Yapı',
          description: 'Galvanizli çelik konstrüksiyon ve dayanıklı alüminyum profiller sayesinde uzun ömürlü kullanım sağlar. Hafif ancak sağlam yapısı, kolay montaj ve demontaj imkanı sunarken, esnek tasarımı sayesinde farklı kullanım alanlarına uyum gösterir.'
        }
      ]
    },
    accordion: [
      {
        id: 'kargo',
        title: 'Kargo',
        content: 'Fix Relax ürünleri müşterilerimize en konforlu hale getirmek için hızlı kargo ile teslim edilir. Siparişleriniz özenle paketlenir ve güvenli bir şekilde adresinize ulaştırılır.'
      },
      {
        id: 'siparis',
        title: 'Siparişinizin güncel durumu ile en kısa sürede ulaşacak deneyim',
        content: 'Siparişinizin güncel durumunu ile en kısa sürede ulaşacak deneyim. Ürünleriniz güvenle paketlenir ve, ödeme ve kargo süreçlerimiz için müşteri memnuniyetini koruyoruz.'
      },
      {
        id: 'montaj',
        title: 'Montaj Kılavuzunu İndirin',
        content: 'Ürününüzün montajını kolayca yapabilmeniz için detaylı montaj kılavuzumuzu PDF formatında indirebilirsiniz. Adım adım görsellerle desteklenen kılavuzumuz sayesinde kurulum işleminiz hızlı ve sorunsuz gerçekleşecektir.'
      },
      {
        id: 'iade',
        title: 'İade ve Değişim Koşulları',
        content: 'Satın aldığınız ürünü teslim tarihinden itibaren 14 gün içerisinde iade edebilir veya değiştirebilirsiniz. Ürünün kullanılmamış ve orijinal ambalajında olması gerekmektedir. İade ve değişim işlemleri için müşteri hizmetlerimizle iletişime geçebilirsiniz.'
      }
    ]
  }

  const categories = [
    { id: 'flexo', name: 'FLEXO', active: slug === 'flexo' },
    { id: 'relax-lounge', name: 'RELAX LOUNGE', active: slug === 'relax-lounge' },
    { id: 'luno', name: 'LUNO', active: slug === 'luno' },
    { id: 'solina', name: 'SOLINA', active: slug === 'solina' },
    { id: 'sunsail-fix', name: 'SUNSAIL FIX', active: slug === 'sunsail-fix' }
  ]

  return (
    <div className="w-full">
      {/* Breadcrumb */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[120px] py-4 md:py-6">
        <div className="flex items-center gap-2 text-[14px]">
          <a href="/" className="text-text-secondary hover:text-text-primary transition-colors">Anasayfa</a>
          <span className="text-text-secondary">/</span>
          <span className="text-text-primary font-medium">Ürünler</span>
        </div>
      </div>

      {/* Categories */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[120px] mb-8 md:mb-12">
        <h2 className="text-[32px] md:text-[48px] font-bold text-text-primary mb-6 md:mb-8">Ürünler</h2>
        <div className="flex gap-3 md:gap-4 overflow-x-auto pb-2 scrollbar-hide">
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`/products/${cat.id}`}
              className={`flex items-center gap-3 px-4 md:px-6 py-3 md:py-4 rounded-[12px] whitespace-nowrap transition-all ${
                cat.active
                  ? 'bg-primary shadow-md'
                  : 'bg-bg-light hover:bg-primary/50'
              }`}
            >
              <div className="w-[40px] h-[40px] md:w-[48px] md:h-[48px] rounded-[8px] bg-white overflow-hidden">
                <Image
                  src={`/images/products/dropdown/${cat.id}.jpg`}
                  alt={cat.name}
                  width={48}
                  height={48}
                  className="object-cover w-full h-full"
                />
              </div>
              <span className="text-[14px] md:text-[16px] font-semibold text-text-primary">{cat.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Product Hero Slider */}
      <div className="max-w-[1440px] mx-auto px-[24px] mb-12 md:mb-16">
        {/* Slider Container - 1392x800px */}
        <div className="relative w-full h-[500px] md:h-[800px] rounded-[24px] overflow-hidden">
          {/* Background Image - Full Cover */}
          <div className="absolute inset-0">
            <Image
              src={product.gallery[activeImage]}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Black Overlay with Transparent Center (997x500px with rounded corners) */}
          <div className="absolute inset-0 pointer-events-none">
            {/* Mobile SVG Mask */}
            <svg className="md:hidden absolute inset-0 w-full h-full" viewBox="0 0 375 500" preserveAspectRatio="none">
              <defs>
                <mask id="transparentMaskMobile">
                  <rect width="100%" height="100%" fill="white" />
                  <rect 
                    x="47.5"
                    y="156"
                    width="280"
                    height="270"
                    rx="24"
                    ry="24"
                    fill="black"
                  />
                </mask>
              </defs>
              <rect 
                width="100%" 
                height="100%" 
                fill="rgba(0, 0, 0, 0.5)" 
                mask="url(#transparentMaskMobile)"
              />
            </svg>

            {/* Desktop SVG Mask */}
            <svg className="hidden md:block absolute inset-0 w-full h-full" viewBox="0 0 1392 800" preserveAspectRatio="none">
              <defs>
                <mask id="transparentMaskDesktop">
                  <rect width="100%" height="100%" fill="white" />
                  <rect 
                    x="197.5"
                    y="220"
                    width="997"
                    height="500"
                    rx="24"
                    ry="24"
                    fill="black"
                  />
                </mask>
              </defs>
              <rect 
                width="100%" 
                height="100%" 
                fill="rgba(0, 0, 0, 0.5)" 
                mask="url(#transparentMaskDesktop)"
              />
            </svg>
          </div>

          {/* Content Container */}
          <div className="relative z-10 h-full flex flex-col">
            {/* Top Section - Title & Button (on black overlay, above transparent area) */}
            <div className="pt-[40px] md:pt-[80px] px-[24px] flex justify-center mb-[16px] md:mb-0">
              <div className="w-full md:w-[997px] flex flex-col items-center md:flex-row md:justify-between md:items-start gap-3 md:gap-8">
                {/* Left: Title & Description */}
                <div className="max-w-[280px] md:max-w-[500px] text-center md:text-left">
                  <h2 className="text-[18px] md:text-[32px] font-bold text-white mb-1 md:mb-2 leading-tight">
                    {product.title}
                  </h2>
                  <p className="text-[10px] md:text-[14px] text-white/70 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                {/* Right: Buy Button */}
                <button className="bg-primary hover:bg-primary/90 text-text-primary px-5 md:px-8 py-2 md:py-4 rounded-full font-semibold text-[12px] md:text-[16px] transition-colors whitespace-nowrap shrink-0">
                  Şimdi Satın Al
                </button>
              </div>
            </div>

            {/* Spacer to push thumbnails to bottom */}
            <div className="flex-1"></div>

            {/* Bottom Section - Navigation & Thumbnails (below transparent area) */}
            <div className="pb-[20px] md:pb-[60px] px-[24px] pt-[16px] md:pt-0">
              <div className="flex items-center justify-center gap-2 md:gap-4">
                {/* Left Arrow - Desktop Only */}
                <button 
                  onClick={() => setActiveImage(activeImage === 0 ? product.gallery.length - 1 : activeImage - 1)}
                  className="hidden md:flex bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full w-[40px] h-[40px] items-center justify-center transition-colors shrink-0"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M12 16L6 10L12 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>

                {/* Thumbnails */}
                <div className="flex gap-[6px] md:gap-3 overflow-x-auto scrollbar-hide justify-center">
                  {product.gallery.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`w-[50px] h-[38px] md:w-[100px] md:h-[75px] rounded-[8px] md:rounded-[8px] overflow-hidden shrink-0 border-2 transition-all ${
                        activeImage === index
                          ? 'border-primary scale-105 opacity-100'
                          : 'border-white/30 hover:border-white/50 opacity-60 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={img}
                        alt={`Gallery ${index + 1}`}
                        width={100}
                        height={75}
                        className="object-cover w-full h-full"
                      />
                    </button>
                  ))}
                </div>

                {/* Right Arrow - Desktop Only */}
                <button 
                  onClick={() => setActiveImage(activeImage === product.gallery.length - 1 ? 0 : activeImage + 1)}
                  className="hidden md:flex bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full w-[40px] h-[40px] items-center justify-center transition-colors shrink-0"
                >
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M8 16L14 10L8 4" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Product Features */}
      <div className="max-w-[1440px] mx-auto px-4 md:px-[120px] mb-12 md:mb-16">
        <div className="border-l-4 border-primary pl-4 md:pl-6 mb-8 md:mb-12">
          <h3 className="text-[24px] md:text-[32px] font-bold text-text-primary">Ürün Özellikleri</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-12">
          {/* Feature Image */}
          <div className="bg-gray-800 rounded-[16px] overflow-hidden aspect-[4/3]">
            <Image
              src={product.features.images[0]}
              alt={product.features.title}
              width={600}
              height={450}
              className="object-cover w-full h-full"
            />
          </div>

          {/* Feature Content */}
          <div>
            <h4 className="text-[20px] md:text-[24px] font-bold text-text-primary mb-4">
              {product.features.title}
            </h4>
            <p className="text-[14px] md:text-[16px] text-text-secondary leading-relaxed mb-4">
              {product.features.description}
            </p>
            <p className="text-[14px] md:text-[16px] text-text-secondary leading-relaxed">
              {product.features.additionalInfo}
            </p>

            {/* Feature Gallery */}
            <div className="grid grid-cols-3 gap-3 mt-6">
              {product.features.images.map((img, index) => (
                <div key={index} className="aspect-square rounded-[12px] overflow-hidden">
                  <Image
                    src={img}
                    alt={`Feature ${index + 1}`}
                    width={200}
                    height={200}
                    className="object-cover w-full h-full hover:scale-110 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Specifications & Accordion Section - Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {/* Left: Specifications */}
          <div>
            <div className="bg-bg-light rounded-[16px] p-6 md:p-8 mb-6">
              <h4 className="text-[18px] md:text-[22px] font-bold text-text-primary mb-6">
                {product.specifications.title}
              </h4>
              <div className="space-y-6">
                {product.specifications.features.map((feature, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center shrink-0 mt-1">
                      <span className="text-text-primary font-bold text-[14px]">{feature.icon}</span>
                    </div>
                    <div>
                      <h5 className="text-[16px] font-semibold text-text-primary mb-2">
                        {feature.title}
                      </h5>
                      <p className="text-[14px] text-text-secondary leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button className="flex items-center gap-2 text-[14px] text-text-secondary hover:text-text-primary transition-colors">
              <span>daha fazla</span>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8 12L8 4M8 4L4 8M8 4L12 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>

          {/* Right: Accordion */}
          <div>
            <div className="space-y-4">
              {product.accordion.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-200 rounded-[12px] overflow-hidden"
                >
                  <button
                    onClick={() => setActiveAccordion(activeAccordion === item.id ? null : item.id)}
                    className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                  >
                    <span className="text-[16px] font-semibold text-text-primary text-left">
                      {item.title}
                    </span>
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      className={`transition-transform ${
                        activeAccordion === item.id ? 'rotate-180' : ''
                      }`}
                    >
                      <path
                        d="M5 7.5L10 12.5L15 7.5"
                        stroke="#212121"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  {activeAccordion === item.id && (
                    <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                      <p className="text-[14px] text-text-secondary leading-relaxed">
                        {item.content}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

