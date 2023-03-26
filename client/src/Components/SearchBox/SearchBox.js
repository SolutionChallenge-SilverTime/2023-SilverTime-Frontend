import React from "react";
import * as style from "./styles";
import Input from "../Input/Input";

export default function SearchBox(props) {
  return (
    <style.Wrap backgroundColor={props.color || "#D9D9D9"}>
      <Input
        top={"0px"}
        stroke={props.color || "#D9D9D9"}
        fontWeight={"500"}
        fontSize={"24px"}
        color={props.color || ""}
        border={props.color || "#D9D9D9"}
        backgroundColor={props.color || "#D9D9D9"}
        placeholder={"단어를 검색해 보세요."}
        src={process.env.PUBLIC_URL + "/Images/Search/SearchIcon.svg"}
      />
    </style.Wrap>
  );
}
