import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import FloatingButton from "../../Components/Button/FloatingButton";
import SearchBox from "../../Components/SearchBox/SearchBox";
import NoteItem from "../../Components/NoteItem/NoteItem";

export default function NoteList() {
  const title = "특이사항 목록"
  const navigate = useNavigate();

  const obj = {
    data: [
      { 
        id: 1,
        src: process.env.PUBLIC_URL + "/Images/Header/HeartIcon.svg",
        guardianName: "홍길동",
        className: "스마트폰 수업", 
        date: "2023.03.22",
        title: "홍길동 어르신 특이사항",
      },
      { 
        id: 2,
        src: process.env.PUBLIC_URL + "/Images/Header/HeartIcon.svg",
        guardianName: "김영수",
        className: "스마트폰 수업", 
        date: "2023.03.22",
        title: "홍길동 어르신 특이사항",
      },
    ]
  }

  const onClickItem = () => {
    navigate("../noteDetail")
  };

  return (
    <div>
      <Header title={title} />
      <FloatingButton />
      <style.Wrap>
        <SearchBox />
      </style.Wrap>
      {obj.data.map((item) => {
        return (
          <NoteItem
            key={item.id}
            src={item.src}
            guardianName={item.guardianName}
            className={item.className}
            date={item.date}
            title={item.title}
            onClick={onClickItem}
          />
        )
      })}
      <Footer title={title} />
    </div>
  );
}