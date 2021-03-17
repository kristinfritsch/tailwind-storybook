import { InputHTMLAttributes } from "react";
import "./checkbox.css";
export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: React.ReactNode;
}
export declare const Checkbox: import("react").ForwardRefExoticComponent<CheckboxProps & import("react").RefAttributes<HTMLInputElement>>;
