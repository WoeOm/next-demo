import * as React from "react";
function LockedIcon({
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
    d: "M530.453 98.583c-137.33 0-247.336 100.16-247.336 225.838v100.16h-54.684c-29.953 0-54.683 22.55-54.683 49.798v401.24c0 27.286 24.73 49.798 54.683 49.798h604.078c30.593 0 55.323-22.55 55.323-49.798V474.417c0-27.286-24.73-49.798-55.323-49.798h-54.684v-100.16c0-125.679-109.931-225.838-247.374-225.838zm0 75.28c91.065.338 164.69 67.65 164.69 150.558v100.16H365.802v-100.16c0-82.984 74.227-150.559 164.69-150.559z"
  }));
}
const ForwardRef = React.forwardRef(LockedIcon);
export default ForwardRef;