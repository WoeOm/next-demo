import * as React from "react";
function ZoomIcon({
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
    d: "M793.6 136.533a94.14 94.14 0 0193.594 86.87l.273 6.997v563.2a94.208 94.208 0 01-86.904 93.594l-6.963.273H230.4a94.14 94.14 0 01-93.594-86.904l-.273-6.963V230.4a94.208 94.208 0 0186.87-93.594l6.997-.273h563.2zm0 46.934H230.4a47.104 47.104 0 00-46.626 41.472l-.307 5.461v563.2a47.104 47.104 0 0041.472 46.592l5.461.341h563.2a47.104 47.104 0 0046.592-41.472l.341-5.461V230.4a47.104 47.104 0 00-41.472-46.626l-5.461-.307zM465.067 535.484a21.3 21.3 0 0113.653 4.505l2.73 2.492 2.56 2.73c2.288 2.902 3.755 6.35 4.336 10.002l.204 3.72v211.183c0 14.063-9.42 23.416-23.483 23.416-12.493 0-21.3-7.407-23.109-18.91l-.34-4.506v-154.93L282.043 774.757l-32.87-32.87 159.573-159.47H253.85c-14.063 0-23.45-9.422-23.45-23.485 0-12.527 7.407-21.299 18.978-23.108l4.506-.341h211.183zM558.933 230.4c12.527 0 21.3 7.407 23.109 18.944l.34 4.506v154.897L741.99 249.173l32.837 32.837-159.574 159.607h154.863a23.415 23.415 0 0123.109 19.217l.375 4.233-.341 4.505a21.436 21.436 0 01-18.637 18.603l-4.506.341H558.933a21.333 21.333 0 01-13.653-4.505l-2.73-2.492-2.56-2.73a21.3 21.3 0 01-4.336-10.002l-.204-3.72V253.85c0-14.063 9.42-23.45 23.483-23.45z"
  }));
}
const ForwardRef = React.forwardRef(ZoomIcon);
export default ForwardRef;