import Link from 'next/link';
import { FaGoogle, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const PreHeader = () => {
  return (
    <div className="text-pensok bg-gray-200 py-1 text-center flex justify-center">
      <div className='mr-4'>
        <p>Granadero Juan Mateo Gelves 1126, Pilar </p>
      </div>{' '}
      <div className="flex items-center gap-4 border-l-2 border-gray-300 pl-4">
        <Link href="https://www.instagram.com/pensok.piletas">
          <FaInstagram
              size={20}
            className="text-pensok cursor-pointer transition-all duration-300 hover:text-primary/80"
          />
        </Link>
        <Link href="https://g.co/kgs/rQT8ErS">
          <FaGoogle
            size={20}
            className="text-pensok cursor-pointer transition-all duration-300 hover:text-primary/80"
          />
        </Link>
        <Link href="https://wa.me/1170645115">
          <FaWhatsapp
            size={20}
            className="text-pensok cursor-pointer transition-all duration-300 hover:text-primary/80"
          />
        </Link>
      </div>
    </div>
  );
};

export default PreHeader;
