import "./button.css";

export interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  type?: "primary" | "secondary";
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
  type = "primary",
  label,
  disabled,
  ...props
}: ButtonProps) => {
  return (
    <button className={`button ${size} ${type}`} disabled={disabled} {...props}>
      {label}
    </button>
  );
};
