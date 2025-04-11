import clsx from 'clsx';
import { Suspense } from 'react';

import { priceRanges } from 'lib/constants';
import { getCollections, getProducts } from 'lib/shopify';
import FilterList from './filter';

async function CollectionList() {
  const collections = await getCollections();
  const products = await getProducts({});

  const availableBrands = Array.from(new Set(products.map(product => product.vendor)))
    .filter(Boolean)
    .sort()
    .map(vendor => ({
      title: vendor,
      slug: vendor.toLowerCase(),
      type: 'BRAND' as const,
      brandId: vendor
    }));


  const brandFilters = [
    { title: 'Todas las marcas', slug: null, type: 'BRAND' as const, brandId: '' },
    ...availableBrands
  ];

  const allFilters = [
    ...collections,
    ...brandFilters,
    ...priceRanges
  ];
  
  return <FilterList list={allFilters} title="Categorías" />;
}

const skeleton = 'mb-3 h-4 w-5/6 animate-pulse rounded';
const activeAndTitles = 'bg-neutral-800 dark:bg-neutral-300';
const items = 'bg-neutral-400 dark:bg-neutral-700';

export default function Collections() {
  return (
    <Suspense
      fallback={
        <div className="col-span-2 hidden h-[400px] w-full flex-none py-4 lg:block">
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, activeAndTitles)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
          <div className={clsx(skeleton, items)} />
        </div>
      }
    >
      <CollectionList />
    </Suspense>
  );
}
