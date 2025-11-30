'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import bannerHero from '../assets/banner-pileta.jpg';

export default function DynamicHero() {
  const pathname = usePathname();

  const isFiltros = pathname?.startsWith('/search/filtros');
  const isLimpieza = pathname?.startsWith('/search/limpieza');
  const isCloro = pathname?.startsWith('/search/cloro');
  const isPiletas = pathname === '/search' || pathname?.startsWith('/search/quimicos');
  const isAccesorios = pathname?.startsWith('/search/accesorios');

  const banner = bannerHero;

  return (
    <div className="relative flex h-[150px] w-full items-center justify-center overflow-hidden bg-gradient-to-b from-[#a1c4fd] to-[#c2e9fb] md:h-[150px]">
      <h2 className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-pensok">
        {isLimpieza
          ? 'Productos de limpieza y hogar'
          : isCloro
            ? 'Cloro para piletas'
            : isFiltros
              ? 'Productos de filtros'
              : isAccesorios
                ? 'Accesorios para piletas'
                : isPiletas
                  ? 'Mantenimiento del agua'
                  : 'Bombas y repuestos'}
      </h2>
      <Image src={banner} className="h-full w-full object-cover object-center" alt="Banner" />
    </div>
  );
}
