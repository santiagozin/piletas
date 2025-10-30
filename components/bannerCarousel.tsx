'use client';

import { Button } from '@headlessui/react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import banner1Image from '../app/assets/banners/banner1.png';
import banner2Image from '../app/assets/banners/banner2.jpg';
import banner3Image from '../app/assets/banners/banner3.jpg';
import banner4Image from '../app/assets/promo2.png';
import { Badge } from './ui/badge';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: true
});

const slides = [
  {
    id: 'slide-1',
    color: 'blue' as const,
    badge: 'CyberMonday ✨',
    title: 'Super ofertas',
    subtitle: 'Se viene una semana de descuentos',
    buttonLabel: 'Ver productos',
    buttonHref: '/search/mantenimiento-del-agua',
    imageDesktop: banner4Image
  },
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
    imageDesktop: banner3Image,

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
        className="h-[300px] md:h-[600px] w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-full w-full overflow-hidden md:bg-gradient-to-r md:from-[#fff0eb] md:to-[#addff8] md:h-[600px]">
              <div className="absolute inset-0 h-full w-full">
                <Image
                  src={slide.imageDesktop}
                  alt={slide.title || 'Banner'}
                  className={`block md:absolute inset-y-0 right-0 h-full w-full object-cover ${slide.id !== 'slide-1' && 'opacity-80'} shadow-2xl md:block md:w-1/2`}
                  priority
                />
                {/* Overlay para móviles - más oscuro para mejor legibilidad */}
                <div className="absolute inset-0 bg-black/50 md:hidden"></div>
                
                {/* Overlay para desktop */}
                <div
                  className={`hidden md:block absolute inset-0 bg-gradient-to-r from-[#fff0eb] via-[#fff0eb]/40 to-transparent ${slide.id === 'slide-3' ? 'from-[#a1c4fd] to-[#2e9fb4]/40' : slide.id === 'slide-1' ? 'from-[#f5f7fa] to-[#c3cfe2]/40' : ''}`}
                ></div>
              </div>

              <div className="relative z-10 flex h-full w-full md:w-1/2 items-center justify-start">
                <div className="mx-auto flex h-full flex-col items-center md:items-start justify-center gap-4 text-left">
                  <Badge variant="outline" className="bg-white text-xs md:text-2xl font-bold text-primary md:text-pensok">
                    {slide.badge}
                  </Badge>

                  <p
                    className={`max-w-[300px] text-center md:text-left text-2xl sm:text-3xl md:text-5xl font-bold !capitalize leading-[1.1] text-white md:text-pensok md:max-w-[600px]`}
                  >
                    {slide.subtitle}
                  </p>

                  <Button className="mt-4 flex md:min-w-60 items-center justify-center gap-2 border-2 border-primary bg-primary px-2 md:px-6 md:py-4 py-2 text-sm md:text-xl font-bold text-white hover:border-pensok hover:bg-pensok">
                    {slide.buttonLabel}
                    <ArrowTopRightOnSquareIcon className="h-6 w-6" />
                  </Button>
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
