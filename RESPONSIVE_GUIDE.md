# 📱 Responsive Tasarım Rehberi

Bu döküman, Fix Relax projesinde kullanılan responsive tasarım yaklaşımını açıklar.

## Breakpoint'ler

Tailwind CSS default breakpoint'lerini kullanıyoruz:

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

## Responsive Stratejiler

### 1. Mobile-First Yaklaşım

Tüm stil tanımlamaları önce mobil için yapılmış, ardından büyük ekranlar için genişletilmiştir.

```tsx
// Mobil önce (default), sonra md (768px+)
<div className="text-[14px] md:text-[16px]">
```

### 2. Koşullu Görünürlük

Bazı elementler sadece belirli ekran boyutlarında görünür:

```tsx
// Mobilde gizli, desktop'ta görünür
<div className="hidden md:block">

// Mobilde görünür, desktop'ta gizli
<div className="md:hidden">
```

### 3. Flex/Grid Düzenleri

Responsive grid ve flex layoutları:

```tsx
// Mobilde dikey, desktop'ta yatay
<div className="flex flex-col md:flex-row">

// Mobilde 2 sütun, desktop'ta 4 sütun
<div className="grid grid-cols-2 lg:grid-cols-4">
```

## Bileşen Bazlı Responsive Örnekler

### Header

- **Mobil**: Hamburger menü, küçük iconlar
- **Desktop**: Tam navigasyon, büyük iconlar

```tsx
// Mobil menü butonu
<button className="md:hidden">☰</button>

// Desktop navigasyon
<nav className="hidden md:flex">
```

### Hero

- **Mobil**: Tek sütun, küçük başlık
- **Desktop**: İki sütun (metin + görsel)

```tsx
<h1 className="text-[36px] md:text-[54px]">
```

### Products Grid

- **Mobil**: 2 sütun
- **Desktop**: 4 sütun

```tsx
<div className="grid grid-cols-2 lg:grid-cols-4">
```

### Footer

- **Mobil**: Dikey stack, ortalanmış
- **Desktop**: Yatay layout

```tsx
<div className="flex flex-col md:flex-row text-center md:text-left">
```

## Padding & Spacing

### Container Padding

```tsx
// Mobil: 16px (px-4), Desktop: 120px
<div className="px-4 md:px-[120px]">
```

### Section Spacing

```tsx
// Mobil: 40px, Desktop: 80px
<section className="py-[40px] md:py-[80px]">
```

## Font Boyutları

| Element | Mobil | Desktop |
|---------|-------|---------|
| H1 | 36px | 54px |
| H2 | 28px | 36-48px |
| Body | 12-14px | 14-16px |
| Small | 10-12px | 11-14px |

## Touch Targets

Mobil cihazlar için minimum dokunma alanları:

- Butonlar: Minimum 44x44px
- Icon butonlar: Minimum 36x36px (mobil), 44x44px (ideal)

```tsx
<button className="w-[24px] h-[24px] md:w-[36px] md:h-[36px]">
```

## Horizontal Scroll

Filtreleme tab'ları gibi elementlerde horizontal scroll kullanıyoruz:

```tsx
<div className="flex overflow-x-auto">
  {tabs.map(tab => (
    <button className="whitespace-nowrap">
      {tab}
    </button>
  ))}
</div>
```

## Test Checklist

Responsive tasarımı test ederken kontrol edilmesi gerekenler:

- [ ] 375px (iPhone SE) - En küçük mobil
- [ ] 768px (iPad Portrait) - Tablet
- [ ] 1024px (iPad Landscape) - Büyük tablet
- [ ] 1440px+ - Desktop

## Yaygın Hatalar ve Çözümleri

### Hata: Mobilde metin taşıyor

```tsx
// ❌ Yanlış
<p className="text-[24px]">

// ✅ Doğru
<p className="text-[18px] md:text-[24px]">
```

### Hata: Grid çok dar

```tsx
// ❌ Yanlış
<div className="grid grid-cols-4">

// ✅ Doğru
<div className="grid grid-cols-2 lg:grid-cols-4">
```

### Hata: Fixed width kullanımı

```tsx
// ❌ Yanlış
<div className="w-[400px]">

// ✅ Doğru
<div className="w-full md:w-[400px]">
```

## Faydalı Tailwind Utility'leri

```tsx
// Conditional text
<span className="hidden sm:inline">Bizi Arayın:</span>

// Max width with full mobile
<div className="w-full md:max-w-[386px]">

// Gap spacing
<div className="gap-[16px] md:gap-[24px]">

// Line clamp
<p className="line-clamp-2 md:line-clamp-none">
```

## Performans İpuçları

1. **Lazy Loading**: Görseller için `loading="lazy"` kullanın
2. **Conditional Rendering**: Gereksiz elementleri `hidden` ile gizlemek yerine conditional rendering kullanın
3. **Optimize Images**: Mobil için küçük, desktop için büyük görseller kullanın

## Kaynaklar

- [Tailwind Responsive Design](https://tailwindcss.com/docs/responsive-design)
- [Figma Dev Mode](https://www.figma.com/design/3gLj0Th7dQED8I7dscSdYL/Fix-Relax)
- [Next.js Image Optimization](https://nextjs.org/docs/app/building-your-application/optimizing/images)

---

**Güncellenme:** 2025-10-16  
**Proje:** Fix Relax Web Sitesi


