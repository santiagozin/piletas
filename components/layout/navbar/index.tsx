import CartModal from 'components/cart/modal';
import { getMenu } from 'lib/shopify';
import { Menu } from 'lib/shopify/types';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import logo from '../../../app/assets/logo.png';
import MobileMenu from './mobile-menu';
import Search, { SearchSkeleton } from './search';


const { SITE_NAME } = process.env;

export async function Navbar() {
  const menu = await getMenu('next-js-frontend-header-menu');

  return (
    <nav className="relative flex items-center justify-between p-1 lg:px-6 bg-[#294a72] w-full max-w-full overflow-hidden">
      <div className="block flex-none md:hidden ml-2">
        <Suspense fallback={null}>
          <MobileMenu menu={menu} />
        </Suspense>
      </div>
      <div className="flex w-full items-center justify-center">
        <div className="ml-2 flex ">
          <Link
            href="/"
            prefetch={true}
            className="mr-2 flex w-full items-center justify-center lg:mr-6"
          >
            <div className="ml-2 flex-none px-6 py-2 text-xl font-bold uppercase md:hidden lg:block text-white text-center  flex justify-around  rounded-full">
          
              <Image src={logo} alt="Logo" width={130} height={130} />
            </div>
          </Link>
          {menu.length ? (
            <ul className="hidden gap-6 text-sm md:flex md:items-center ml-2">
              {menu.map((item: Menu) => (
                <li key={item.title}>
                  <Link
                    href={item.path}
                    prefetch={true}
                    className="text-white font-poppins underline-offset-4 hover:text-primary  dark:text-white  dark:hover:text-neutral-300 text-lg w-full"
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="justify-end hidden md:flex md:w-1/3 ml-auto ">
          <Suspense fallback={<SearchSkeleton />}>
            <Search />
          </Suspense>
          <CartModal />
        </div>
      </div>
    </nav>
  );
}
