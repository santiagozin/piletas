"use client";

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const categories = [
  { title: 'Piletas', href: '/search/quimicos' },
  { title: 'Accesorios', href: '/search/accesorios' },
  { title: 'Cloro', href: '/search/cloro' },
  { title: 'Filtros', href: '/search/filtros' },
  { title: 'Todas', href: '/search' }
];

export default function QuickCategoryFilter() {
  const pathname = usePathname();

  return (
    <div className='flex items-center justify-center gap-3 md:gap-4 border-b border-primary pb-4 w-full text-center uppercase'>
      {categories.map((cat) => {
        const active = pathname === cat.href || (cat.href !== '/search' && pathname?.startsWith(cat.href));
        return (
          <Link
            key={cat.href}
            href={cat.href}
            className={clsx(
              'rounded-full border px-4 py-1 md:py-2 text-sm md:text-lg font-medium transition-colors w-full h-12 flex items-center justify-center',
              active
                ? ' text-white bg-primary'
                : 'bg-white text-primary border-primary dark:bg-transparent dark:text-white'
            )}
          >
            {cat.title} 
          </Link>
        );
      })}
    </div>
  );
} 