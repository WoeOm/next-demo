import * as React from "react";
function HolderIcon({
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
    d: "M513.915 639.654c204.667 0 378.653 131.5 442.266 314.457l4.35 13.126H67.3c59.73-189.753 237.094-327.621 446.615-327.621zm263.31-553.22v263.27a263.27 263.27 0 01-263.31 263.309 262.96 262.96 0 01-263.309-263.31A263.387 263.387 0 01490.031 87.328l12.428-.894h274.727zm-165.56 349.602a26.292 26.292 0 00-37.127-.776c-24.777 23.767-45.282 34.72-60.623 34.72s-35.846-10.953-60.584-34.72a26.292 26.292 0 00-36.428 37.904c33.632 32.273 65.633 49.36 97.012 49.36 31.38 0 63.38-17.087 97.013-49.321a26.253 26.253 0 00.777-37.167z"
  }));
}
const ForwardRef = React.forwardRef(HolderIcon);
export default ForwardRef;