"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.regexp.exec.js");

require("core-js/modules/es.string.replace.js");

require("core-js/modules/es.parse-int.js");

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const convertHexToRGBA = (hexCode, opacity) => {
  if (hexCode) {
    let hex = hexCode.replace("#", "");

    if (hex.length === 3) {
      hex = "".concat(hex[0]).concat(hex[0]).concat(hex[1]).concat(hex[1]).concat(hex[2]).concat(hex[2]);
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    return "rgba(".concat(r, ",").concat(g, ",").concat(b, ",").concat(opacity, ")");
  }
};

const Button = props => {
  return /*#__PURE__*/_react.default.createElement("button", {
    style: {
      backgroundColor: convertHexToRGBA(props.color, 1),
      background: "linear-gradient(".concat(convertHexToRGBA(props.color, 1), ", ").concat(convertHexToRGBA(props.color, 0.5), ")")
    },
    className: "btn btn--".concat(props.kind, " CTA glass"),
    "data-id": props.id,
    type: props.type,
    name: props.name,
    value: props.value,
    disabled: props.disabled,
    onClick: props.handleClick
  }, props.label);
};

var _default = Button;
exports.default = _default;