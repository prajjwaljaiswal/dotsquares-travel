export type SortOption = 'popularity' | 'price_asc' | 'price_desc' | 'rating' | 'newest';

export interface SortableItem {
  id: string | number;
  price: number;
  rating: number;
  popularity: number;
  createdAt: string;
}

export function sortItems<T extends SortableItem>(items: T[], sortBy: SortOption): T[] {
  const sorted = [...items];
  
  switch (sortBy) {
    case 'popularity':
      return sorted.sort((a, b) => b.popularity - a.popularity);
    case 'price_asc':
      return sorted.sort((a, b) => a.price - b.price);
    case 'price_desc':
      return sorted.sort((a, b) => b.price - a.price);
    case 'rating':
      return sorted.sort((a, b) => b.rating - a.rating);
    case 'newest':
      return sorted.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
    default:
      return sorted;
  }
}