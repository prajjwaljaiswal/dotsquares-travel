import { Select } from '@/components/ui';
import { SortOption } from '@/lib/sorting';
import styles from './SortDropdown.module.css';

export interface SortDropdownProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  className?: string;
}

const sortOptions = [
  { value: 'popularity', label: 'Most Popular' },
  { value: 'price_asc', label: 'Price: Low to High' },
  { value: 'price_desc', label: 'Price: High to Low' },
  { value: 'rating', label: 'Highest Rated' },
  { value: 'newest', label: 'Newest First' },
];

export function SortDropdown({ value, onChange, className }: SortDropdownProps) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value as SortOption);
  };

  return (
    <div className={`${styles.container} ${className || ''}`}>
      <Select
        label="Sort by"
        value={value}
        onChange={handleChange}
        options={sortOptions}
        size="md"
      />
    </div>
  );
}