import * as React from "react";
function SubIcon({
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
    d: "M512 45.966A466.034 466.034 0 01978.034 512l-.233 14.564A466.034 466.034 0 0145.966 512l.233-14.564A466.034 466.034 0 01512 45.966zm145.636 434.11a13.107 13.107 0 00-17.36 0v69.556h-203.25c-8.62 0-12.932 4.37-12.932 13.05v104.39c0 8.739 4.311 13.05 12.933 13.05h198.938v73.983c0 8.621 4.31 12.99 12.99 12.99 4.311 0 4.311-4.369 8.622-4.369l151.345-139.17a13.282 13.282 0 000-17.359zM367.82 271.295c-4.311 0-8.68 0-8.68 4.369L229.467 393.16a13.282 13.282 0 000 17.36l129.732 113.072a13.107 13.107 0 0017.302 0c4.31-4.311 4.31-4.311 4.31-8.68v-47.827H584.12c8.621 0 12.932-4.37 12.932-13.049v-104.45c0-8.738-4.31-13.049-12.99-13.049H380.81v-52.196c0-8.68-4.31-13.048-12.932-13.048z"
  }));
}
const ForwardRef = React.forwardRef(SubIcon);
export default ForwardRef;