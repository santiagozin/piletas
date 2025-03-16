import Image from 'next/image';
import Link from 'next/link';
import banner1 from '../app/assets/banners/banner1.png';
import banner2 from '../app/assets/banners/banner2.png';
import banner3 from '../app/assets/banners/banner3.png';
import banner4 from '../app/assets/banners/banner4.png';
const ContentHeader = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2">
      <Link href="/search">
        <div className="group relative h-[400px] md:h-[500px] w-full overflow-hidden bg-gradient-to-r from-[#83a4d4] to-[#b6fbff] rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg">
          <p className="text-title-banner absolute left-10 top-10 text-gray-800">
            Productos <span className="block">Quimicos</span>
          </p>
          <Image
            src={banner1}
            alt="contentHeader1"
            width={310}
            height={310}
            className="absolute bottom-[-30px] right-[-90px] transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      <Link href="/search">
        <div className="group relative h-[400px] md:h-[500px] w-full overflow-hidden bg-gradient-to-r from-[#b6fbff] to-[#83a4d4] rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg">
          <p className="text-title-banner absolute left-10 top-10 text-gray-800">
            Accesorios <span className="block">para Piletas</span>
          </p>
          <Image
            src={banner2}
            alt="contentHeader2"
            width={400}
            height={400}
            className="absolute bottom-[-100px] right-[-50px] max-w-none transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      <Link href="/search">
        <div className="group relative h-[400px] md:h-[500px] w-full overflow-hidden bg-gradient-to-r from-[#83a4d4] to-[#b6fbff] rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg">
          <p className="text-title-banner absolute left-10 top-10 text-gray-800">
            Repuestos <span className="block">para Piletas</span>
          </p>
          <Image
            src={banner3}
            alt="contentHeader3"
            width={200}
            height={200}
            className="absolute bottom-[-30px] right-[-10px] max-w-none transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      <Link href="/search">
        <div className="group relative h-[400px] md:h-[500px] w-full overflow-hidden bg-gradient-to-r from-[#b6fbff] to-[#83a4d4] rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg">
          <p className="text-title-banner absolute left-10 top-10 text-gray-800">
            Robots
          </p>
          <Image
            src={banner4}
            alt="contentHeader4"
            width={350}
            height={350}
            className="absolute bottom-[-40px] right-[-30px] max-w-none transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
    </div>
  );
};

export default ContentHeader;
