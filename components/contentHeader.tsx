import Image from 'next/image';
import Link from 'next/link';
import banner5 from '../app/assets/limpieza.png';
import banner3 from '../app/assets/productos/bombas.png';
import banner2 from "../app/assets/productos/dolphins.png";
import banner1 from '../app/assets/productosQuimicos.png';


const ContentHeader = () => {
  return (
    <div className="mt-10 grid grid-cols-1  md:grid-cols-2 lg:grid-cols-4 gap-2 px-4">
      <Link href="/search/mantenimiento-del-agua">
        <div className="group relative h-52 md:h-[350px] w-full overflow-hidden bg-gradient-to-t from-primary to-secondary rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg">
          <p className="text-title-banner absolute left-10 top-10 text-pensok">
            Tratamiento <span className="block">del Agua</span>
          </p>
          <Image
            src={banner1}
            alt="categorias quimicos"
            width={450}
            height={450}
            className="absolute bottom-[-50px] right-[-50px] transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      <Link href="/search/robots-limpiadores">
        <div className="group relative h-52 md:h-[350px] w-full overflow-hidden bg-gradient-to-t from-primary to-secondary rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg ">
          <p className="text-title-banner absolute left-10 top-10 text-pensok">
            Robots <span className="block">Limpieza</span>
          </p>
          <Image
            src={banner2}
            alt="categorias robots"
            width={300}
            height={300}
            className="absolute bottom-[-50px] right-[0px] transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      <Link href="/search/bombas">
        <div className="group relative h-52 md:h-[350px] w-full overflow-hidden bg-gradient-to-t from-primary to-secondary rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg ">
          <p className="text-title-banner absolute left-10 top-10 text-pensok">
            Bombas <span className="block">y Filtros</span>
          </p>
          <Image
            src={banner3}
            alt="categorias bombas de agua"
            width={300}
            height={300}
            className="absolute bottom-[-30px] right-[0px] transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      <Link href="/search/limpieza">
        <div className="group relative h-52 md:h-[350px] w-full overflow-hidden bg-gradient-to-t from-primary to-secondary rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg">
          <p className="text-title-banner absolute left-10 top-10 text-pensok">
            Productos <span className="block">de limpieza</span>
          </p>
          <Image
            src={banner5}
            alt="categorias riegos"
            width={450}
            height={450}
            className="absolute bottom-[-45px] right-[-70px] transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
    </div>
  );
};

export default ContentHeader;
