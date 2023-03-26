import React from "react";
import * as style from "./styles";

function FullButton(props) {
  return (
    <style.FullButton
      onClick={props.onClick}
      width={props.width}
      height={props.height}
    >
      {props.src && <img src={props.src} />}
      {props.btnName}
    </style.FullButton>
  );
}

export default FullButton;
