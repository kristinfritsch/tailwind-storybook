'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
var react = require('react');
var index = require('../../../node_modules/classnames/index.js');
require('./input.css.js');

const Input = react.forwardRef(({ value: valueProp = "", onClick, onFocus, onBlur, onChange, name, label, isError, grow, children, ...rest }, ref) => {
    const [focused, setFocused] = react.useState(false);
    const [filled, setFilled] = react.useState(false);
    const [value, setValue] = react.useState(valueProp);
    react.useEffect(() => {
        setFilled(!!value);
    }, [value]);
    const _handleFocus = (ev) => {
        setFocused(true);
        onFocus?.(ev);
    };
    const _handleBlur = (ev) => {
        setFocused(false);
        onBlur?.(ev);
    };
    const _handleChange = (ev) => {
        setValue(ev.target.value);
        onChange?.(ev);
    };
    return (jsxRuntime.jsx("div", Object.assign({ className: index['default']("form-control", {
            focused: focused,
            filled: filled,
            error: isError,
            grow: grow,
        }) }, { children: jsxRuntime.jsxs("label", { children: [jsxRuntime.jsx("span", Object.assign({ className: "label" }, { children: label }), void 0),
                jsxRuntime.jsx("input", Object.assign({ id: name, className: "input", onFocus: _handleFocus, onBlur: _handleBlur, onChange: _handleChange, value: value }, rest, { ref: ref }), void 0), children] }, void 0) }), void 0));
});

exports.Input = Input;
