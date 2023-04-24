import * as React from "react";
function SackIcon({
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
    d: "M515.14 256a409.6 409.6 0 01405.504 351.676l35.465 248.251A102.4 102.4 0 01854.733 972.8H169.267A102.4 102.4 0 0167.891 855.927l35.499-248.251a409.6 409.6 0 01392.192-351.471L515.14 256zm17.203 153.6H492.17v42.257h-10.923l-19.456.376-16.18.682a186.368 186.368 0 00-22.8 2.458 70.656 70.656 0 00-32.564 15.394c-9.796 8.192-17.544 18.466-23.279 30.788a88.064 88.064 0 00-8.567 37.41c0 14.37 3.584 28.024 10.786 40.96 9.455 16.726 23.006 28.126 40.653 34.304 10.138 3.516 19.695 5.7 28.672 6.588l13.858.82 21.368.409 18.432.102v70.827H374.067v52.395H492.17v43.11h40.174v-43.11l41.131-.444c16.691-.615 30.652-3.072 41.916-7.51 11.264-4.369 20.958-11.127 29.15-20.206 14.029-16.145 21.06-35.5 21.06-58.095 0-13.79-2.628-27.307-7.85-40.482a69.973 69.973 0 00-36.728-37.41 110.217 110.217 0 00-31.847-9.012l-9.625-.887-12.664-.615-24.78-.478h-9.763v-66.013h114.62v-52.36h-114.62V409.6zm0 212.548c16.965.58 28.911 2.492 35.738 5.7 13.414 6.486 20.105 16.726 20.105 30.823a30.89 30.89 0 01-7.578 20.48 34.475 34.475 0 01-19.354 11.64c-5.495 1.16-12.765 1.877-21.81 2.116l-7.1.068v-70.827zm-40.174-117.93v66.013l-17.75-.682-6.758-.683c-21.572-3.481-32.324-14.2-32.324-32.085 0-18.5 9.625-28.775 28.91-30.823 3.755-.443 7.954-.785 12.63-1.092l15.292-.683zM633.959 51.2a51.2 51.2 0 0145.806 74.07l-19.558 39.15a165.683 165.683 0 01-296.414 0l-19.558-39.117A51.2 51.2 0 01390.042 51.2h243.916z"
  }));
}
const ForwardRef = React.forwardRef(SackIcon);
export default ForwardRef;