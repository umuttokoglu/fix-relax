# Fix Relax - Modern Açık Hava Mobilyası Web Sitesi

Fix Relax, bahçe mobilyaları ve gölgelendirme sistemleri satan modern bir e-ticaret web sitesidir. Bu proje Next.js 14, React 18, TypeScript ve Tailwind CSS kullanılarak geliştirilmiştir.

## 🚀 Özellikler

- ✨ Modern ve responsive tasarım
- 🎨 Tailwind CSS ile özelleştirilebilir stil sistemi
- 📱 Mobil uyumlu arayüz
- ⚡ Next.js 14 App Router ile hızlı performans
- 🔍 SEO dostu yapı
- 🎯 TypeScript ile tip güvenliği

## 📋 Gereksinimler

- Node.js 18.0 veya üzeri
- npm, yarn, veya pnpm paket yöneticisi

## 🛠️ Kurulum

1. Projeyi klonlayın:
```bash
git clone <repository-url>
cd fix-relax
```

2. Bağımlılıkları yükleyin:
```bash
npm install
# veya
yarn install
# veya
pnpm install
```

## 🎯 Çalıştırma

### Development (Geliştirme) Modu

```bash
npm run dev
# veya
yarn dev
# veya
pnpm dev
```

Tarayıcınızda [http://localhost:3000](http://localhost:3000) adresini açın.

### Production (Üretim) Build

```bash
npm run build
npm run start
# veya
yarn build
yarn start
# veya
pnpm build
pnpm start
```

## 📁 Proje Yapısı

```
fix-relax/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Ana sayfa
│   └── globals.css        # Global stiller
├── components/            # React bileşenleri
│   ├── Header.tsx        # Üst başlık ve navigasyon
│   ├── Hero.tsx          # Hero bölümü
│   ├── Categories.tsx    # Kategori kartları
│   ├── Products.tsx      # Ürün listeleme
│   ├── VideoGallery.tsx  # Video galeri
│   ├── Marketplace.tsx   # Pazar yerleri
│   ├── Blog.tsx          # Blog bölümü
│   ├── Quote.tsx         # Alıntı bölümü
│   └── Footer.tsx        # Alt bilgi
├── public/               # Statik dosyalar
│   └── images/          # Görseller
│       ├── categories/  # Kategori görselleri
│       ├── products/    # Ürün görselleri
│       ├── gallery/     # Galeri görselleri
│       ├── blog/        # Blog görselleri
│       └── partners/    # Partner logoları
├── tailwind.config.js   # Tailwind yapılandırması
├── tsconfig.json        # TypeScript yapılandırması
└── package.json         # Proje bağımlılıkları
```

## 🎨 Tasarım Sistemi

### Renkler

- **Primary**: `#cef240` (Lime yeşili)
- **Primary Dark**: `#3f5363` (Koyu mavi gri)
- **Text Primary**: `#212121` (Koyu gri)
- **Text Secondary**: `#616161` (Orta gri)
- **Background Light**: `#f2f4f7` (Açık gri)

### Fontlar

- **Ana Font**: Rethink Sans
- **Vurgu Font**: Sofia (İtalik başlıklar için)

## 📱 Responsive Tasarım

Site tamamen responsive olarak tasarlanmıştır:

- **Mobil** (375px): Tek sütun layout, hamburger menü, 2 sütunlu ürün grid'i
- **Tablet** (768px - 1024px): Hybrid layout geçişleri
- **Desktop** (1024px+): Tam genişlik layout, 4 sütunlu ürün grid'i

### Responsive Özellikler:
- ✅ Mobil hamburger menü
- ✅ Touch-friendly butonlar
- ✅ Responsive grid sistemleri
- ✅ Mobil-optimized font boyutları
- ✅ Yatay scroll tab'ları
- ✅ Koşullu görünürlük (hidden/visible)

## 📸 Görseller Ekleme

Görselleri `public/images/` klasörü altındaki ilgili alt klasörlere ekleyin:

- Kategori görselleri: `public/images/categories/`
- Ürün görselleri: `public/images/products/`
- Galeri görselleri: `public/images/gallery/`
- Blog görselleri: `public/images/blog/`
- Partner logoları: `public/images/partners/`

**Not**: Figma tasarımından görselleri doğrudan export edebilirsiniz.

## 🔧 Özelleştirme

### Renkleri Değiştirme

`tailwind.config.js` dosyasındaki `theme.extend.colors` bölümünü düzenleyin:

```js
colors: {
  primary: '#cef240',
  'primary-dark': '#3f5363',
  // ...
}
```

### Bileşenleri Düzenleme

Her bileşen `components/` klasöründe ayrı dosyalarda bulunur. İstediğiniz bileşeni düzenleyebilirsiniz.

## 📱 Responsive Tasarım

Site aşağıdaki ekran boyutları için optimize edilmiştir:

- 📱 Mobil: 320px - 768px
- 💻 Tablet: 768px - 1024px
- 🖥️ Desktop: 1024px - 1440px+

## 🚀 Deployment

### Vercel (Önerilen)

1. [Vercel](https://vercel.com) hesabınıza giriş yapın
2. "New Project" butonuna tıklayın
3. GitHub repository'nizi seçin
4. Deploy butonuna tıklayın

### Diğer Platformlar

Next.js, birçok platformda deploy edilebilir:
- Netlify
- AWS Amplify
- Digital Ocean
- Heroku

## 📝 Lisans

Bu proje özel bir projedir ve tüm hakları saklıdır.

## 🤝 Katkıda Bulunma

Katkılarınızı bekliyoruz! Pull request göndermekten çekinmeyin.

## 📞 İletişim

Fix Relax - [info@fixrelax.com](mailto:info@fixrelax.com)

Telefon: +90 0532 660 75 23

---

**Not**: Bu proje Figma tasarımından Next.js + Tailwind CSS kullanılarak geliştirilmiştir.

