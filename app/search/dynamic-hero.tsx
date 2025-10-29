'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import bannerDefault from '../assets/banner-tienda.jpg';
import bannerBombas from '../assets/productos/bombas.png';
import bannerLimpieza from '../assets/tienda/limpieza-banner.png';
import bannerPiletas from '../assets/tienda/productos-pileta.png';

export default function DynamicHero() {
  const pathname = usePathname();

  const isBombas = pathname?.startsWith('/search/bombas');
  const isLimpieza = pathname?.startsWith('/search/limpieza');
  const isPiletas = pathname === '/search' || pathname?.startsWith('/search/piletas');

  const currentBanner = isBombas
    ? bannerBombas
    : isLimpieza
      ? bannerLimpieza
      : isPiletas
        ? bannerPiletas
        : bannerDefault;

  return (
    <div className="relative flex h-[150px] w-full items-center justify-center overflow-hidden rounded-lg bg-gradient-to-b from-[#a1c4fd] to-[#c2e9fb] md:h-[250px]">
      <h2 className="z-10 text-2xl font-bold text-pensok md:text-5xl">
        {isLimpieza
          ? 'Productos de limpieza y hogar'
          : isPiletas
            ? 'Productos para Piletas'
            : 'Bombas y repuestos'}
      </h2>
      <Image
        src={currentBanner}
        className={`absolute bottom-0 ${isPiletas ? 'left-[-10%] bottom-[-30px]' : !isLimpieza ? 'md:bottom-[-20%] left-0' : 'md:bottom-0 left-0'} right-0 opacity-60 ${isLimpieza ? 'max-w-[600px]' : isPiletas ? 'w-[900px]' : 'max-w-[350px]'}`}
        alt="Banner"
      />
    </div>
  );
}
