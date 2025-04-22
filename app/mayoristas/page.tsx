import Image from 'next/image';
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import Footer from '../../components/layout/footer';
import banner from '../assets/mayoristas.png';

const Mayoristas = () => {
  return (
    <>
      <div className="mb-60">
        <div className="bg-pensok relative flex h-[200px] w-full items-center justify-center overflow-hidden">
          <h2 className="z-10 text-5xl font-bold text-white text-center">Ventas Mayoristas</h2>
          <Image
            src={banner}
            className="absolute md:bottom-[-100px] left-0 right-0 opacity-40"
            alt="Banner"
          />
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
