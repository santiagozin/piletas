"use client";

import clsx from 'clsx';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const categories = [
  { title: 'Piletas', href: '/search/piletas' },
  { title: 'Bombas', href: '/search/bombas' },
  { title: 'Limpieza', href: '/search/limpieza' },
  { title: 'Todas', href: '/search' }
];

export default function QuickCategoryFilter() {
  const pathname = usePathname();

  return (
    <div className='flex flex-col md:flex-row items-center justify-center gap-3 md:gap-4 border-b border-primary pb-4 w-full text-center uppercase'>
      {categories.map((cat) => {
        const active = pathname === cat.href || (cat.href !== '/search' && pathname?.startsWith(cat.href));
        return (
          <Link
            key={cat.href}
            href={cat.href}
            className={clsx(
              'rounded-full border px-4 py-2 text-sm md:text-xl font-medium transition-colors w-full h-16 flex items-center justify-center',
              active
                ? ' text-white bg-gradient-to-r from-primary to-cyan-700'
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