'use client';

import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import banner1Image from '../app/assets/banners/banner1.png';
import banner2Image from '../app/assets/banners/banner2.jpg';
import banner3Image from '../app/assets/banners/banner3.jpg';
import { Badge } from './ui/badge';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: true
});

const slides = [
 /* {
    id: 'slide-1',
    color: 'blue' as const,
    badge: 'CyberMonday ✨',
    title: '10% OFF en todos los productos',
    subtitle: '10% OFF en todos los productos',
    buttonLabel: 'Ver productos',
    buttonHref: '/search/mantenimiento-del-agua',
    imageDesktop: banner4Image
  }, */
  {
    id: 'slide-2',
    color: 'blue' as const,
    badge: 'Hasta 40% OFF ✨',
    title: 'DESCUENTAZOS',
    subtitle: 'En productos para piletas',
    buttonLabel: 'Ver productos',
    buttonHref: '/search/mantenimiento-del-agua',
    imageDesktop: banner1Image
  },
  {
    id: 'slide-3',
    color: 'green' as const,
    badge: 'NOVEDADES',
    title: 'Nueva línea HOME',
    subtitle: 'Productos de limpieza para el hogar',
    buttonLabel: 'Ver categorías',
    buttonHref: '/search/limpieza',
    imageDesktop: banner3Image
  },
  {
    id: 'slide-4',
    color: 'green' as const,
    badge: '¿Cuál usar?',
    title: 'CUIDADO DEL AGUA',
    subtitle: 'Respondemos tus consultas con IA',
    buttonLabel: 'Consultar',
    buttonHref: '#ayuda',
    imageDesktop: banner2Image
  }
];

const BannerCarousel = () => {
  return (
    <div className="w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={0}
        slidesPerView={1}
        className="h-[300px] w-full md:h-[600px]"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full overflow-hidden md:h-[600px] md:bg-gradient-to-r md:from-[#fff0eb] md:to-[#addff8]">
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={slide.imageDesktop}
                  alt={slide.title || 'Banner'}
                  className={`inset-y-0 right-0 block h-full w-full object-cover md:absolute ${slide.id !== 'slide-1' && 'opacity-80'} shadow-2xl md:block md:w-1/2`}
                  priority
                />
                {/* Overlay para móviles - más oscuro para mejor legibilidad */}
                <div className="absolute inset-0 bg-black/50 md:hidden"></div>

                {/* Overlay para desktop */}
                <div
                  className={`absolute inset-0 hidden bg-gradient-to-r from-[#fff0eb] via-[#fff0eb]/40 to-transparent md:block ${slide.id === 'slide-3' ? 'from-[#a1c4fd] to-[#2e9fb4]/40' : slide.id === 'slide-1' ? 'from-[#f5f7fa] to-[#c3cfe2]/40' : ''}`}
                ></div>
              </div>

              <div className="relative z-10 flex h-full w-full items-center justify-start md:w-1/2">
                <div className="mx-auto flex h-full flex-col items-center justify-center gap-4 text-left md:items-start">
                  <Badge
                    variant="outline"
                    className="bg-white text-xs font-bold text-primary md:text-2xl md:text-pensok"
                  >
                    {slide.badge}
                  </Badge>

                  <p
                    className={`max-w-[300px] text-center text-2xl font-bold !capitalize leading-[1.1] text-white sm:text-3xl md:max-w-[600px] md:text-left md:text-5xl md:text-pensok`}
                  >
                    {slide.subtitle}
                  </p>

                  <Link
                    href={slide.buttonHref}
                    className="mt-4 flex items-center justify-center gap-2 border-2 border-primary bg-primary px-2 py-2 text-sm font-bold text-white hover:border-pensok hover:bg-pensok md:min-w-60 md:px-6 md:py-4 md:text-xl"
                  >
                    <ArrowTopRightOnSquareIcon className="h-6 w-6" />

                    {slide.buttonLabel}
                    <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
