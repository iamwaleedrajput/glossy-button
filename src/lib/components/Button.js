import React from "react";
const convertHexToRGBA = (hexCode, opacity) => {
  if (hexCode) {
    let hex = hexCode.replace("#", "");
    if (hex.length === 3) {
      hex = `${hex[0]}${hex[0]}${hex[1]}${hex[1]}${hex[2]}${hex[2]}`;
    }

    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    return `rgba(${r},${g},${b},${opacity})`;
  }
};
const Button = (props) => {
  return (
    <button
      style={{
        backgroundColor: convertHexToRGBA(props.color, 1),
        background: `linear-gradient(${convertHexToRGBA(
          props.color,
          1
        )}, ${convertHexToRGBA(props.color, 0.5)})`,
      }}
      className={`btn btn--${props.kind} CTA glass`}
      data-id={props.id}
      type={props.type}
      name={props.name}
      value={props.value}
      disabled={props.disabled}
      onClick={props.handleClick}
    >
      {props.label}
    </button>
  );
};
export default Button;
