import * as React from "react";
function SerarchIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon",
    viewBox: "0 0 1024 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M955.733 905.626L758.067 708.164A388.198 388.198 0 00848.76 458.24c0-215.381-174.728-389.973-390.246-389.973S68.267 242.859 68.267 458.24s174.728 389.94 390.246 389.94c94.788 0 181.692-33.793 249.31-89.942l197.734 197.495 50.176-50.107zM777.796 458.24c0 176.196-142.95 319.044-319.283 319.044-176.333 0-319.283-142.848-319.283-319.044 0-176.23 142.95-319.078 319.283-319.078 176.333 0 319.283 142.848 319.283 319.078z"
  }));
}
const ForwardRef = React.forwardRef(SerarchIcon);
export default ForwardRef;