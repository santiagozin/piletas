import { RiStore2Fill } from '@remixicon/react';
import { GridTileImage } from 'components/grid/tile';
import { getCollectionProducts } from 'lib/shopify';
import type { Product } from 'lib/shopify/types';
import Link from 'next/link';

function ThreeItemGridItem({
  item,
  size,
  priority
}: {
  item: Product;
  size: 'full' | 'half';
  priority?: boolean;
}) {
  return (
    <div
      className={size === 'full' ? 'md:col-span-4 md:row-span-2' : 'md:col-span-2 md:row-span-1'}
    >
      <Link
        className="relative block aspect-square h-full w-full"
        href={`/product/${item.handle}`}
        prefetch={true}
      >
        <GridTileImage
          src={item.featuredImage.url}
          fill
          sizes={
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 33vw, 100vw'
          }
          priority={priority}
          alt={item.title}
          label={{
            position: size === 'full' ? 'center' : 'bottom',
            title: item.title as string,
            amount: item.priceRange.maxVariantPrice.amount,
            currencyCode: item.priceRange.maxVariantPrice.currencyCode
          }}
        />
      </Link>
    </div>
  );
}

export async function ThreeItemGrid() {

  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2]) return null;

  const [firstProduct, secondProduct, thirdProduct] = homepageItems;

  return (
    <section className="mt-20 border-t border-primary px-10">
         <div className="mt-10 flex gap-2 items-center">
        <RiStore2Fill className=" h-9 w-9 text-primary" />
        <h2 className="text-title-section">Productos Destacados</h2>
      </div>
      <p className="mt-2 text-xl md:text-2xl text-gray-500">Conoce toda nuestra variedad de productos</p>

      <button className='bg-primary text-white px-4 py-2 rounded-md mt-10 mx-auto flex items-center gap-2 justify-center uppercase font-bold min-w-96 min-h-12 hover:bg-primary/80 transition-all duration-300 text-xl'>
      <RiStore2Fill className=" h-4 w-4 text-white" /> Ir a la tienda
      </button>

      <div className='mx-auto grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-6 md:grid-rows-1 lg:max-h-[calc(100vh-200px)] mt-10'>
      <ThreeItemGridItem size="half" item={firstProduct} priority={true} />
      <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
      <ThreeItemGridItem size="half" item={thirdProduct} />

      
      </div>
    </section>
  );
}
