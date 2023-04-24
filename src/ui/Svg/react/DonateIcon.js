import * as React from "react";
function DonateIcon({
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
    d: "M992 32H32v960h960V32zM678.56 224c67.488 0 122.4 52.416 122.4 116.976 0 19.296-5.328 38.4-15.36 55.776l-4.56 7.344c-40.464 70.752-136.704 141.504-177.744 169.68l-15.024 10.032-.768.336a21.312 21.312 0 01-11.52 3.456 20.16 20.16 0 01-7.488-1.632l-3.744-1.824c-1.44-.672-142.176-89.328-192.72-180a112.032 112.032 0 01-19.488-63.168c0-64.56 54.864-116.976 122.4-116.976 48 0 84.432 37.536 101.76 56.544l7.68-8.256 8.592-8.496C612.896 244.832 641.84 224 678.56 224zM338.24 554c69.984 0 100.704 16.224 135.936 37.104l6.672 3.984 1.968 1.344 16.224 9.888c8.64 5.04 18.144 10.32 28.992 15.648 16.032 8.304 84.624 14.88 127.776 16.944 4.608.24 8.736.72 12.48 1.488l7.68 3.024v2.976c-.72 8.496-9.216 31.92-80.304 27.936-86.544-4.8-136.8-25.44-159.648-37.44s-59.04 19.968-22.848 37.92l8.208 3.84c47.808 21.216 193.824 71.232 256.128 30.096 64.08-42.288 66.528-76.992 46.272-98.784-1.152-1.152-2.4-2.064-4.32-1.248l11.952-9.648 12.864-10.944c10.32-8.352 27.648-19.872 48.864-19.872 8.64 0 17.664 2.112 26.304 6.24 25.92 12.768 35.76 38.64 23.04 59.184l-2.352 3.456-49.2 53.28-20.448 22.656c-28.56 31.968-42.336 48.96-48.816 57.936-7.92 11.04-28.896 26.208-49.776 28.656l-5.712.336H469.808a64.32 64.32 0 01-19.872-3.216l-6.048-2.352h-.384l-.864-.72-11.376-5.856-17.28-8.544c-25.344-12.384-58.32-27.456-75.264-32.16-12.384-3.072-69.84-5.136-116.304-5.136-23.664 0-43.392-15.168-46.08-34.464L176 703.04v-90.72c0-19.872 18.048-36.48 41.04-38.736l5.376-.24c15.744 0 29.712-2.88 43.68-6.288l10.56-2.64 2.016-.768c20.16-5.136 38.64-9.6 59.568-9.6z"
  }));
}
const ForwardRef = React.forwardRef(DonateIcon);
export default ForwardRef;