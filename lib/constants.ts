export type FilterType = 'SORT' | 'BRAND' | 'PRICE_RANGE';

export type PriceRange = {
  min: number;
  max: number;
  label: string;
};

export type FilterItem = {
  title: string;
  slug: string | null;
  type: FilterType;
  value?: string | PriceRange;
};

export type SortFilterItem = FilterItem & {
  sortKey: 'RELEVANCE' | 'BEST_SELLING' | 'CREATED_AT' | 'PRICE';
  reverse: boolean;
};

export type BrandFilterItem = FilterItem & {
  brandId: string;
};

export type PriceFilterItem = FilterItem & {
  priceRange: PriceRange;
};

export const defaultSort: SortFilterItem = {
  title: 'Relevancia',
  slug: null,
  type: 'SORT',
  sortKey: 'RELEVANCE',
  reverse: false
};

export const sorting: SortFilterItem[] = [
  defaultSort,
  { title: 'Más vendidos', slug: 'trending-desc', type: 'SORT', sortKey: 'BEST_SELLING', reverse: false },
  { title: 'Últimos llegados', slug: 'latest-desc', type: 'SORT', sortKey: 'CREATED_AT', reverse: true },
  { title: 'Precio: Bajo a alto', slug: 'price-asc', type: 'SORT', sortKey: 'PRICE', reverse: false },
  { title: 'Precio: Alto a bajo', slug: 'price-desc', type: 'SORT', sortKey: 'PRICE', reverse: true }
];

export const TAGS = {
  collections: 'collections',
  products: 'products',
  cart: 'cart'
};

export const HIDDEN_PRODUCT_TAG = 'nextjs-frontend-hidden';
export const DEFAULT_OPTION = 'Default Title';
export const SHOPIFY_GRAPHQL_API_ENDPOINT = '/api/2023-01/graphql.json';

export const brandFilters: BrandFilterItem[] = [
  { title: 'Todas las marcas', slug: null, type: 'BRAND', brandId: '' },
  { title: 'Pelopincho', slug: 'pelopincho', type: 'BRAND', brandId: 'pelopincho' },
  { title: 'Bestway', slug: 'bestway', type: 'BRAND', brandId: 'bestway' },
  { title: 'Intex', slug: 'intex', type: 'BRAND', brandId: 'intex' }
];

export const priceRanges: PriceFilterItem[] = [
  { 
    title: 'Todos los precios', 
    slug: null, 
    type: 'PRICE_RANGE',
    priceRange: { min: 0, max: Infinity, label: 'Todos los precios' }
  },
  {
    title: 'Hasta $50.000',
    slug: '0-50000',
    type: 'PRICE_RANGE',
    priceRange: { min: 0, max: 50000, label: 'Hasta $50.000' }
  },
  {
    title: '$50.000 - $100.000',
    slug: '50000-100000',
    type: 'PRICE_RANGE',
    priceRange: { min: 50000, max: 100000, label: '$50.000 - $100.000' }
  },
  {
    title: 'Más de $100.000',
    slug: '100000-0',
    type: 'PRICE_RANGE',
    priceRange: { min: 100000, max: 0, label: 'Más de $100.000' }
  }
];
