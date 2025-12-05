import React, { useState, useRef, useEffect } from 'react';
import styles from './DropDown.module.css';

export interface DropDownOption {
  value: string;
  label: string;
}

export interface DropDownProps {
  options: DropDownOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  className?: string;
}

const DropDown: React.FC<DropDownProps> = ({
  options,
  value,
  onChange,
  placeholder = 'Select...',
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const selectedOption = options.find((opt) => opt.value === value);

  const handleSelect = (optionValue: string) => {
    onChange?.(optionValue);
    setIsOpen(false);
  };

  return (
    <div className={`${styles.dropdown} ${className || ''}`} ref={dropdownRef}>
      <button
        type="button"
        className={styles.trigger}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="listbox"
      >
        <span>{selectedOption ? selectedOption.label : placeholder}</span>
        <svg
          className={`${styles.chevron} ${isOpen ? styles.chevronOpen : ''}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path d="m4 6 4 4 4-4" />
        </svg>
      </button>
      {isOpen && (
        <ul className={styles.menu} role="listbox">
          {options.map((option) => (
            <li key={option.value} role="option">
              <button
                type="button"
                className={`${styles.option} ${value === option.value ? styles.optionSelected : ''}`}
                onClick={() => handleSelect(option.value)}
                aria-selected={value === option.value}
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropDown;



