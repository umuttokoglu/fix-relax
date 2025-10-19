import Header from '@/components/Header'
import Hero from '@/components/Hero'
import Quote from '@/components/Quote'
import Categories from '@/components/Categories'
import Products from '@/components/Products'
import VideoGallery from '@/components/VideoGallery'
import Partners from '@/components/Partners'
import Blog from '@/components/Blog'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Quote />
      <div className="max-w-[1440px] mx-auto px-[24px]">
        <Categories />
        <Products />
        <VideoGallery />
        <Partners />
        <Blog />
        <Footer />
      </div>
    </main>
  )
}

