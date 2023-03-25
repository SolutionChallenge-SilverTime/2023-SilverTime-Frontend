import React from "react";
import * as style from "./styles";

export default function NoteItem(props) {
  return (
    <style.Wrap onClick={props.onClick}>
      <img src={props.src} />
      <style.RightBlock>
        <style.TopBlock>
          <style.NameBlock>
            <span>{props.guardianName  + " 보호자"}</span>
            <span>{props.className}</span>
          </style.NameBlock>
          <span>{props.date || "2023.03.25"}</span>
        </style.TopBlock>
        <span>{props.title}</span>
      </style.RightBlock>
    </style.Wrap>
  );
}