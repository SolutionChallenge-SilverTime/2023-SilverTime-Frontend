import React from "react";
import * as style from "./styles";

function FullButton(props) {
  return (
    <style.FullButton onClick={props.onClick} id={props.id}>
      {props.btnName}
    </style.FullButton>
  );
}

export default FullButton;