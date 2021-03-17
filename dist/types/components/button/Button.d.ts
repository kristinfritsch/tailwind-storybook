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
export declare const Button: ({ size, variant, children, disabled, ...props }: ButtonProps) => JSX.Element;
