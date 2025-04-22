'use client';

import { RiMapPin2Fill, RiPhoneFill } from '@remixicon/react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaGoogle, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import contacto from '../app/assets/contacto.jpg';
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
    <div className=" px-10 relative" id="contacto">
            <PreguntasFrecuentes /> 
      <div className="flex items-center justify-start gap-2 border-t border-gray-200 pt-10">
        <div className="w-20 border-b-2 border-black"></div>
        <h2 className="text-title-section text-center">CONTACTO</h2>
      </div>
      <div className='flex justify-center items-center relative bg-pensok h-[300px] overflow-hidden my-8'>
            <Image className='opacity-30' src={contacto} alt="Tienda" />
          </div>

      <p className="mt-3 max-w-2xl font-poppins text-xl text-gray-500">
      Podes encontrarnos en nuestras redes sociales <span className='block'>o contactarnos por whatsapp </span><span className='block'>para cualquier consulta.</span>
      </p>

      <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 pb-20">
        <div className="mr-auto flex flex-col gap-4">
          <h3 className="font-poppins text-2xl font-medium mb-4 md:mb-0 text-center sm:text-left">Podes encontrarnos en</h3>
          <div className="flex items-center gap-2 flex-col sm:flex-row">
            <RiMapPin2Fill className="text-pensok h-6 w-6 text-2xl" />
            <p className="text-lg text-center sm:text-left">Granadero Juan Mateo Gelves 1126, Pilar</p>
          </div>
          <div className="flex items-center gap-2 text-lg flex-col sm:flex-row">
            <Link href="https://wa.me/+541112345678" className='flex items-center gap-2 group'> 
              <FaWhatsapp
                size={30}
                className="text-pensok cursor-pointer transition-all duration-300 group-hover:text-primary/80"
              />
              <span className="group-hover:text-primary/80">Escribinos por whatsapp</span>
            </Link>
          </div>

          <div className="flex items-center gap-2 flex-col sm:flex-row">
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
