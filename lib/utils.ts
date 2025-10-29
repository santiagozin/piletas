import { ReadonlyURLSearchParams } from 'next/navigation';
import { priceRanges } from './constants';

export const createUrl = (pathname: string, params: URLSearchParams | ReadonlyURLSearchParams) => {
  const paramsString = params.toString();
  const queryString = `${paramsString.length ? '?' : ''}${paramsString}`;

  return `${pathname}${queryString}`;
};

export const parseFiltersFromSearchParams = (searchParams: { [key: string]: string | string[] | undefined }) => {
  const brand = typeof searchParams.brand === 'string' ? searchParams.brand : undefined;
  const priceParam = typeof searchParams.price === 'string' ? searchParams.price : undefined;
  
  let priceRange: { min: number; max: number } | undefined;
  
  if (priceParam) {
    const priceFilter = priceRanges.find(range => range.slug === priceParam);
    if (priceFilter) {
      priceRange = priceFilter.priceRange;
    }
  }
  
  return { brand, priceRange };
};

export const ensureStartsWith = (stringToCheck: string, startsWith: string) =>
  stringToCheck.startsWith(startsWith) ? stringToCheck : `${startsWith}${stringToCheck}`;

export const validateEnvironmentVariables = () => {
  const requiredEnvironmentVariables = ['SHOPIFY_STORE_DOMAIN', 'SHOPIFY_STOREFRONT_ACCESS_TOKEN'];
  const missingEnvironmentVariables = [] as string[];

  requiredEnvironmentVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      missingEnvironmentVariables.push(envVar);
    }
  });

  if (missingEnvironmentVariables.length) {
    throw new Error(
      `The following environment variables are missing. Your site will not work without them. Read more: https://vercel.com/docs/integrations/shopify#configure-environment-variables\n\n${missingEnvironmentVariables.join(
        '\n'
      )}\n`
    );
  }

  if (
    process.env.SHOPIFY_STORE_DOMAIN?.includes('[') ||
    process.env.SHOPIFY_STORE_DOMAIN?.includes(']')
  ) {
    throw new Error(
      'Your `SHOPIFY_STORE_DOMAIN` environment variable includes brackets (ie. `[` and / or `]`). Your site will not work with them there. Please remove them.'
    );
  }
};

// Utility function to concatenate class names with tolerant typings
export const classNames = (
  ...classes: Array<string | undefined | null | false>
) => classes.filter(Boolean).join(' ');

// Utility function to concatenate class names (alias)
export const cn = classNames; // You can also define it as a separate function if you want

// Usage example (this should be in a comment or separate documentation)
// const exampleClassName = classNames("your-class", condition && "another-class");
