import * as React from "react";
function QrCodeIcon({
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
    d: "M512 75.093c241.282 0 436.907 195.625 436.907 436.907S753.282 948.907 512 948.907 75.093 753.282 75.093 512 270.718 75.093 512 75.093zm218.453 480.598H555.691v174.762l43.69-43.69V599.38h87.382l43.69-43.69zm-262.144 0H293.547v174.762h174.762V555.691zm-43.69 43.69v87.382h-87.382V599.38h87.382zm43.69-305.834H293.547v174.762h174.762V293.547zm262.144 0H555.691v174.762h174.762V293.547zm-305.834 43.69v87.382h-87.382v-87.382h87.382zm262.144 0v87.382H599.38v-87.382h87.382z"
  }));
}
const ForwardRef = React.forwardRef(QrCodeIcon);
export default ForwardRef;