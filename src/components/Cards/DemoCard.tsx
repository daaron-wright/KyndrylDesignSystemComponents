
// src/components/cards/DemoCard/DemoCard.tsx
import React from 'react';
import styles from './DemoCard.module.css';

export interface DemoCardProps {
  id?: string;
  title: string;
  description?: string;
  imageSrc?: string;
  imageAlt?: string;
  meta?: Array<{ label: string; variant?: 'default' | 'info' | 'success' | 'warning' | 'danger' }>;
  primaryAction?: { label: string; onClick?: () => void; href?: string; ariaLabel?: string };
  secondaryAction?: { label: string; onClick?: () => void; href?: string; ariaLabel?: string };
  onCardClick?: () => void;
  href?: string;
  variant?: 'default' | 'outlined' | 'elevated';
  loading?: boolean;
  footerSlot?: React.ReactNode;
  tabIndex?: number;
}

const DemoCard: React.FC<DemoCardProps> = ({
  id,
  title,
  description,
  imageSrc,
  imageAlt,
  meta,
  primaryAction,
  secondaryAction,
  onCardClick,
  href,
  variant = 'default',
  loading = false,
  footerSlot,
  tabIndex,
}) => {
  const interactive = Boolean(onCardClick || href);
  const RootTag: any = href ? 'a' : 'div';
  const rootProps = href
    ? { href, 'aria-label': title }
    : interactive
    ? { role: 'button', tabIndex: tabIndex ?? 0, 'aria-label': title, onClick: onCardClick }
    : {};

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (!interactive || href) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onCardClick?.();
    }
  };

  const cardClass =
    `${styles.card} ` +
    (variant === 'outlined' ? styles.cardOutlined : variant === 'elevated' ? styles.cardElevated : '');

  if (loading) {
    return (
      <div className={`${styles.card} ${styles.skeleton}`} aria-busy="true" aria-live="polite">
        <div className={styles.imageSkeleton} />
        <div className={styles.body}>
          <div className={styles.titleSkeleton} />
          <div className={styles.textSkeleton} />
          <div className={styles.textSkeleton} />
        </div>
      </div>
    );
  }

  return (
    <RootTag
      id={id}
      className={cardClass}
      onKeyDown={interactive ? handleKeyDown : undefined}
      {...rootProps}
    >
      {imageSrc && (
        <div className={styles.media}>
          <img className={styles.image} src={imageSrc} alt={imageAlt || ''} />
        </div>
      )}

      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>

        {description && <p className={styles.description}>{description}</p>}

     

        <div className={styles.metaContainer}>
          {meta?.length ? (
            <ul className={styles.meta} aria-label="Demo metadata">
              {meta.map((m, i) => (
                <li
                  key={`${m.label}-${i}`}
                  className={`${styles.badge} ${
                    m.variant ? styles[`badge_${m.variant}`] : styles.badge_default
                  }`}
                >
                  {m.label}
                </li>
              ))}
            </ul>
          ) : null}

          <svg className={styles.caretIcon} width="21" height="40" viewBox="0 0 21 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0.410049 39.5816C-0.136684 39.0237 -0.136684 38.1192 0.410049 37.5613L17.6201 20L0.410049 2.43872C-0.136684 1.88083 -0.136684 0.976311 0.410049 0.418419C0.956783 -0.139473 1.84321 -0.139473 2.38995 0.418419L20.5899 18.9898C21.1367 19.5477 21.1367 20.4523 20.5899 21.0102L2.38995 39.5816C1.84321 40.1395 0.956783 40.1395 0.410049 39.5816Z" fill="#FF462D"/>
          </svg>
        </div>


        {footerSlot && <div className={styles.footer}>{footerSlot}</div>}
      </div>
    </RootTag>
  );
};

export default DemoCard;
