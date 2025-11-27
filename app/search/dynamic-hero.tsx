'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import bannerHero from '../assets/banner-pileta.jpg';

export default function DynamicHero() {
  const pathname = usePathname();

  const isBombas = pathname?.startsWith('/search/bombas');
  const isLimpieza = pathname?.startsWith('/search/limpieza');
  const isPiletas = pathname === '/search' || pathname?.startsWith('/search/piletas');

  const banner = bannerHero;

  return (
    <div className="relative flex h-[150px] w-full items-center justify-center overflow-hidden  bg-gradient-to-b from-[#a1c4fd] to-[#c2e9fb] md:h-[150px]">
      <h2 className="z-10 text-4xl font-bold text-pensok absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
      {isLimpieza ? 'Productos de limpieza y hogar' : isPiletas ? 'Mantenimiento del agua' : 'Bombas y repuestos'}
      </h2>
      <Image
        src={banner}
        className='w-full h-full object-cover object-center'
        alt="Banner"
      />
    </div>
  );
}
