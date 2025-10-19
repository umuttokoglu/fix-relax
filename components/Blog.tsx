'use client'

import Image from 'next/image'

export default function Blog() {
  const blogPosts = [
    {
      title: 'Evinizde Konfor ve Şıklık',
      description: 'Yaşam alanlarımız konforumuzu ve tarzımızı yansıtır; bu yüzden doğru ürün seçimi önemlidir.',
      image: '/images/blog/blog-1.jpg',
    },
    {
      title: 'Evinizde Konfor ve Şıklık',
      description: 'Yaşam alanlarımız konforumuzu ve tarzımızı yansıtır; bu yüzden doğru ürün seçimi önemlidir.',
      image: '/images/blog/blog-1.jpg',
    },
    {
      title: 'Evinizde Konfor ve Şıklık',
      description: 'Yaşam alanlarımız konforumuzu ve tarzımızı yansıtır; bu yüzden doğru ürün seçimi önemlidir.',
      image: '/images/blog/blog-1.jpg',
    },
  ]

  return (
    <section className="w-full bg-white rounded-[24px] p-4 md:p-[96px] my-[24px] md:my-[48px]">
      <div className="max-w-[1392px] mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-[48px]">
          <div>
            <p className="text-[14px] md:text-[16px] text-text-secondary opacity-50 mb-[4px]">
              Güncel İçerikler
            </p>
            <h2 className="text-[32px] md:text-[36px] font-semibold text-text-primary">
              Bloglar
            </h2>
          </div>

          {/* View All Link */}
          <button className="flex items-center gap-[12px] text-text-secondary opacity-50 hover:opacity-100 transition-opacity">
            <span className="text-[16px] font-medium">Tümünü Gör</span>
            <svg width="22" height="8" viewBox="0 0 22 8" fill="none" className="transform rotate-180 scale-y-[-1]">
              <path d="M21 4L17 0.5V3.5H0V4.5H17V7.5L21 4Z" fill="#616161"/>
            </svg>
          </button>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[20px]">
          {blogPosts.map((post, index) => (
            <div 
              key={index}
              className="bg-[#715858] h-[225px] rounded-[16px] overflow-hidden relative group cursor-pointer hover:scale-[1.02] transition-transform"
            >
              <Image 
                src={post.image}
                alt={post.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a1a] to-transparent rounded-[16px]"></div>
              
              <div className="absolute bottom-0 left-0 right-0 p-[24px] z-10">
                <h3 className="text-[20px] font-semibold text-white mb-[8px]">
                  {post.title}
                </h3>
                <p className="text-[14px] text-white/75 leading-normal">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
