'use client';

import { RiPhoneFill } from '@remixicon/react';
import { MailIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef } from 'react';
import { FaInstagram, FaWhatsapp } from 'react-icons/fa';
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
    <div className="relative" id="contacto">
      <PreguntasFrecuentes />

      <div className="relative mt-8 flex h-full flex-col items-center justify-center gap-4 overflow-hidden bg-gradient-to-b from-[#a1c4fd] to-[#c2e9fb] px-10 py-4 pb-8">
        <span className="text-title-section mx-auto w-full border-b-2 border-black pb-2 md:pl-10 text-center !text-3xl !font-medium text-black">
          CONTACTO
        </span>
        {/* <Image className="opacity-30" src={contacto} alt="Tienda" /> */}
        {/* Mapa de Google Maps */}
        <div className="mt-6 flex w-full gap-8 flex-col md:flex-row">
          <div className="w-full max-w-4xl px-0 md:px-10">
            <h3 className="mb-4 text-left text-xl text-black">
              Podés retirar tu pedido en nuestro local a la calle:
            </h3>
            <div
              className="group relative cursor-pointer overflow-hidden rounded-lg shadow-lg "
              onClick={() =>
                window.open(
                  'https://www.google.com/maps/search/?api=1&query=Granadero+Juan+Mateo+Gelves+1126,+Pilar,+Buenos+Aires',
                  '_blank'
                )
              }
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3290.1063024914647!2d-58.9343316237927!3d-34.44944934936815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc83000f55952b%3A0x4b92325321cd4c1!2sPensok!5e0!3m2!1ses!2sar!4v1761574115638!5m2!1ses!2sar"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Pensok Piletas - Granadero Juan Mateo Gelves 1126, Pilar"
              ></iframe>
              {/* Overlay para indicar que es clickeable */}
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-10">
                <div className="rounded-lg bg-white bg-opacity-90 px-4 py-2 opacity-0 shadow-lg transition-opacity duration-300 group-hover:opacity-100">
                  <span className="font-medium text-gray-800">
                    Haz clic para abrir en Google Maps
                  </span>
                </div>
              </div>
            </div>
            <p className="mt-3 text-center text-gray-600">
              📍 Granadero Juan Mateo Gelves 1126, Pilar, Buenos Aires
            </p>
          </div>
          <div className="mx-auto flex w-full flex-col justify-center gap-8 md:px-24 md:pl-[15%]">
            <div className="flex flex-col items-center gap-2 text-lg sm:flex-row">
              <Link href="https://wa.me/1170645115" className="flex items-center gap-3">
                <FaWhatsapp
                  size={40}
                  className="cursor-pointer text-green-600 transition-all duration-300"
                />
                <span className="text-xl hover:text-green-600 font-normal"><span className="font-medium">Chatea</span> con nosotros</span>
              </Link>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <FaInstagram className="h-8 w-8 text-2xl text-rose-600" />
              <a
                href="https://www.instagram.com/pensok.piletas"
                className="text-xl hover:text-rose-600 font-medium"
              >
                @pensok.piletas
              </a>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <RiPhoneFill className="h-8 w-8 text-2xl text-pensok" />
              <p className="text-xl font-medium">+54 11 7064-5115</p>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <MailIcon
                size={28}
                className="cursor-pointer text-pensok transition-all duration-300 hover:text-primary/80"
              />
              <p className="text-xl font-medium">pensokpilar@gmail.com</p>
            </div>
          </div>
          <div className="flex w-full flex-col items-center justify-center gap-8 px-24 pt-24">
            <Image src={logo} alt="Contacto" width={180} height={180} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentAbout;
