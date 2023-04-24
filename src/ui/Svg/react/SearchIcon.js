import * as React from "react";
function SearchIcon({
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
    d: "M765.746 714.322L969.613 917.96l-51.767 51.653-203.867-203.638A400.984 400.984 0 01456.858 858.7 402.3 402.3 0 0154.387 456.572c0-222.172 180.185-402.185 402.47-402.185a402.3 402.3 0 01402.414 402.127 400.354 400.354 0 01-93.525 257.808zm-308.888 71.273a329.138 329.138 0 00329.252-329.08A329.138 329.138 0 00456.858 127.49a329.138 329.138 0 00-329.31 329.023 329.138 329.138 0 00329.31 329.081z"
  }));
}
const ForwardRef = React.forwardRef(SearchIcon);
export default ForwardRef;