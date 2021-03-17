import { ButtonHTMLAttributes } from "react";
import "./button.css";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  /**
   * Button contents
   */
  label: string;
  disabled?: boolean;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  size = "medium",
  variant = "primary",
  children,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button
      className={`button ${size} ${variant}`}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
};
