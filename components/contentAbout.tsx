'use client';

import { RiMapPin2Fill, RiPhoneFill } from '@remixicon/react';
import Image from 'next/image';
import { useEffect, useRef } from 'react';
import { FaGoogle, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import logo from '../app/assets/logo.png';
import { PreguntasFrecuentes } from './preguntasFrecuentes';

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
    <div className=" px-10" id="contacto">
            <PreguntasFrecuentes /> 
      <div className="flex items-center justify-start gap-2 border-t border-gray-200 pt-10">
        <div className="w-20 border-b-2 border-black"></div>
        <h2 className="text-title-section text-center">NOSOTROS</h2>
      </div>

      <p className="mt-3 max-w-2xl font-poppins text-xl text-gray-500">
        Nos dedicamos a la venta de productos para piscinas y accesorios. Asi como tambien
        insecticidas, desinfectantes, y muchos productos para el hogar.
      </p>

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 pb-20">
        <div className="mr-auto flex flex-col gap-4">
          <h3 className="font-poppins text-2xl font-medium">Podes encontrarnos en</h3>
          <div className="flex items-center gap-2">
            <RiMapPin2Fill className="text-pensok h-6 w-6 text-2xl" />
            <p className="text-lg">Granadero Juan Mateo Gelves 1126, Pilar</p>
          </div>
          <div className="flex items-center gap-2 text-lg">
            <FaWhatsapp
              size={30}
              className="text-pensok cursor-pointer transition-all duration-300 hover:text-primary/80"
            />
            <span>Escribinos por whatsapp</span>
          </div>

          <div className="flex items-center gap-2">
            <RiPhoneFill className="text-pensok h-6 w-6 text-2xl" />
            <p className="text-lg">+54 11 1234-5678</p>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6">
          <Image src={logo} alt="Logo" width={130} height={130} />
          <h2 className="font-poppins text-2xl font-medium">Seguinos en nuestras redes</h2>
          <div className="flex items-center gap-4">
            <FaInstagram
              size={30}
              className="text-pensok cursor-pointer transition-all duration-300 hover:text-primary/80"
            />
            <FaGoogle
              size={28}
              className="text-pensok cursor-pointer transition-all duration-300 hover:text-primary/80"
            />
          </div>
        </div>
      </div>

    </div>
  );
};

export default ContentAbout;
