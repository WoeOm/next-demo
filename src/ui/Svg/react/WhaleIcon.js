import * as React from "react";
function WhaleIcon({
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
    d: "M615.95 953.945A451.8 451.8 0 00962 514.025C962 264.365 760.535 62 512 62S62 264.365 62 514.025a451.8 451.8 0 00346.05 439.92A302.535 302.535 0 00461.915 839.6c16.2-68.625-34.245-97.515-122.265-148.005a2998.665 2998.665 0 01-52.605-30.6C161.585 585.8 167.93 354.5 167.93 354.5c13.5 36.765 71.055 124.65 211.365 124.65 120.465 0 131.85 49.86 132.66 63.855.765-13.95 12.06-63.81 132.66-63.81 69.57 0 118.8-21.645 152.415-47.88 34.155-26.685 52.2-58.32 59.04-76.815 0 0 6.3 231.21-119.115 306.45-18.585 11.115-36.045 21.15-52.29 30.42-88.2 50.535-138.825 79.515-122.58 148.23a302.535 302.535 0 0053.91 114.345z"
  }));
}
const ForwardRef = React.forwardRef(WhaleIcon);
export default ForwardRef;