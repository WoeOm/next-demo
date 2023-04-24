import * as React from "react";
function CheckCircleIcon({
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
    d: "M512 32c265.12 0 480 214.88 480 480S777.024 992 512 992 32 777.024 32 512 246.88 32 512 32zm0 68.576C284.736 100.576 100.576 284.8 100.576 512c0 227.168 184.224 411.424 411.424 411.424 227.168 0 411.424-184.16 411.424-411.424 0-227.264-184.16-411.424-411.424-411.424zm206.208 222.528l48.48 48.48-274.752 274.784-48.48 48.512L273.76 525.184l48.48-48.512 121.184 121.216 274.784-274.784z"
  }));
}
const ForwardRef = React.forwardRef(CheckCircleIcon);
export default ForwardRef;