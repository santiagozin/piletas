import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from '../../components/layout/footer';
import banner from '../assets/mayoristas.png';

const Mayoristas = () => {
  return (
    <>
      <div className="mb-60">
        <div className="bg-gradient-to-b from-[#e6f0fd] to-[#adcbed] relative flex h-[200px] w-full items-center overflow-hidden">
          <h2 className="z-10 text-5xl font-bold text-pensok ml-[15%]">Ventas Mayoristas</h2>
          <div className="absolute inset-y-0 right-0 h-full w-1/2">
            <Image
              src={banner}
              alt="Banner"
              fill
              className="object-cover opacity-40"
              sizes="(min-width: 768px) 50vw, 100vw"
              priority
            />
          </div>
        </div>
        <div className="mt-20 w-full gap-4">
          <div className="flex w-full flex-col px-10 text-center">
            <p className="text-xl font-light">
              Todos los productos de nuestra tienda estan disponibles para venta mayorista.
            </p>
            <p className="mt-4 text-xl font-light">
              Contamos con excelente precios y envios a cualquier parte del país.
            </p>

            <p className="mt-4 text-xl font-light">
              Si queres conocer mas, podes contactarnos al siguiente numero:
            </p>
            <div className="flex justify-center items-center mt-10">
              {' '}
              <FaPhoneAlt size={30} className=" text-primary mr-2" />
              <p className=" text-xl font-light">
                <span className="text-2xl font-bold text-primary">+54 9 011 7064-5115</span>
              </p>
            </div>

            <p className="mt-10 text-xl font-light">
              O envianos un mail con el asunto mayorista al siguiente correo:
            </p>
            <div className="flex justify-center items-center mt-10">
              {' '}
              <MdEmail 
                size={30}
                className=" text-primary mr-2"
              />
              <p className=" text-xl font-light">
                <span className="text-2xl font-bold text-primary">pensokpilar@gmail.com</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Mayoristas;
