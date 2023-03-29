import React from "react";
import * as style from "./styles";

export default function NoteItem(props) {
  return (
    <style.Wrap onClick={props.onClick}>
      <img src={props.src} />
      <style.RightBlock>
        <style.TopBlock>
          <style.NameBlock>
            <span>{props.identity === 2 ? props.guardianName  + " 보호자" : props.tutorName + " 선생님"}</span>
            <span>{props.className}</span>
          </style.NameBlock>
          <span>{props.date}</span>
        </style.TopBlock>
        <span>{props.title}</span>
      </style.RightBlock>
    </style.Wrap>
  );
}