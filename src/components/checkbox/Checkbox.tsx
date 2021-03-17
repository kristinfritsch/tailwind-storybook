import { ChangeEvent, forwardRef, InputHTMLAttributes, useState } from "react";

import "./checkbox.css";

export interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: React.ReactNode;
}

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ checked: checkedProp, label, onChange, ...rest }, ref) => {
    const [checked, setChecked] = useState(!!checkedProp);
    const _handleChange = (ev: ChangeEvent<HTMLInputElement>) => {
      setChecked(ev.target.checked);

      onChange?.(ev);
    };

    return (
      <label className="checkbox-container">
        <input
          {...rest}
          type="checkbox"
          className="checkbox-input"
          checked={checked}
          onChange={_handleChange}
          ref={ref}
        />
        <span className="checkbox">
          {checked && (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              aria-hidden
            >
              <path
                fillRule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </span>
        {label && <span className="ml-3">{label}</span>}
      </label>
    );
  }
);
