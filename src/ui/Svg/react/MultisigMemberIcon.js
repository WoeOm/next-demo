import * as React from "react";
function MultisigMemberIcon({
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
    d: "M608.156 530.139c23.962 0 46.992 4.155 68.43 11.806L537.24 681.328l-3.961 4.66-1.554 2.136-2.874 4.583-1.281 2.408-2.524 5.903-28.157 84.197c-15.223 45.593 28.118 88.935 73.672 73.71l82.333-27.456 5.437-2.136 5.204-2.641 2.641-1.593 4.971-3.611 1.942-1.631 135.344-135.228c5.437 19.03 8.31 39.225 8.31 60.118v171.695H107.559V744.747c0-118.527 93.4-214.608 208.55-214.608zm287.232-124.664l54.914 54.914a19.418 19.418 0 010 27.496L647.924 790.263l-1.942 1.632-2.64 1.592-2.72 1.165-82.332 27.457-3.029.738-2.99.272-2.952-.233-2.252-.389-1.865-.66-3.34-1.67-2.834-2.136-2.059-2.213-1.98-2.99-1.166-2.525-.893-3.495-.233-3.301c0-1.942.35-3.962 1.01-5.981l28.156-84.197 1.282-2.408 1.553-2.136 303.233-303.31a19.418 19.418 0 0127.457 0zm-13.71 41.166l-27.456 27.496 27.457 27.457 27.457-27.457zM462.133 100.883c103.692 0 187.734 86.488 187.734 193.171 0 106.683-84.042 193.132-187.734 193.132s-187.695-86.45-187.695-193.132 84.002-193.171 187.695-193.171z"
  }));
}
const ForwardRef = React.forwardRef(MultisigMemberIcon);
export default ForwardRef;