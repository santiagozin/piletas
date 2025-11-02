import { AddToCart } from 'components/cart/add-to-cart';
import Price from 'components/price';
import Prose from 'components/prose';
import { Product } from 'lib/shopify/types';
import { VariantSelector } from './variant-selector';

export function ProductDescription({ product }: { product: Product }) {
  const isRobot = product.title?.toLowerCase().startsWith('robot');
  return (
    <>
      <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
        <h1 className="mb-2 text-center text-xl md:text-3xl font-medium">{product.title}</h1>
        {isRobot ? (
          <a
            href="https://wa.me/1170645115"
            target="_blank"
            rel="noopener noreferrer"
            className="mr-auto w-auto rounded-full bg-primary p-2 text-sm text-white hover:bg-primary/90"
          >
            Contáctanos
          </a>
        ) : (
          <div className="mr-auto w-auto rounded-full bg-primary p-2 text-lg text-white">
            <Price
              amount={product.priceRange.maxVariantPrice.amount}
              currencyCode={product.priceRange.maxVariantPrice.currencyCode}
            />
          </div>
        )}
      </div>
      <VariantSelector options={product.options} variants={product.variants} />
      {product.descriptionHtml ? (
        <Prose
          className="mb-6 text-sm leading-tight dark:text-white/[60%]"
          html={product.descriptionHtml}
        />
      ) : null}
      {isRobot ? null : <AddToCart product={product} />}
    </>
  );
}
