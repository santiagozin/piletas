import FilterItemDropdown from '@/components/layout/search/filter/dropdown';
import { sorting } from '@/lib/constants';
import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import Image from 'next/image';
import banner from '../assets/banner-tienda.jpg';
import ChildrenWrapper from './children-wrapper';
export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto flex max-w-screen-2xl gap-8 px-4 pb-4 pt-10 text-black flex-col dark:text-white relative">
        <div className='h-[250px] w-full overflow-hidden relative bg-slate-800 flex justify-center items-center'>
          <h2 className='text-white text-5xl font-bold z-10'>Gracias por visitar nuestra tienda</h2>
          <Image src={banner} className='absolute bottom-[-180px] right-0 left-0 opacity-60' alt="Banner" />
        </div>
        <div className='flex flex-row w-full justify-center items-center'>
          <span className='text-lg font-bold mr-4'>Ordenar por</span>
          <FilterItemDropdown list={sorting} />
        </div>
        <div className='flex md:flex-row flex-col'>
          <div className="order-first w-full flex-none rounded-lg bg-slate-100 px-4 md:max-w-[250px] mr-4 pt-10">
            <Collections />
          </div>
          <div className="order-last min-h-screen w-full md:order-none">
            <ChildrenWrapper>{children}</ChildrenWrapper>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
