import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import NoteItem from "../../Components/NoteItem/NoteItem";



export default function NoteDetail() {
  const title = "특이사항 확인"

  return (
    <div>
      <Header title={title} />
      <style.DetailWrap>
        <div>
          <span>{"클래스 이름"}</span>
        </div>
        <NoteItem
          guardianName={"ooo"}
          date={"2023.1.23"}
          title={"ooo 어르신"}/>
        <div>{"제목"}</div>
        <div>{"ooo 어르신은 ..."}</div>
      </style.DetailWrap>
      <Footer title={title} />
    </div>
  );
}