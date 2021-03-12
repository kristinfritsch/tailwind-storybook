import "./button.css";

export interface ButtonProps {
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({ size = "medium", label, ...props }: ButtonProps) => {
  return (
    <button className={`button ${size}`} {...props}>
      {label}
    </button>
  );
};
