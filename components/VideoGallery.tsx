'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function VideoGallery() {
  const [selectedVideo, setSelectedVideo] = useState(1)
  
  const videos = [
    {
      title: 'Flexo Serisi',
      thumbnail: '/images/video/raffbare-sonnensegel-main.jpg',
    }
  ]

  const thumbnails = [
    '/images/video/reload-banner-slider.jpg',
    '/images/video/raffbare-sonnensegel-thumb.jpg',
    '/images/video/soliday-lounge.jpg',
    '/images/video/vorhang-referenz-011.jpg',
    '/images/gallery/raffbare-sonnensegel-main.jpg',
  ]

  return (
    <section className="w-full bg-white rounded-[24px] p-4 md:p-[96px] my-[24px] md:my-[48px]">
      <div className="max-w-[1392px] mx-auto">
        {/* Top Section */}
        <div className="flex items-center justify-between mb-[48px]">
          {/* Left - Pagination */}
          <div className="flex items-center gap-[8px]">
            <span className="text-[14px] text-text-secondary opacity-50 font-medium">02  03</span>
            <div className="w-[229px] h-[2px] bg-gray-300"></div>
          </div>

          {/* Right - Badge */}
          <button className="bg-white px-[24px] py-[16px] rounded-full text-[14px] font-semibold text-text-primary w-[40px] h-[40px] flex items-center justify-center border border-gray-200">
            3
          </button>
        </div>

        {/* Title and Description */}
        <div className="flex flex-col md:flex-row items-start justify-between mb-[48px] gap-[24px]">
          <h2 className="text-[32px] md:text-[36px] font-semibold text-text-primary">
            Yakından Tanıyın
          </h2>
          
          <p className="text-[14px] md:text-[16px] text-text-secondary max-w-[448px] md:text-right">
            Videolarımızla ürünleri sadece görmekle kalmayın; detaylarını, kullanım rahatlığını ve yaşam alanınıza katacağı şıklığı da keşfedin.
          </p>
        </div>

        {/* Video Gallery */}
        <div className="flex flex-col md:flex-row gap-[20px]">
          {/* Main Video Display */}
          <div className="flex-1 bg-[rgba(255,255,255,0.08)] h-[400px] md:h-[530px] rounded-[12px] overflow-hidden relative group cursor-pointer">
            <Image 
              src={videos[selectedVideo === 1 ? 0 : 0].thumbnail}
              alt="Flexo Serisi"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-text-primary/80 via-transparent to-transparent"></div>
            
            {/* Share Icon */}
            <button className="absolute top-4 right-4 w-[16px] h-[16px] opacity-80 hover:opacity-100 transition-opacity z-20">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M8.5 1.5L12.5 5.5M12.5 5.5L8.5 9.5M12.5 5.5H3.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M4.5 11.5V13C4.5 13.8284 5.17157 14.5 6 14.5H13C13.8284 14.5 14.5 13.8284 14.5 13V5.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Play Button */}
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[60px] h-[60px] bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/30 transition-colors z-10">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M8 5V19L19 12L8 5Z" fill="white"/>
              </svg>
            </div>

            {/* Title */}
            <h3 className="absolute left-[36px] bottom-[60px] text-[36px] md:text-[48px] font-bold text-white z-10">
              Flexo Serisi
            </h3>
          </div>

          {/* Thumbnail Sidebar */}
          <div className="flex md:flex-col gap-[15px] overflow-x-auto md:overflow-visible pb-2 md:pb-0">
            {thumbnails.map((thumb, index) => (
              <div
                key={index}
                onClick={() => setSelectedVideo(index)}
                className={`min-w-[100px] w-[100px] md:min-w-[120px] md:w-[120px] h-[75px] md:h-[90px] rounded-[8px] overflow-hidden cursor-pointer transition-all relative ${
                  index === selectedVideo ? 'ring-4 ring-primary' : 'opacity-80 hover:opacity-100'
                }`}
              >
                <Image 
                  src={thumb}
                  alt={`Video ${index + 1}`}
                  fill
                  className="object-cover"
                />
                {index === selectedVideo && (
                  <div className="absolute inset-0 bg-primary/50 border-4 border-primary"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
