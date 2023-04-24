import * as React from "react";
function ValidatorIcon({
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
    d: "M672.604 534.287c122.867 0 222.454 102.486 222.454 228.916v183.141H138.633v-183.14c0-126.43 99.586-228.917 222.454-228.917h311.517zM455.62 626.044H353.464l119.72 269.886h89.602l118.269-269.886H578.859l-60.398 158.328-62.842-158.328zm61.226-549.63c110.606 0 200.25 92.254 200.25 206.05 0 113.795-89.644 206.007-200.25 206.007-110.605 0-200.25-92.212-200.25-206.008S406.24 76.414 516.846 76.414z"
  }));
}
const ForwardRef = React.forwardRef(ValidatorIcon);
export default ForwardRef;