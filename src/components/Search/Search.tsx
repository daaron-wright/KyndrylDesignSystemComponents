import React from 'react';
import styles from './Search.module.css';

export interface SearchProps {
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  onSearch?: (value: string) => void;
  className?: string;
}

const Search: React.FC<SearchProps> = ({
  placeholder = 'Search...',
  value = '',
  onChange,
  onSearch,
  className,
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearch?.(value);
    }
  };

  return (
    <div className={`${styles.search} ${className || ''}`}>
      <svg
        className={styles.icon}
        width="20"
        height="20"
        viewBox="0 0 20 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="9" cy="9" r="6" />
        <path d="m15 15-3-3" />
      </svg>
      <input
        type="text"
        className={styles.input}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        aria-label="Search"
      />
    </div>
  );
};

export default Search;



