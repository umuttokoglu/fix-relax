import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Fix Relax - Bahçenize Konfor, Yaşamınıza Zerafet',
  description: 'Her Parçasına rafine bir zerafetle modern yaşam için tasarlandı. Fix Relax ile açık hava mobilyaları ve gölgelendirme sistemleri.',
  keywords: 'fix relax, açık hava mobilyası, gölgelendirme sistemi, bahçe mobilyası, tente, flexo, luno, solina',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  )
}


