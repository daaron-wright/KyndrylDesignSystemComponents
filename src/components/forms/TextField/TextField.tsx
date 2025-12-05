// src/components/forms/TextField/TextField.tsx
import React, { useState } from 'react';
import styles from './TextField.module.css';

export interface TextFieldProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type' | 'onChange'> {
  id: string;
  label: string;
  type?: 'text' | 'email' | 'password';
  error?: string;
  hint?: string;
  onChange?: (value: string) => void;}

export const TextField: React.FC<TextFieldProps> = ({
  id,
  label,
  type = 'text',
  error,
  hint,
  onChange,
  ...rest
}) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange?.(e.target.value);
  };

  const [showPassword, setShowPassword] = useState(false);

  const isPassword = type === 'password';
  const isEmail = type === 'email';
  const inputType = isPassword && showPassword ? 'text' : type;
  const describedBy = [
    hint ? `${id}-hint` : undefined,
    error ? `${id}-error` : undefined,
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>{label}</label>
      <div className={styles.inputWrapper}>
        <input
          className={`${styles.input} ${error ? styles.inputError : ''}`}
          id={id}
          name={id}
          type={inputType}
          aria-invalid={Boolean(error)}
          aria-describedby={describedBy || undefined}
          onChange={handleChange}
          {...rest}
        />
        {isPassword && (
          <button
            type="button"
            className={styles.eyeButton}
            onClick={() => setShowPassword((s) => !s)}
            aria-pressed={showPassword}
            aria-label={showPassword ? 'Hide password' : 'Show password'}
          >
            {showPassword ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
                  <path d="M25 20.0001C25 22.7567 22.7567 25.0001 20 25.0001C17.2433 25.0001 15 22.7567 15 20.0001C15 17.2434 17.2433 15.0001 20 15.0001C22.7567 15.0001 25 17.2434 25 20.0001ZM40 19.2517C40 19.2517 32.9133 33.3334 20.025 33.3334C8.05833 33.3334 0 19.2517 0 19.2517C0 19.2517 7.41 6.66675 20.025 6.66675C32.8483 6.66675 40 19.2517 40 19.2517ZM28.3333 20.0001C28.3333 15.4051 24.595 11.6667 20 11.6667C15.405 11.6667 11.6667 15.4051 11.6667 20.0001C11.6667 24.5951 15.405 28.3334 20 28.3334C24.595 28.3334 28.3333 24.5951 28.3333 20.0001Z" fill="#3D3C3C"/>
                  <path d="M4 4L36 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="20" cy="20" r="3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M25 20.0001C25 22.7567 22.7567 25.0001 20 25.0001C17.2433 25.0001 15 22.7567 15 20.0001C15 17.2434 17.2433 15.0001 20 15.0001C22.7567 15.0001 25 17.2434 25 20.0001ZM40 19.2517C40 19.2517 32.9133 33.3334 20.025 33.3334C8.05833 33.3334 0 19.2517 0 19.2517C0 19.2517 7.41 6.66675 20.025 6.66675C32.8483 6.66675 40 19.2517 40 19.2517ZM28.3333 20.0001C28.3333 15.4051 24.595 11.6667 20 11.6667C15.405 11.6667 11.6667 15.4051 11.6667 20.0001C11.6667 24.5951 15.405 28.3334 20 28.3334C24.595 28.3334 28.3333 24.5951 28.3333 20.0001Z" fill="#3D3C3C"/>
                    </svg>
                )}
          </button>
        )}
      </div>
      {hint && <p id={`${id}-hint`} className={styles.hint}>{hint}</p>}
      {error && (
        <p id={`${id}-error`} className={styles.error} role="alert">
          <span className={styles.errorBadge} aria-hidden="true">!</span>
          <span className={styles.errorText}>{error}</span>
        </p>
      )}
    </div>
  );
};
