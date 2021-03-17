'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var jsxRuntime = require('react/jsx-runtime');
require('./button.css.js');

/**
 * Primary UI component for user interaction
 */
const Button = ({ size = "medium", variant = "primary", children, disabled, ...props }) => {
    return (jsxRuntime.jsx("button", Object.assign({ className: `button ${size} ${variant}`, disabled: disabled }, props, { children: children }), void 0));
};

exports.Button = Button;
