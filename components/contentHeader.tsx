import Image from 'next/image';
import Link from 'next/link';
import banner3 from '../app/assets/productos/bombas.png';
import banner2 from "../app/assets/productos/dolphins.png";
import banner5 from '../app/assets/productos/limpieza.png';
import banner1 from '../app/assets/productos/productosQuimicos.png';
import banner4 from '../app/assets/productos/riegos.png';


const ContentHeader = () => {
  return (
    <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-2 px-4">
      <Link href="/search/cuidado-del-agua">
        <div className="group relative h-[350px] w-full overflow-hidden bg-gradient-to-t from-primary to-secondary rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg">
          <p className="text-title-banner absolute left-10 top-10 text-pensok">
            Tratamiento <span className="block">del Agua</span>
          </p>
          <Image
            src={banner1}
            alt="categorias quimicos"
            width={500}
            height={500}
            className="absolute bottom-[-20px] right-[0px] transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      <Link href="/search/robots-limpieza">
        <div className="group relative h-[350px] w-full overflow-hidden bg-gradient-to-t from-primary to-secondary rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg ">
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

      <Link href="/search/bombas-de-agua">
        <div className="group relative h-[350px] w-full overflow-hidden bg-gradient-to-t from-primary to-secondary rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg ">
          <p className="text-title-banner absolute left-10 top-10 text-pensok">
            Bombas <span className="block">de Agua</span>
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

      <Link href="/search/riegos-y-exteriores">
        <div className="group relative h-[350px] w-full overflow-hidden bg-gradient-to-t from-primary to-secondary rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg ">
          <p className="text-title-banner absolute left-10 top-10 text-pensok">
            Riegos <span className="block">y exteriores</span>
          </p>
          <Image
            src={banner4}
            alt="categorias riegos"
            width={300}
            height={300}
            className="absolute bottom-[-10px] right-[0px] transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </Link>

      <Link href="/search/productos-de-limpieza">
        <div className="group relative h-[350px] w-full overflow-hidden bg-gradient-to-t from-primary to-secondary rounded-lg hover:brightness-90 hover:cursor-pointer shadow-lg">
          <p className="text-title-banner absolute left-10 top-10 text-pensok">
            Productos <span className="block">de limpieza</span>
          </p>
          <Image
            src={banner5}
            alt="categorias riegos"
            width={350}
            height={350}
            className="absolute bottom-[-20px] right-[0px] transition-all duration-300 group-hover:scale-110"
          />
        </div>
      </Link>
    </div>
  );
};

export default ContentHeader;
