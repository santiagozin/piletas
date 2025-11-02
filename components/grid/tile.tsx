'use client';

import clsx from 'clsx';
import { Product } from 'lib/shopify/types';
import Image from 'next/image';
import Label from '../label';

export function GridTileImage({
  isInteractive = true,
  active,
  label,
  product,
  ...props
}: {
  isInteractive?: boolean;
  active?: boolean;
  label?: {
    title: string;
    amount: string;
    currencyCode: string;
    position?: 'bottom' | 'center';
    showPrice?: boolean;
    ctaText?: string;
    ctaHref?: string;
  };
  product?: Product;
} & React.ComponentProps<typeof Image>) {

  
  return (
    <div
      className={clsx(
        'group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-gradient-to-b from-[#e6f0fd] to-[#adcbed] hover:shadow-2xl hover:shadow-blue-400/30 dark:bg-black capitalize',
        {
          relative: label,
          '': active,
          'border-neutral-200 dark:border-neutral-800': !active
        }
      )}
    >
      {props.src ? (
        <Image
          className={clsx('relative h-full w-full object-contain', {
            'transition duration-300 ease-in-out group-hover:scale-105': isInteractive
          })}
          {...props}
        />
      ) : null}
      {label ? (
        <Label
          title={label.title}
          amount={label.amount}
          currencyCode={label.currencyCode}
          position={label.position}
          showPrice={label.showPrice}
          ctaText={label.ctaText}
          ctaHref={label.ctaHref}
        />
      ) : null}
    </div>
  );
}
