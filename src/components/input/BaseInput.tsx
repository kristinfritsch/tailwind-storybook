import {
  useState,
  useEffect,
  forwardRef,
  ChangeEvent,
  FocusEvent,
  InputHTMLAttributes,
} from "react";
import cn from "classnames";

import "./input.css";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  type?: "text" | "number" | "email";
  label: string;
  isError?: boolean;
  grow?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      value: valueProp = "",
      onClick,
      onFocus,
      onBlur,
      onChange,
      name,
      label,
      isError,
      grow,
      children,
      ...rest
    }: InputProps,
    ref
  ) => {
    const [focused, setFocused] = useState(false);
    const [filled, setFilled] = useState(false);
    const [value, setValue] = useState(valueProp);

    useEffect(() => {
      setFilled(!!value);
    }, [value]);

    const _handleFocus = (ev: FocusEvent<HTMLInputElement>) => {
      setFocused(true);

      onFocus?.(ev);
    };

    const _handleBlur = (ev: FocusEvent<HTMLInputElement>) => {
      setFocused(false);

      onBlur?.(ev);
    };

    const _handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
      setValue(ev.target.value);

      onChange?.(ev);
    };

    return (
      <div
        className={cn("form-control", {
          focused: focused,
          filled: filled,
          error: isError,
          grow: grow,
        })}
      >
        <label htmlFor={name} className="label">
          {label}
        </label>
        <input
          {...rest}
          id={name}
          className="input"
          onFocus={_handleFocus}
          onBlur={_handleBlur}
          onChange={_handleChange}
          value={value}
          ref={ref}
        />
        {children}
      </div>
    );
  }
);

export default Input;
