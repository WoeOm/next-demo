import * as React from "react";
function StakeIcon({
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
    d: "M512 801.417l-.239 3.822-.341 2.185c-7.85 39.014-91.068 80.043-208.009 80.043-119.091 0-203.196-42.565-208.316-82.228l-.273-3.822V748.68c35.67 36.693 115.61 62.293 208.555 62.293 61.406 0 117.077-11.128 158.106-29.252l8.362-3.892 9.66-5.051 7.544-4.438 7.304-4.778 5.973-4.438a120.948 120.948 0 006.554-5.495l5.12-4.95v52.737zm77.107-664.884c187.631 0 339.934 152.303 339.934 339.934S776.738 816.401 589.073 816.401a343.023 343.023 0 01-49.493-3.584l.819-5.666.273-5.734v-314.47c-38.23-58.028-117.316-87.007-237.227-87.007-15.701 0-31.13.717-46.08 2.117 33.929-151.894 169.609-265.524 331.708-265.524zM512 705.81c0 2.662-.375 5.29-1.092 7.953l-1.57 4.676-2.287 4.643-2.15 3.515-3.858 5.086-3.55 3.925-4.164 3.994-4.437 3.755-6.895 5.12-4.267 2.867-5.564 3.413-10.376 5.564-12.288 5.632-10.308 4.096-13.449 4.574c-33.485 10.547-75.196 17.237-122.368 17.237-119.091 0-203.196-42.564-208.316-82.193l-.273-3.857v-52.702c35.67 36.694 115.61 62.26 208.555 62.26 20.139 0 39.663-1.195 58.231-3.448l17.17-2.424c17.51-2.833 34.065-6.587 49.322-11.161l15.19-4.984 8.806-3.31 9.284-3.858 9.42-4.437 8.876-4.642 3.584-2.048 7.509-4.676 6.622-4.642 3.14-2.39 6.349-5.29 5.12-4.95v52.702zm0-95.573a31.403 31.403 0 01-1.365 9.01 38.468 38.468 0 01-1.844 4.848c-2.594 5.734-6.826 11.469-12.424 17.067a84.248 84.248 0 01-6.212 5.597l-6.008 4.643-8.158 5.46-4.915 2.902-8.43 4.54-8.022 3.823-16.725 6.827-12.084 4.096-12.936 3.754-6.963 1.775-13.654 3.072-15.087 2.8-11.332 1.706-13.55 1.604-23.04 1.81c-8.432.443-17.068.682-25.874.682-119.091 0-203.196-42.53-208.316-82.193l-.273-3.823V557.43c35.67 36.694 115.61 62.294 208.555 62.294 88.815 0 165.683-23.28 203.503-57.344l5.12-4.95v52.805zm101.444-336.35h-48.81v210.603L713.626 633.48l34.27-34.612-134.452-134.417V273.886zM314.778 600.508l-11.4.136c-5.906 0-11.743-.102-17.443-.341l-13.79-.683c-105.984-6.826-177.357-47.855-177.357-84.992 0-33.11 56.56-69.222 143.702-81.613l13.585-1.706 13.994-1.297 16.18-1.024 9.045-.273c3.993-.103 8.021-.137 12.083-.137 122.948 0 208.623 45.33 208.623 86.016 0 39.424-80.418 83.217-197.222 85.914z"
  }));
}
const ForwardRef = React.forwardRef(StakeIcon);
export default ForwardRef;