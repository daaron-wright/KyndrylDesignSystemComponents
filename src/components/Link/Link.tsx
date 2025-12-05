import React from 'react';
import styles from './Link.module.css';

export type LinkVariant = 'inline' | 'inlineSecondary';
export type LinkSize = "sm" | "md" | "lg";

export interface LinkProps
  extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  variant?: LinkVariant;
  size?: LinkSize;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  label?: string;
  external?: boolean; // adds target/_blank and rel
}

export const Link = React.forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      children,
      variant = 'inline',
      size = "md",
      startIcon,
      endIcon,
      label,
      className,
      external = false,
      href,
      ...rest
    },
    ref
  ) => {
    const classes = [styles.link, styles[variant],styles[size], className].filter(Boolean).join(' ');

    return (
      <a
        ref={ref}
        className={classes}
        href={href}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...rest}
      >
        {startIcon && <span className={styles.startIcon}>{startIcon}</span>}
        <span className={styles.label}>{label}</span>
        {endIcon && <span className={styles.endIcon}>{endIcon}</span>}
      </a>
    );
  }
);

Link.displayName = 'Link';

export default Link;
