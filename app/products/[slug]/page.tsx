import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ProductDetail from '@/components/ProductDetail'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
      noimageindex: true,
      'max-video-preview': -1,
      'max-image-preview': 'none',
      'max-snippet': -1,
    },
  },
}

export default function ProductPage({ params }: { params: { slug: string } }) {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <ProductDetail slug={params.slug} />
      <div className="max-w-[1440px] mx-auto px-[24px] mt-12 md:mt-16">
        <Footer />
      </div>
    </main>
  )
}

