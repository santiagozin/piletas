'use client';

import { RiBox1Fill, RiMapPin2Fill, RiPhoneFill, RiTimeFill } from '@remixicon/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FaGoogle, FaInstagram } from 'react-icons/fa';
import Tienda from '../app/assets/tienda.jpg';
const ContentAbout = () => {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-[fadeIn_1s_ease-in]');
          } else {
            entry.target.classList.remove('animate-[fadeIn_1s_ease-in]');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="mb-20 px-10">
      <div className="mt-10 flex gap-2">
        <RiBox1Fill className="text-primary mt-1 h-10 w-10" />
        <h2 className="text-title-section">Conoce más sobre nosotros</h2>
      </div>
      <p className="mt-2 text-xl text-gray-500 md:text-2xl">
        Estamos en la zona de Pilar, Vení a conocernos !
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="md:col-span-2">
          <div className="mt-10 h-[500px] w-full overflow-hidden rounded-lg">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3287.7603998326534!2d-58.91661492427446!3d-34.49793225433755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc9d0c0d7ecd6f%3A0x7d2544daa7e25466!2sGranadero%20Juan%20Mateo%20Gelves%201126%2C%20B1629%20Pilar%2C%20Provincia%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1710285561145!5m2!1ses!2sar"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
        <div
          ref={imageRef}
          className="relative mt-10  h-[500px] w-full overflow-hidden rounded-lg bg-gray-100"
        >
          <Image
            src={Tienda}
            alt="tienda"
            className="absolute inset-0 h-full w-full object-contain transition-transform duration-700 hover:scale-105"
            width={1200}
            height={800}
            priority
          />
        </div>
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
      <div className="mt-10 flex flex-col items-center justify-center gap-6">
            <div className="flex flex-col mr-auto gap-4">
            <div className="flex items-center gap-2">
              <RiMapPin2Fill className="text-primary h-6 w-6 text-2xl" />
              <p className="text-lg">Granadero Juan Mateo Gelves 1126, Pilar</p>
            </div>
            <div className="flex items-center gap-2">
              <RiTimeFill className="text-primary h-6 w-6 text-2xl" />
              <p className="text-lg">Lunes a Viernes: 9:00 - 18:00</p>
            </div>
            <div className="flex items-center gap-2">
              <RiPhoneFill className="text-primary h-6 w-6 text-2xl" />
              <p className="text-lg">+54 11 1234-5678</p>
            </div>
          </div>
          </div>
          <div className="mt-10 flex flex-col items-center justify-center gap-6">
            <h2 className='text-2xl'>Seguinos en nuestras redes</h2>
            <div className='flex items-center gap-4'>
   
              <FaInstagram size={30} className='cursor-pointer text-primary transition-all duration-300 hover:text-primary/80' />
              <FaGoogle size={28} className='cursor-pointer text-primary transition-all duration-300 hover:text-primary/80' />

            </div>
          </div>
      </div>
    </div>
  );
};

export default ContentAbout;
