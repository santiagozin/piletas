'use client';

import clsx from 'clsx';
import type { BrandFilterItem, PriceFilterItem, SortFilterItem } from 'lib/constants';
import { createUrl } from 'lib/utils';
import Link from 'next/link';
import { usePathname, useSearchParams } from 'next/navigation';
import type { ListItem, PathFilterItem } from '.';

function PathFilterItem({ item }: { item: PathFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = pathname === item.path;
  const newParams = new URLSearchParams(searchParams.toString());
  const DynamicTag = active ? 'p' : Link;

  newParams.delete('q');

  return (
    <li className="mt-2 flex font-poppins text-gray-700 dark:text-white" key={item.title}>
      <DynamicTag
        href={createUrl(item.path, newParams)}
        className={clsx(
          'text-md dark:hover:text-neutral-10 w-full underline-offset-4 hover:underline',
          {
            'rounded-lg bg-primary px-4 py-2 font-poppins text-white underline-offset-4': active
          }
        )}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

function SortFilterItem({ item }: { item: SortFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('sort') === item.slug;
  const q = searchParams.get('q');
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { sort: item.slug })
    })
  );
  const DynamicTag = active ? 'p' : Link;

  return (
    <li className="mt-2 flex text-sm text-black dark:text-white" key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={clsx(
          'text-md dark:hover:text-neutral-10 w-full underline-offset-4 hover:underline',
          {
            'rounded-lg bg-primary px-4 py-2 font-poppins text-white underline-offset-4': active
          }
        )}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

function BrandFilterItem({ item }: { item: BrandFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('brand') === item.slug;
  const q = searchParams.get('q');
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { brand: item.slug })
    })
  );
  const DynamicTag = active ? 'p' : Link;

  return (
    <li className="mt-2 flex text-md text-black dark:text-white" key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={clsx(
          'text-md dark:hover:text-neutral-10 w-full underline-offset-4 hover:underline',
          {
            'rounded-lg bg-primary px-4 py-2 font-poppins text-white underline-offset-4': active
          }
        )}
      >
        {item.title}
      </DynamicTag>
    </li>
  );
}

function PriceFilterItem({ item }: { item: PriceFilterItem }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active = searchParams.get('price') === item.slug;
  const q = searchParams.get('q');
  const href = createUrl(
    pathname,
    new URLSearchParams({
      ...(q && { q }),
      ...(item.slug && item.slug.length && { price: item.slug })
    })
  );
  const DynamicTag = active ? 'p' : Link;

  return (

    <li className="mt-2 flex text-md text-black dark:text-white " key={item.title}>
      <DynamicTag
        prefetch={!active ? false : undefined}
        href={href}
        className={clsx(
          'text-md dark:hover:text-neutral-10 w-full underline-offset-4 hover:underline',
          {
            'rounded-lg bg-primary px-4 py-2 font-poppins text-white underline-offset-4': active
          }
        )}
      >
        {item.title}
      </DynamicTag>
    </li>

  );
}

export function FilterItem({ item }: { item: ListItem }) {
  if ('path' in item)
    return (
      <div className="">
        <PathFilterItem item={item} />
      </div>
    );
  if ('sortKey' in item)
    return (
      <div className="">
        <SortFilterItem item={item} />
      </div>
    );
  if ('brandId' in item)
    return (
      <div className="">
        <BrandFilterItem item={item} />
      </div>
    );
  if ('priceRange' in item)
    return (
      <div className="">
        <PriceFilterItem item={item} />
      </div>
    );
  return null;
}
