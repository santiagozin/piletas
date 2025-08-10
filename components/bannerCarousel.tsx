'use client';
import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import { SwiperSlide } from 'swiper/react';
import banner1Mobile from '../app/assets/banners/banner1-mobile.png';
import banner1 from '../app/assets/banners/banner1.png';
import banner3Mobile from '../app/assets/banners/banner3-mobile.png';
import banner3 from '../app/assets/banners/banner3.png';
import banner4Mobile from '../app/assets/banners/banner4-mobile.png';
import banner4 from '../app/assets/banners/banner4.png';
import BannerContent from './bannerContent';

const Swiper = dynamic(() => import('swiper/react').then((mod) => mod.Swiper), {
  ssr: true
});

const slides = [
  {
    id: 'slide-1',
    color: 'blue' as const,
    badge: 'Hasta 40% OFF',
    title: 'DESCUENTAZOS',
    subtitle: 'EN PRODUCTOS PARA PILETAS',
    buttonLabel: 'Conocer más',
    buttonHref: '/search/mantenimiento-del-agua',
    imageDesktop: banner1,
    imageMobile: banner1Mobile
  },
  {
    id: 'slide-2',
    color: 'green' as const,
    badge: 'NOVEDADES',
    title: 'Nueva línea HOME',
    subtitle: 'Productos de limpieza para el hogar',
    buttonLabel: 'Ver categorías',
    buttonHref: '/search/limpieza',
    imageDesktop: banner4,
    imageMobile: banner4Mobile
  },
  {
    id: 'slide-3',
    color: 'green' as const,
    badge: '¿Cuál usar?',
    title: 'CUIDADO DEL AGUA',
    subtitle: 'Respondemos tus consultas con IA',
    buttonLabel: 'Consultar',
    buttonHref: '#ayuda',
    imageDesktop: banner3,
    imageMobile: banner3Mobile
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
        className="h-[600px] w-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div className="relative h-[600px] w-full">
              {/* Badge superior centrado */}
              <div className="font-poppins absolute left-1/2 top-6 z-50 -translate-x-1/2 items-center rounded-full bg-white px-4 py-2 text-xl font-medium text-gray-600 shadow-2xl md:top-28 md:flex md:text-3xl">
                {slide.badge}
              </div>

              {/* Contenido unificado */}
              <BannerContent color={slide.color}>
                <h2 className="font-poppins w-full pt-10 text-center text-4xl md:text-6xl font-bold leading-tight text-white">
                  {slide.title}
                </h2>
                <p className="font-poppins mt-4 px-6 md:px-8 text-center text-2xl md:text-4xl font-medium tracking-wide text-white">
                  {slide.subtitle}
                </p>
                <div className="mt-8 md:mt-10 flex w-full justify-center">
                  <Link
                    href={slide.buttonHref}
                    className="font-poppins rounded-lg bg-white px-6 md:px-8 py-3 md:py-3.5 text-xl md:text-2xl font-medium text-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-2xl"
                  >
                    {slide.buttonLabel}
                  </Link>
                </div>
              </BannerContent>

              {/* Imágenes de fondo */}
              <Image
                src={slide.imageDesktop}
                alt={slide.title}
                className="absolute bottom-0 left-0 hidden h-auto w-full md:block"
                priority
              />
              <Image
                src={slide.imageMobile}
                alt={slide.title}
                className="absolute bottom-0 left-0 block h-auto w-full md:hidden"
                priority
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
