import React from "react";
import * as style from "./styles";

export default function Input(props) {
  return (
    <style.Wrap
      backgroundColor={props.backgroundColor}
      top={props.top}
    >
      <style.TitleBlock
        titleWeight={props.titleWeight}
        titleSize={props.titleSize}
      >
        {props.title !== null ? <span>{props.title}</span> : null }
      </style.TitleBlock>
      <style.InputBlock
        stroke={props.stroke}
        backgroundColor={props.backgroundColor}
        fontWeight={props.fontWeight}
        fontSize={props.fontSize}
        height={props.height}
        border={props.border}
      >
        {props.src !== null ? <img src={props.src} /> : null }
        <input
          name={props.name}
          onClick={props.onClick}
          type={props.type || "text"}
          placeholder={props.placeholder}
          onChange={props.onChange}
          value={props.value}
        />
      </style.InputBlock>
    </style.Wrap>
  );
}