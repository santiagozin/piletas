'use client';

import { RiBox1Fill } from '@remixicon/react';
import { motion, useInView } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import process1 from '../app/assets/steps/paso1.svg';
import process2 from '../app/assets/steps/paso2.svg';
import process3 from '../app/assets/steps/paso3.svg';

const ContentProcess = () => {
  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  
  const isInView1 = useInView(ref1, { once: true });
  const isInView2 = useInView(ref2, { once: true });
  const isInView3 = useInView(ref3, { once: true });

  return (
    <div className="mt-14 border-t border-primary px-6">
      <div className="mt-10 flex gap-2">
        <RiBox1Fill className="mt-1 h-10 w-10 text-primary" />
        <h2 className="text-title-section">Como Trabajamos</h2>
      </div>
      <p className="mt-2 text-xl md:text-2xl text-gray-500">Queremos que tengas la mejor experiencia de compra</p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-2 mb-10">
        <motion.div 
          ref={ref1}
          style={{
            opacity: isInView1 ? 1 : 0,
            transform: isInView1 ? "none" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
          }}
          className="min-h-[200px] md:min-h-[300px] flex flex-col sm:flex-row md:flex-col mb-10 sm:mb-0 items-center justify-center"
        >
          <div className='md:h-96 w-1/4 md:w-full flex items-center justify-center'>
            <Image src={process1} alt="process-1" width={330} height={330} />
          </div>
          <div className="md:px-10 px-4 w-3/4 md:w-full text-center">
            <h3 className="text-2xl font-bold">Elegis el producto que buscas</h3>
            <p className='text-gray-500 mt-2 text-md md:text-lg'>Si no sabes que producto necesitas,<span className='block'> podes consultar en nuestra Chat.</span></p>
          </div>
        </motion.div>
        <motion.div 
          ref={ref2}
          style={{
            opacity: isInView2 ? 1 : 0,
            transform: isInView2 ? "none" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s"
          }}
          className="min-h-[200px] md:min-h-[300px] flex flex-col sm:flex-row md:flex-col mb-10 sm:mb-0 items-center justify-center"
        >
          <div className='md:h-96 w-1/4 md:w-full flex items-center justify-center'>   
            <Image src={process2} alt="process-1" width={380} height={380} />
          </div>
          <div className="md:px-10 px-4 w-3/4 md:w-full text-center">
            <h3 className="text-2xl font-bold">Elegi el metodo de pago</h3>
            <p className='text-gray-500 mt-2 text-md md:text-lg'>
              Podés pagar con el medio de pago que prefieras,<span className='block'> crédito, transferencia, RapiPago, Mercado Pago, PagoFacil, etc.</span>
            </p>
          </div>
        </motion.div>
        <motion.div 
          ref={ref3}
          style={{
            opacity: isInView3 ? 1 : 0,
            transform: isInView3 ? "none" : "translateY(20px)",
            transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s"
          }}
          className="min-h-[200px] md:min-h-[300px] flex flex-col sm:flex-row md:flex-col mb-10 sm:mb-0 items-center justify-center"
        >
          <div className='md:h-96 w-1/4 md:w-full flex items-center justify-center'>
            <Image src={process3} alt="process-1" width={320} height={320} />
          </div>
          <div className="md:px-10 px-4 w-3/4 md:w-full text-center">
            <h3 className="text-2xl font-bold">Recibis tu producto</h3>
            <p className='text-gray-500 mt-2 text-md md:text-lg'>El producto llega a tu domicilio en 24hs o <span className='block'>podes retirar en nuestro local</span></p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentProcess;
