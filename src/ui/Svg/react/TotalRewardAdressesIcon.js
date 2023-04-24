import * as React from "react";
function TotalRewardAdressesIcon({
  title,
  titleId,
  ...props
}, svgRef) {
  return /*#__PURE__*/React.createElement("svg", Object.assign({
    xmlns: "http://www.w3.org/2000/svg",
    className: "icon",
    viewBox: "0 0 1063 1024",
    fill: "currentColor",
    "aria-hidden": "true",
    ref: svgRef,
    "aria-labelledby": titleId
  }, props), title ? /*#__PURE__*/React.createElement("title", {
    id: titleId
  }, title) : null, /*#__PURE__*/React.createElement("path", {
    d: "M90.125 183.879v603.508a145.71 145.71 0 0043.356 103.587 148.792 148.792 0 00104.625 42.901H818.28c39.267 0 76.911-15.447 104.658-42.901a145.71 145.71 0 0043.388-103.587v-410.16c0-33.75-11.78-66.494-33.36-92.65a148.305 148.305 0 00-85.025-50.885V189.72c0-26.416-10.611-51.728-29.498-70.42a101.185 101.185 0 00-71.168-29.175H190.758c-25.637 0-50.333 9.703-69.025 27.13a99.173 99.173 0 00-31.446 66.624h-.162zm698.593 5.841v41.02h-597.96c-10.968 0-21.515-4.317-29.304-12.008a40.792 40.792 0 010-57.992c7.789-7.69 18.336-12.007 29.304-12.007h556.518a41.214 41.214 0 0141.442 40.987zm-76.976 369.14h106.572a29.81 29.81 0 0120.931 8.6 29.142 29.142 0 010 41.441 29.758 29.758 0 01-20.931 8.568H711.742a29.758 29.758 0 01-20.932-8.568 29.142 29.142 0 010-41.44 29.758 29.758 0 0120.932-8.6z"
  }));
}
const ForwardRef = React.forwardRef(TotalRewardAdressesIcon);
export default ForwardRef;