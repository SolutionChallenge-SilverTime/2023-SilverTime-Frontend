import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Input/Input";

export default function NoteSend() {
  const title = "특이사항 작성"
  return (
      <div>
        <Header title={title} />
        <style.Wrap>
          <Input
            title={"보호자"}
            border={"#FF7F00"}
            titleWeight={"500"}
            titleSize={"23px"}
          />
          <Input
            title={"어르신"}
            border={"#FF7F00"}
            titleWeight={"500"}
            titleSize={"23px"}
          />
          <Input
            title={"클래스 이름"}
            border={"#FF7F00"}
            titleWeight={"500"}
            titleSize={"23px"}
          />
          <Input
            title={"제목"}
            border={"#FF7F00"}
            titleWeight={"500"}
            titleSize={"23px"}
          />
          <Input
            height={"150px"}
            title={"특이사항 작성"}
            border={"#FF7F00"}
            titleWeight={"500"}
            titleSize={"23px"}
          />
        </style.Wrap>
        <Footer title={title} />
      </div>
  );
}