import Grid from 'components/grid';
import { ProductGridItems } from 'components/layout/product-grid-items';
import { defaultSort, sorting } from 'lib/constants';
import { getProducts } from 'lib/shopify';
import { parseFiltersFromSearchParams } from 'lib/utils';

export const metadata = {
  title: 'Search',
  description: 'Search for products in the store.'
};

export const dynamic = 'force-dynamic';
export const revalidate = 60;

type SearchPageProps = {
  params: Promise<{ [key: string]: string }>;
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}

export default async function SearchPage({ params, searchParams }: SearchPageProps) {
  try {
    const resolvedParams = await params;
    const resolvedSearchParams = await searchParams;
    const { sort, q: searchValue } = resolvedSearchParams as { [key: string]: string };
    const { sortKey, reverse } = sorting.find((item) => item.slug === sort) || defaultSort;
    
    // Parsear filtros de marca y precio
    const { brand, priceRange } = parseFiltersFromSearchParams(resolvedSearchParams);

    const productsPromise = getProducts({ 
      sortKey, 
      reverse, 
      query: searchValue,
      brand,
      priceRange
    });
    const timeoutPromise = new Promise((_, reject) =>
      setTimeout(() => reject(new Error('Timeout')), 5000)
    );

    const products = await Promise.race([productsPromise, timeoutPromise]) as Awaited<ReturnType<typeof getProducts>>;
    const resultsText = products.length > 1 ? 'resultados' : 'resultado';

    return (
      <>
        {searchValue ? (
          <p className="mb-4">
            {products.length === 0
              ? 'No hay productos que coincidan con '
              : `Mostrando ${products.length} ${resultsText} para `}
            <span className="font-bold">&quot;{searchValue}&quot;</span>
          </p>
        ) : null}
        {products.length > 0 ? (
          <Grid className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-20">
            <ProductGridItems products={products} />
          </Grid>
        ) : null}
      </>
    );
  } catch (error) {

    return (
      <p className="mb-4">
        Error al cargar los productos. Por favor, intente nuevamente.
      </p>
    );
  }
}
