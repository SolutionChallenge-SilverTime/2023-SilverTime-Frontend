import React from "react";
import * as style from "./styles";

export default function Review(props) {
  return (
    <style.ReviewBlock>
      <style.SpanBlock>{props.nickname}</style.SpanBlock>
      <style.SpanBlock>{props.review}</style.SpanBlock>
    </style.ReviewBlock>
  );
  }