import Image from 'next/image';
import Link from 'next/link';
import { FaGoogle, FaInstagram, FaWhatsapp } from 'react-icons/fa';
import Footer from '../../components/layout/footer';
import banner from '../assets/nosotros.jpg';
import local from '../assets/tienda.jpg';

const Nosotros = () => {
  return (
    <>
      <div className="mb-10">
        <div className="bg-pensok relative flex h-[200px] w-full items-center justify-center overflow-hidden ">
          <h2 className="z-10 text-5xl font-bold text-white">Sobre Nosotros</h2>
          <Image
            src={banner}
            className="absolute md:bottom-[-300px] left-0 right-0 opacity-40"
            alt="Banner"
          />
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex flex-col px-10">
            <p className="text-xl font-light">
              ¡Hace más de 10 años que estamos presentes en el mercado, acompañando a miles de
              clientes con productos de calidad y precios que se adaptan a todos los bolsillos.
            </p>
            <p className="mt-10 text-xl font-light">
              Arrancamos con lo que más nos apasiona: el mantenimiento y cuidado de piletas. Fuimos
              creciendo con nuestras propias líneas y las mejores marcas del rubro, siempre
              priorizando la variedad y la confianza que vos necesitás.
            </p>
            <p className="mt-10 text-xl font-light">
              Con el tiempo, fuimos sumando más opciones para que encuentres todo en un solo lugar.
              Hoy también te ofrecemos productos para el hogar y espacios al aire libre: limpieza,
              cuidado y mucho más.
            </p>
            <p className="mt-10 text-xl font-light">
              ¿Querés conocernos mejor? Tenemos un local a la calle donde te esperamos con la mejor
              atención y todas las ganas de ayudarte. ¡Pasá a visitarnos!
              <span className="ml-2 font-medium text-primary">Te esperamos !</span>
            </p>
            <div className="mt-10 md:mt-32 flex flex-col items-center justify-center">
              <p className="text-2xl font-medium">
                También podés seguirnos en nuestras redes sociales
              </p>
              <div className='flex gap-4 justify-center items-center mt-4'>
                <Link href="https://www.instagram.com/pensok.piletas">
                  <FaInstagram
                    size={30}
                    className="text-primary cursor-pointer transition-all duration-300 hover:text-primary/80"
                  />
                </Link>
                <Link href="https://g.co/kgs/rQT8ErS">
                  <FaGoogle
                    size={30}
                    className="text-primary cursor-pointer transition-all duration-300 hover:text-primary/80"
                  />
                </Link>
                <Link href="https://wa.me/54901170645115">
                  <FaWhatsapp
                    size={30}
                    className="text-primary cursor-pointer transition-all duration-300 hover:text-primary/80"
                  />
                </Link>
              </div>
            </div>
          </div>

          <div className="relative flex h-[400px] md:h-[800px] items-center justify-center overflow-hidden bg-slate-800">
            <Image
              className="absolute left-0 top-0 h-full w-full object-cover opacity-50"
              src={local}
              alt="Tienda"
            />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Nosotros;
