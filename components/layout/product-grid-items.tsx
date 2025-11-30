'use client';

import { ShoppingCartIcon } from '@heroicons/react/24/outline';
import { Product } from 'lib/shopify/types';
import Link from 'next/link';
import { startTransition, useActionState } from 'react';
import { addItem } from '../cart/actions';
import { useCart } from '../cart/cart-context';
import { GridTileImage } from '../grid/tile';

function AddToCartButton({ product }: { product: Product }) {
  // console.log('AddToCartButton rendering for product:', product.title);

  const { addCartItem } = useCart();
  const [message, formAction] = useActionState(addItem, null);

  const handleAddToCart = async (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!product) {
      console.log('No product available');
      return;
    }

    const defaultVariant = product.variants[0];

    if (!defaultVariant) {
      console.log('No default variant available');
      return;
    }

    try {
      console.log('Adding to cart:', { variant: defaultVariant, product });
      startTransition(() => {
        addCartItem(defaultVariant, product);
        formAction(defaultVariant.id);
      });
    } catch (error) {}
  };

  return (
    <div className="absolute bottom-2 right-2 z-50">
      <button
        onClick={handleAddToCart}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-primary shadow-lg hover:bg-primary/90 hover:text-white"
        aria-label="Agregar al carrito"
      >
        <ShoppingCartIcon className="h-5 w-5" />
      </button>
      <p aria-live="polite" className="sr-only" role="status">
        {message}
      </p>
    </div>
  );
}

export function ProductGridItems({ products }: { products: Product[] }) {
  if (!products || products.length === 0) {
    return null;
  }

  return (
    <>
      {products.map((product) => {
        const isRobot = product.title?.toLowerCase().startsWith('robot');
        return (
          <li key={product.handle} className="relative flex flex-col">
            <Link href={`/product/${product.handle}`} className="block">
              <GridTileImage
                src={product.featuredImage?.url}
                alt={product.title}
                width={500}
                height={500}
                active={true}
                label={{
                  title: product.title,
                  amount: product.priceRange.maxVariantPrice.amount,
                  currencyCode: product.priceRange.maxVariantPrice.currencyCode,
                  showPrice: !isRobot,
                  ctaText: 'Contáctanos',
                  ctaHref: 'https://wa.me/1170645115'
                }}
              />
            </Link>
            <AddToCartButton product={product} />
          </li>
        );
      })}
    </>
  );
}
