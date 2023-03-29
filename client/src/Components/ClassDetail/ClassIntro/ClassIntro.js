import React from "react";
import * as style from "./styles";

export default function ClassIntro(props) {
  return (
    <style.Wrap>
      <style.ClassBlock>{"시작일: " + props.startDate}</style.ClassBlock>
      <style.ClassBlock>{"종료일: " + props.endDate}</style.ClassBlock>
      <style.ClassBlock>{"수업 시간: " + props.classDate + " " +props.classTime}</style.ClassBlock>
      <style.ExplainBlock>{props.explain}</style.ExplainBlock>
      <style.ImageBlock>
        <style.ImageTopBlock>
          <img src={props.src1} />
          <img src={props.src2} />
        </style.ImageTopBlock>
        <style.ImageBottomBlock>
          <img src={props.src3} />
          <img src={props.src4} />
        </style.ImageBottomBlock>
      </style.ImageBlock>
    </style.Wrap>
  );
}
