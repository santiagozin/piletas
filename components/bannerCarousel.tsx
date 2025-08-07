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
            <div className="font-poppins absolute right-1/4 top-6 z-50 flex items-center rounded-full bg-white px-4 py-2 text-xl font-bold text-blue-600 shadow-2xl md:left-1/2 md:right-auto md:top-32 md:-translate-x-1/2 md:rotate-12 md:text-4xl">
              <span className="mr-2 text-sm font-normal md:text-[20px]">Hasta</span>
              40% OFF
            </div>
            <BannerContent color="blue">
              <h2 className="font-poppins absolute left-1/2 top-1/4 z-50 -translate-x-1/2 border-b border-white text-4xl font-bold leading-tight text-white md:text-6xl">
                DESCUENTAZOS
              </h2>
              <p className="font-poppins absolute bottom-[40%] left-1/2 z-50 w-full -translate-x-1/2 text-center text-3xl font-medium tracking-wide text-white md:bottom-[35%] md:text-4xl md:text-blue-600">
                EN PRODUCTOS PARA PILETAS
              </p>
              <button className="font-poppins absolute bottom-[10%] left-1/2 z-50 -translate-x-1/2 -translate-y-1/2 rounded-lg bg-white px-4 py-2 text-xl font-normal text-blue-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl md:bottom-5 md:text-4xl">
                <Link href="search/mantenimiento-del-agua">Conocer más</Link>
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
          <div className="relative h-[600px] w-full">
            <div className="font-poppins absolute right-[14%] md:right-[37%] top-5 md:top-28 z-50 -translate-x-1/2 items-center rounded-full bg-white px-4 py-2 text-xl font-medium text-gray-600 shadow-2xl md:flex md:text-3xl">
              NOVEDADES
            </div>
            <BannerContent color="green">
              <h2 className="font-poppins hidden w-full text-wrap px-2 pt-10 text-center text-4xl font-bold leading-tight text-white md:block md:pt-20 md:text-6xl">
                Nueva linea <span className="text-amber-100">HOME</span>
              </h2>
              <p className="leading-[1.5] font-poppins absolute bottom-[30%] left-1/2 z-50 w-3/4 -translate-x-1/2 text-center text-4xl md:font-medium font-bold uppercase text-amber-200 md:bottom-[36%] md:text-4xl md:tracking-wide">
                Productos de limpieza <span className="block">para el hogar</span>
              </p>
              <button className="w-[80%] font-poppins absolute bottom-[-45%] left-1/2 z-50 -translate-x-1/2 md:-translate-y-1/2 -translate-y-3/4 rounded-lg bg-primary text-white md:bg-white px-4 py-2 text-2xl font-normal md:text-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl md:bottom-5 md:text-2xl">
                <Link href="search/limpieza">Ver categorías</Link>
              </button>
            </BannerContent>
            <Image
              src={banner4}
              alt="Banner 2"
              className="absolute bottom-[-100px] left-0 h-auto w-full"
              priority
            />
            <Image
              src={banner4Mobile}
              alt="Banner 2"
              className="absolute bottom-[-10rem] left-0 block h-auto w-full md:hidden"
              priority
            />
          </div>
        </SwiperSlide> 
        
        <SwiperSlide>
          <div className="relative h-[600px] w-full ">
            <div className="font-poppins absolute left-[10%] top-10 z-50 flex items-center rounded-full bg-white px-4 py-2 text-2xl font-medium text-gray-600 shadow-2xl md:left-1/2 md:top-32 md:-translate-x-1/2 md:text-3xl">
              No sabes que necesitas?
            </div>
            <div
              className={`absolute left-4 top-36 z-10 h-96 w-full max-w-sm md:max-w-none rounded-xl bg-teal-500 bg-opacity-70 shadow-xl md:left-1/4 md:w-1/2`}
            >
              <h2 className="font-poppins w-full pt-10 text-center text-4xl font-bold leading-tight text-white md:pt-20 md:text-6xl">
                CUIDADO DEL AGUA
              </h2>
              <p className="font-poppins mt-4 px-8 text-center text-3xl font-medium tracking-wide text-cyan-200">
                Te asesoramos con IA como mejorar el cuidado de tu pileta
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
              className="absolute bottom-0 left-0 block h-auto w-full md:hidden "
              priority
            />
            <button className="w-[80%] md:w-auto font-poppins absolute bottom-24 left-1/2 z-50 -translate-x-1/2 rounded-lg bg-white px-4 py-2 text-2xl font-normal text-gray-600 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
              <Link href="#ayuda">Consultar</Link>
            </button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default BannerCarousel;
