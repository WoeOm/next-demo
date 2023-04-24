import * as React from "react";
function SwitchIcon({
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
    d: "M32 512a480 480 0 01960 0 480 480 0 01-960 0zm182.453-86.4c0 .267 0 .693.107 1.067l.107 1.173.106.853.214 1.28.106.747.32 1.28.107.64.32 1.227c.107.213.107.533.16.693.107.427.213.853.427 1.12l.32.853.373 1.067.32.853.427.96.373 1.067c.107.107.213.533.427.64l.533 1.067a2.133 2.133 0 00.427.64l.586 1.173a2.133 2.133 0 00.374.533l.746 1.174.427.64.8 1.066.533.694.694.853.746.853.534.747 1.493 1.493 1.547 1.44.693.64.8.694c.32.32.64.533.96.693l.587.533 1.12.854.64.373c.426.16.693.533 1.066.693.214.107.427.214.64.427l1.067.64c.267.107.48.213.693.427l1.12.533c.214 0 .534.107.694.32.32.213.746.32 1.066.427l.854.426.96.32c.32.107.746.32 1.066.374l.747.32 1.173.373c.214.107.534.107.694.213l1.226.32.694.214 1.333.32.693.106a5.973 5.973 0 001.387.214l.747.053a4.96 4.96 0 001.28.107l1.066.106.854.107 2.133.107h509.173a41.92 41.92 0 000-83.787h-408l26.507-26.667a41.867 41.867 0 10-59.147-59.04L226.667 392.8l-1.44 1.6-.587.64-.747.853a5.6 5.6 0 00-.746.907l-.534.64-.746 1.067-.427.64-.747 1.173c-.106.16-.213.373-.426.533l-.534 1.174a2.133 2.133 0 01-.426.64c-.214.373-.427.64-.534 1.066-.106.214-.213.534-.426.747-.214.32-.267.693-.374 1.067l-.426.853-.32.907-.374 1.066-.32.8-.426 1.12c-.107.214-.107.534-.16.747l-.32 1.173c-.107.214-.107.427-.107.64l-.32 1.334-.107.693a5.92 5.92 0 00-.213 1.333l-.107.854c-.106.373-.106.8-.106 1.173l-.107 1.067-.107 1.066-.106 2.027c0 .64 0 1.387.106 2.027-.106.533 0 .8 0 1.066v.16zm585.654 202.293a5.6 5.6 0 00.693-.906l.533-.64.8-1.067.427-.64c.16-.427.533-.747.693-1.12a2.133 2.133 0 01.427-.587l.587-1.173a2.133 2.133 0 01.426-.64l.534-1.067a1.6 1.6 0 01.373-.746c.213-.32.32-.694.427-1.067l.426-.853.32-.907.32-1.067.32-.8.427-1.066.213-.8.32-1.174c.107-.213.107-.426.107-.64l.32-1.333.107-.693a5.973 5.973 0 00.213-1.334v-.853c.16-.373.16-.8.16-1.173l.107-1.067.106-1.067.107-2.026c0-.64 0-1.387-.107-2.027l-.106-1.067c0-.213 0-.64-.107-.96l-.107-1.226-.053-.8-.213-1.334-.107-.746-.32-1.28c-.107-.214-.107-.427-.107-.64l-.32-1.227-.213-.693a3.68 3.68 0 00-.427-1.12l-.32-.854-.32-1.066-.32-.854-.426-.96-.427-1.066c-.107-.107-.213-.534-.427-.64l-.533-1.067a2.133 2.133 0 00-.373-.64l-.587-1.173-.427-.534c-.213-.48-.533-.8-.693-1.173l-.427-.64-.8-1.067-.533-.693-.693-.853-.747-.854-.64-.746c-.533-.534-.853-1.067-1.387-1.494l-1.6-1.44-.64-.586-.853-.747a5.6 5.6 0 00-.907-.693l-.586-.534-1.12-.853-.64-.373c-.427-.16-.747-.534-1.12-.694a2.133 2.133 0 01-.587-.426l-1.173-.64c-.214-.107-.427-.214-.64-.427l-1.067-.533a1.6 1.6 0 01-.747-.32c-.32-.214-.693-.32-1.066-.427l-.854-.427-.906-.32c-.32-.106-.747-.32-1.067-.373l-.8-.32-1.067-.373-.8-.214-1.173-.32-.747-.213-1.28-.32-.746-.107a5.973 5.973 0 00-1.334-.213l-.8-.053c-.426-.107-.853-.107-1.226-.107l-1.067-.107-.853-.106-2.134-.107H258.4a41.92 41.92 0 100 83.787h408.16L640 669.973a41.867 41.867 0 1059.147 59.094l98.08-97.974 1.386-1.6.64-.64.854-.96z"
  }));
}
const ForwardRef = React.forwardRef(SwitchIcon);
export default ForwardRef;