export default function Quote() {
  return (
    <section className="w-full bg-white py-0 md:py-[72px]">
      <div className="max-w-[1440px] mx-auto px-4 md:px-[120px]">
        {/* Mobile Version - Centered Quote */}
        <div className="md:hidden flex items-center justify-center min-h-[195px] py-[32px]">
          <div className="text-center max-w-[311px] relative">
            <p className="text-[24px] text-text-secondary/50 leading-normal font-semibold">
              ''Her Parçasına <span className="font-medium text-text-primary">rafine</span> bir <span className="font-medium text-text-primary">zerafetle modern</span> yaşam için tasarlandı''
            </p>
            
            {/* Decorative underline - centered for mobile */}
            <div className="mx-auto mt-[24px] w-[139px] h-[18px] bg-primary rounded-full"></div>
          </div>
        </div>

        {/* Desktop Version - Two Column Layout */}
        <div className="hidden md:flex flex-row items-start justify-between gap-[48px]">
          {/* Left Content */}
          <div className="flex-1 max-w-[386px]">
            <h2 className="text-[36px] font-semibold text-text-primary mb-[12px] leading-tight">
              Yaşamınıza Konfor Katın
            </h2>
            <p className="text-[16px] text-text-secondary leading-normal">
              Zamansız İşçiliği, Konforu ve güzelliği harmanalayan, Özenle hazırlanmış ürünlerimizi keşfedin
            </p>
          </div>

          {/* Right Content - Quote */}
          <div className="flex-1 max-w-[387px] text-right relative">
            <p className="text-[24px] text-text-secondary/50 leading-normal">
              ''Her Parçasına <span className="font-medium text-text-primary">rafine</span> bir <span className="font-medium text-text-primary">zerafetle modern</span> yaşam için tasarlandı''
            </p>
            
            {/* Decorative underline */}
            <div className="absolute bottom-[-12px] right-0 w-[120px] h-[2px] bg-primary"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

