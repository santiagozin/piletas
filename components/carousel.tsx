import { getCollectionProducts } from 'lib/shopify';
import Link from 'next/link';
import Chatbot from './chatbot';
import { GridTileImage } from './grid/tile';

export async function Carousel() {
  // Collections that start with `hidden-*` are hidden from the search page.
  const products = await getCollectionProducts({ collection: 'hidden-homepage-carousel' });

  if (!products?.length) return null;

  // Purposefully duplicating products to make the carousel loop and not run out of products on wide screens.
  const carouselProducts = [...products, ...products, ...products];

  return (
    <div className="w-full overflow-x-auto pb-6 pt-1 scrollbar-hide">
      <ul className="flex animate-carousel gap-4">
        {carouselProducts.map((product, i) => (
          <li
            key={`${product.handle}${i}`}
            className="relative aspect-square h-[30vh] max-h-[275px] w-2/3 max-w-[475px] flex-none md:w-1/3"
          >
            <Link href={`/product/${product.handle}`} className="relative h-full w-full">
              <GridTileImage
                alt={product.title}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode
                }}
                src={product.featuredImage?.url}
                fill
                sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, 50vw"
              />
            </Link>
          </li>
        ))}
      </ul>
    <div className='px-10 text-center mt-10'>
      <div className="pt-10 flex gap-2 border-t border-gray-300">
        <h2 className="text-title-section text-center mx-auto">No sabes que producto es el mejor para vos?</h2>
      </div>
      <p className="mt-2 text-xl text-gray-500 md:text-2xl max-w-2xl mx-auto">
        Consulta en nuestro Chat para que te ayude a elegir el mejor producto para tu pileta
      </p>
      <Chatbot />
      </div>
    </div>
    
  );
}
