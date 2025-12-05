
import React from "react";
// small local helper to concatenate class names (avoids issues with default imports)
const cx = (...parts: Array<string | false | null | undefined>) =>
  parts.filter(Boolean).join(" ");
import styles from "./Button.module.css";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "outline"
  | "ghost"
  | "danger"
  | "link";

export type ButtonSize = "sm" | "md" | "lg" | "xlg" | "xxlg" | "icon";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  loading?: boolean;

  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;

  /** Render the button as another element (e.g. <a>) */
  as?: React.ElementType;
}

/**
* Polymorphic Button Component
*/
export const Button = React.forwardRef<HTMLElement, ButtonProps>(
  (
    {
      children,
      variant = "primary",
      size = "md",
      fullWidth = false,
      loading = false,
      startIcon,
      endIcon,
      as: Component = "button",
      disabled,
      className,
      ...rest
    },
    ref
  ) => {
    const isDisabled = disabled || loading;

    return (
      <Component
        ref={ref as any}
        className={cx(
          styles.root,
          styles[variant],
          styles[size],
          (fullWidth && styles.fullWidth) || undefined,
          (loading && styles.loading) || undefined,
          (isDisabled && styles.disabled) || undefined,
          className as string | undefined
        )}
        disabled={Component === "button" ? isDisabled : undefined}
        aria-disabled={Component !== "button" ? isDisabled : undefined}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading && <span className={styles.spinner} aria-hidden />}
        {!loading && startIcon && (
          <span className={styles.startIcon}>{startIcon}</span>
        )}
        <span className={styles.label}>{children}</span>
        {!loading && endIcon && (
          <span className={styles.endIcon}>{endIcon}</span>
        )}
      </Component>
    );
  }
);

Button.displayName = "Button";
 