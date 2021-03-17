'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
require('./checkbox.css.js');

const Checkbox = react.forwardRef(({ checked: checkedProp, label, onChange, ...rest }, ref) => {
    const [checked, setChecked] = react.useState(!!checkedProp);
    const _handleChange = (ev) => {
        setChecked(ev.target.checked);
        onChange?.(ev);
    };
    return (jsxRuntime.jsxs("label", Object.assign({ className: "checkbox-container" }, { children: [jsxRuntime.jsx("input", Object.assign({}, rest, { type: "checkbox", className: "checkbox-input", checked: checked, onChange: _handleChange, ref: ref }), void 0),
            jsxRuntime.jsx("span", Object.assign({ className: "checkbox" }, { children: checked && (jsxRuntime.jsx("svg", Object.assign({ xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 20 20", fill: "currentColor", "aria-hidden": true }, { children: jsxRuntime.jsx("path", { fillRule: "evenodd", d: "M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z", clipRule: "evenodd" }, void 0) }), void 0)) }), void 0),
            label && jsxRuntime.jsx("span", Object.assign({ className: "ml-3" }, { children: label }), void 0)] }), void 0));
});

exports.Checkbox = Checkbox;
