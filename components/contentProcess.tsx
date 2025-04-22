'use client';

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
    <div className="mt-14 h-full bg-secondary px-6 py-1">
      <div className="mb-10 mt-12 grid grid-cols-1 gap-2 md:grid-cols-3">
        <motion.div
          ref={ref1}
          style={{
            opacity: isInView1 ? 1 : 0,
            transform: isInView1 ? 'none' : 'translateY(20px)',
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s'
          }}
          className="flex flex-col items-center justify-center sm:flex-row"
        >
          <div className="flex flex-col sm:flex-row items-center justify-center">
            <Image src={process1} alt="process-1" width={60} height={60} />
          </div>
          <div className="font-montserrat md:pl-6 mt-8 md:mt-0 text-center sm:text-left">
            <h3 className="text-2xl font-medium">Envíos a todo el país</h3>
            <p className="text-md mt-1 font-light text-gray-500 md:text-lg">
              Hacemos envios a <span className="block">todo Argentina</span>
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref2}
          style={{
            opacity: isInView2 ? 1 : 0,
            transform: isInView2 ? 'none' : 'translateY(20px)',
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.7s'
          }}
          className="flex flex-col items-center justify-center sm:flex-row"
        >
          <div className="flex items-center justify-center mt-8 md:mt-0">
            <Image src={process3} alt="process-2" width={60} height={60} />
          </div>
          <div className="font-montserrat md:pl-6  mt-8 md:mt-0 text-center sm:text-left">
            <h3 className="text-2xl font-medium">Atención personalizada</h3>
            <p className="text-md mt-1 font-light text-gray-500 md:text-lg">
              Contactanos para recibir<span className="block">asesoramiento gratuito</span>
            </p>
          </div>
        </motion.div>
        <motion.div
          ref={ref3}
          style={{
            opacity: isInView3 ? 1 : 0,
            transform: isInView3 ? 'none' : 'translateY(20px)',
            transition: 'all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.9s'
          }}
          className="flex flex-col items-center justify-center sm:flex-row"
        >
          <div className="flex items-center justify-center mt-8 md:mt-0">
            <Image src={process2} alt="process-1" width={50} height={50} />
          </div>
          <div className="font-montserrat md:pl-6  mt-8 md:mt-0 text-center sm:text-left">
            <h3 className="text-2xl font-medium">Compra segura</h3>
            <p className="text-md mt-1 font-light text-gray-500 md:text-lg">
              Garantizamos la calidad de<span className="block"> nuestros productos</span>
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContentProcess;
