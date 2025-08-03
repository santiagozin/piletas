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
        <SwiperSlide>
          <div className="relative h-[600px] w-full">
            <div className="absolute md:left-1/2 right-0 md:right-auto top-4 md:top-32 z-50  flex md:-translate-x-1/2 rotate-12 items-center rounded-full bg-white px-4 py-2 font-poppins text-xl md:text-4xl font-bold text-blue-600 shadow-2xl">
              <span className="mr-2 text-sm md:text-[20px] font-normal">Hasta</span>
              40% OFF
            </div>
            <BannerContent color="blue">
              <h2 className="absolute left-1/2 top-1/4 z-50 -translate-x-1/2 font-poppins text-4xl md:text-6xl font-bold leading-tight text-white border-b border-white">
                DESCUENTAZOS
              </h2>
              <p className="absolute bottom-[37%] md:bottom-[35%] left-1/2 z-50 -translate-x-1/2 text-center font-poppins text-2xl md:text-4xl font-medium tracking-wide md:text-blue-600 text-white">
                EN PRODUCTOS PARA PILETAS
              </p>
              <button className="absolute bottom-0 md:bottom-5 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-4 py-2 font-poppins text-2xl md:text-4xl font-normal text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Link href="search/mantenimiento-del-agua">
                  Conocer más
                </Link>
              </button>
            </BannerContent>
            <Image
              src={banner1}
              alt="Banner 1"
              className="absolute bottom-0 left-0 hidden h-auto w-full md:block"
              priority
            />
            <Image
              src={banner1Mobile}
              alt="Banner 1"
              className="absolute bottom-0 left-0 block h-auto w-full md:hidden"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[600px] w-full ">
            <div className="hidden md:flex absolute right-[37%] top-28 z-50  -translate-x-1/2 items-center rounded-full bg-white px-4 py-2 font-poppins text-3xl font-medium text-gray-600 shadow-2xl">
              NOVEDADES
            </div>
            <BannerContent color="green">
              <h2 className="w-full pt-10 md:pt-20 text-center font-poppins text-4xl md:text-6xl font-bold leading-tight text-white">
                Nueva linea <span className='text-amber-100'>HOME</span>
              </h2>
              <p className="w-3/4 absolute bottom-[36%] md:bottom-[35%] left-1/2 z-50 -translate-x-1/2 text-center font-poppins text-2xl md:text-4xl font-medium md:tracking-wide text-amber-200">
                Productos de limpieza <span className='block'>para el hogar</span>
              </p>
              <button className="absolute bottom-5 left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-4 py-2 font-poppins text-2xl font-normal text-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <Link href="search/limpieza">
                  Ver categorías
                </Link>
              </button>
            </BannerContent>
            <Image
              src={banner4}
              alt="Banner 2"
              className="absolute left-0 bottom-[-100px] h-auto w-full"
              priority
            />
            <Image
              src={banner4Mobile}
              alt="Banner 2"
              className="absolute left-0 bottom-[-10rem] block h-auto w-full md:hidden"
              priority
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative h-[600px] w-full">
            <div className="absolute left-1/4 md:left-1/2 top-10 md:top-32 z-50 flex md:-translate-x-1/2 items-center rounded-full bg-white px-4 py-2 font-poppins text-3xl font-medium text-gray-600 shadow-2xl">
              Te ayudamos
            </div>
            <div
              className={`absolute left-0 md:left-1/4 top-36 z-10 h-96 w-full md:w-1/2 rounded-xl bg-teal-500 bg-opacity-70 shadow-xl`}
            >
              <h2 className="w-full pt-10 md:pt-20 text-center font-poppins text-4xl md:text-6xl font-bold leading-tight text-white">
                CUIDADO DEL AGUA
              </h2>
              <p className="mt-4 px-8 text-center font-poppins text-4xl font-medium tracking-wide text-cyan-200">
                Te asesoramos como mejorar el cuidado de tu pileta
              </p>
            </div>
            <Image
              src={banner3}
              alt="Banner 3"
              className="absolute bottom-0 left-0 hidden h-auto w-full md:block"
              priority
            />
            <Image
              src={banner3Mobile}
              alt="Banner 3"
              className="absolute bottom-0 left-0 block h-auto w-full md:hidden"
              priority
            />
            <button className="absolute bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-white px-4 py-2 font-poppins text-2xl font-normal text-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
            <Link href="#ayuda">  
             Consultar
            </Link>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
