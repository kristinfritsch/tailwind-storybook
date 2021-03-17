import { InputHTMLAttributes } from "react";
import "./input.css";
export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    /** test **/
    label: string;
    /** test **/
    isError?: boolean;
    /** test **/
    grow?: boolean;
}
export declare const Input: import("react").ForwardRefExoticComponent<InputProps & import("react").RefAttributes<HTMLInputElement>>;
