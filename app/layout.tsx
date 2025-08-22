import { Analytics } from "@vercel/analytics/next";
import { CartProvider } from 'components/cart/cart-context';
import { FloatingButtons } from 'components/layout/FloatingButtons';
import { Navbar } from 'components/layout/navbar';
import PreHeader from 'components/preHeader';
import { AnimatePresence } from 'framer-motion';
import { getCart } from 'lib/shopify';
import { ensureStartsWith } from 'lib/utils';
import { Inter, Poppins } from 'next/font/google';
import { cookies } from 'next/headers';
import { ReactNode } from 'react';
import { Toaster } from 'sonner';
import './globals.css';


const { TWITTER_CREATOR, TWITTER_SITE, SITE_NAME } = process.env;
const baseUrl = process.env.NEXT_PUBLIC_VERCEL_URL
  ? `https://${process.env.NEXT_PUBLIC_VERCEL_URL}`
  : 'http://localhost:3000';
const twitterCreator = TWITTER_CREATOR ? ensureStartsWith(TWITTER_CREATOR, '@') : undefined;
const twitterSite = TWITTER_SITE ? ensureStartsWith(TWITTER_SITE, 'https://') : undefined;



const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter-display'
});

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap'
});

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`
  },
  description: 'Tienda de productos para piletas y el cuidado del hogar',
  verification: {
    google: '2E4OVl1cZ_6mALqkDoC8DY18-WTnv3hkeS86rAEZD5Q'
  },
  openGraph: {
    title: SITE_NAME,
    description: 'Tienda de productos para piletas y el cuidado del hogar',
    url: baseUrl,
    siteName: SITE_NAME,
    images: [
      {
        url: `${baseUrl}/logo.png`, 
        width: 1200,
        height: 630,
        alt: 'Logo de la tienda'
      }
    ],
    locale: 'es_ES',
    type: 'website'
  },
  robots: {
    follow: true,
    index: true
  },
  ...(twitterCreator &&
    twitterSite && {
      twitter: {
        card: 'summary_large_image',
        creator: twitterCreator,
        site: twitterSite,
        images: [`${baseUrl}/logo.png`] 
      }
    })
};

export default async function RootLayout({ children }: { children: ReactNode }) {
  const cartId = (await cookies()).get('cartId')?.value;
  // Don't await the fetch, pass the Promise to the context provider
  const cart = getCart(cartId);

  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="bg-white text-black selection:bg-teal-300 dark:bg-neutral-900 dark:text-white dark:selection:bg-pink-500 dark:selection:text-white">
        <CartProvider cartPromise={cart}>
        <PreHeader />
          <Navbar />
          <main>
            <AnimatePresence mode="wait">
              {children}
            </AnimatePresence>
            <Toaster closeButton />
          </main>
          <FloatingButtons />
          <Analytics />
        </CartProvider>
      </body>
    </html>
  );
}
