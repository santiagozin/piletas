import type { BrandFilterItem, PriceFilterItem, SortFilterItem } from 'lib/constants';

export type PathFilterItem = { title: string; path: string };

export type ListItem = SortFilterItem | PathFilterItem | PriceFilterItem | BrandFilterItem; 