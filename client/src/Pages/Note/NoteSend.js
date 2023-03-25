import React, { useState } from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Input from "../../Components/Input/Input";

export default function NoteSend() {
  const title = "특이사항 작성";

  const [guardianName, setGuardianName] = useState("");
  const [seniorName, setSeniorName] = useState("");
  const [className, setClassName] = useState("");
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  const handleGuardianName = (e) => {
    setGuardianName(e.target.value);
  };

  const handleSeniorName = (e) => {
    setSeniorName(e.target.value);
  };

  const handleClassName = (e) => {
    setClassName(e.target.value);
  };

  const handleNoteTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  const handleNoteContent = (e) => {
    setNoteContent(e.target.value);
  };

  return (
      <div>
        <Header title={title} />
        <style.Wrap>
          <Input
            title={"보호자"}
            border={"#FF7F00"}
            titleWeight={"500"}
            titleSize={"23px"}
            onChange={handleGuardianName}
          />
          <Input
            title={"어르신"}
            border={"#FF7F00"}
            titleWeight={"500"}
            titleSize={"23px"}
            onChange={handleSeniorName}
          />
          <Input
            title={"클래스 이름"}
            border={"#FF7F00"}
            titleWeight={"500"}
            titleSize={"23px"}
            onChange={handleClassName}
          />
          <Input
            title={"제목"}
            border={"#FF7F00"}
            titleWeight={"500"}
            titleSize={"23px"}
            onChange={handleNoteTitle}
          />
          <Input
            height={"150px"}
            title={"특이사항 작성"}
            border={"#FF7F00"}
            titleWeight={"500"}
            titleSize={"23px"}
            onChange={handleNoteContent}
          />
        </style.Wrap>
        <Footer title={title} />
      </div>
  );
}