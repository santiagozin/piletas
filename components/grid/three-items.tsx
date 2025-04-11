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
            size === 'full' ? '(min-width: 768px) 66vw, 100vw' : '(min-width: 768px) 25vw, 100vw'
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

export async function FourItemGrid() {
  const homepageItems = await getCollectionProducts({
    collection: 'hidden-homepage-featured-items'
  });

  if (!homepageItems[0] || !homepageItems[1] || !homepageItems[2] || !homepageItems[3]) return null;

  const [firstProduct, secondProduct, thirdProduct, fourthProduct] = homepageItems;

  return (
    <section className="mt-28 px-4 font-poppins border-t border-gray-300 relative">
      <button className="md:absolute top-[-70px] md:left-[30%] hover:bg-pensok mx-auto mt-10 flex min-h-16 w-full md:min-w-48 max-w-2xl items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-xl font-bold uppercase text-white transition-all duration-300">
        <Link href="/search">
          VER TODAS LAS CATEGORIAS
        </Link>
      </button>
      <div className="mt-28 flex items-center justify-start gap-2">
        <div className='border-b-2 border-black w-20'></div>
        <h2 className="text-title-section text-center">DESCUENTOS EXCLUSIVOS</h2>
      </div>

      <div className="mx-auto mt-10 grid max-w-screen-2xl gap-4 px-4 pb-4 md:grid-cols-8 md:grid-rows-1 lg:max-h-[calc(100vh-200px)]">
        <ThreeItemGridItem size="half" item={firstProduct} priority={true} />
        <ThreeItemGridItem size="half" item={secondProduct} priority={true} />
        <ThreeItemGridItem size="half" item={thirdProduct} />
        <ThreeItemGridItem size="half" item={fourthProduct} />
      </div>
    </section>
  );
}
