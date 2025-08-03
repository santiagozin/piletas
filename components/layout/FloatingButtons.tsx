'use client';

import { useEffect, useState } from 'react';
import { FaArrowUp, FaWhatsapp } from 'react-icons/fa';

export function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      <a
        href="https://wa.me/1170645115"  
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all"
        aria-label="Contactar por WhatsApp"
      >
        <FaWhatsapp size={30} />
      </a>
      
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="bg-gray-700 hover:bg-gray-800 text-white p-3 rounded-full shadow-lg transition-all"
          aria-label="Volver arriba"
        >
          <FaArrowUp size={28} />
        </button>
      )}
    </div>
  );
} 