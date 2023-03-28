import React from "react";
import * as style from "./styles";

export default function ClassIntro(props) {
  return (
    <style.Wrap>
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
