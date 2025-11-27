import FilterItemDropdown from '@/components/layout/search/filter/dropdown';
import { sorting } from '@/lib/constants';
import Footer from 'components/layout/footer';
import Collections from 'components/layout/search/collections';
import ChildrenWrapper from './children-wrapper';
import DynamicHero from './dynamic-hero';
import QuickCategoryFilter from './quick-category-filter';

export default function SearchLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="mx-auto flex gap-8 px-4 pb-4 pt-10 text-black flex-col dark:text-white  w-full max-w-full overflow-hidden relative">
        <DynamicHero />
        <div className='flex w-full justify-center items-center'>
          <QuickCategoryFilter />
        </div>
        <div className='flex flex-row w-full justify-center items-center'>
          <span className='text-lg font-bold mr-4'>Ordenar por</span>
          <FilterItemDropdown list={sorting} />
        </div>
        <div className='flex md:flex-row flex-col'>
          <div className="order-first w-full flex-none rounded-lg bg-slate-100 px-4  md:max-w-[250px] mr-4 pt-10 mb-4">
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
