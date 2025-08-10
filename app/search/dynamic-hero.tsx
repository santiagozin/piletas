"use client";

import Image from 'next/image';
import { usePathname } from 'next/navigation';

import bannerDefault from '../assets/banner-tienda.jpg';
import bannerBombas from '../assets/productos/bombas.png';
import bannerLimpieza from '../assets/tienda/limpieza.jpg';
import bannerPiletas from '../assets/tienda/pileta.jpg';

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
    <div className='h-[150px] md:h-[250px] w-full overflow-hidden relative bg-slate-800 flex justify-center items-center rounded-lg'>
      <h2 className='text-white text-2xl md:text-5xl font-bold z-10'>{isLimpieza ? 'Productos de limpieza' : isPiletas ? 'Productos de pileta' : 'Bombas para pileta'}</h2>
      <Image src={currentBanner} className='absolute bottom-0 md:bottom-[-180px] right-0 left-0 opacity-60 object-cover' alt="Banner" />
    </div>
  );
} 