import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import FloatingButton from "../../Components/Button/FloatingButton";
import Footer from "../../Components/Footer/Footer";
import SearchBox from "../../Components/SearchBox/SearchBox";
import ClassCard from "../../Components/ClassCard/ClassCard";

export default function RecommendClass() {
  const title = "AI 추천 수업";

  const obj = {
    data: [
      { 
        id: 1,
        src: process.env.PUBLIC_URL + "/Images/ClassCard/ClassImg.svg", 
        className: "스마트폰 수업", 
        classDays: "매주 목", 
        classTime: "11:00 ~ 13:00", 
        classExplain: "혼자 사용하기 힘든 스마트폰, 이 수업을 통해 사용법을 익혀보세요!", 
        location: "정릉 2동 주민센터", 
        starCount: 4, 
        registerCount: "5명 / 10명" 
      },
      { 
        id: 2,
        src: process.env.PUBLIC_URL + "/Images/ClassCard/ClassImg.svg", 
        className: "십자수 수업", 
        classDays: "매주 금", 
        classTime: "17:00 ~ 19:00", 
        classExplain: "십자수 수업으로 집중력을 길러보세요!", 
        location: "수유 1동 주민센터", 
        starCount: 6, 
        registerCount: "7명 / 15명" },
    ]
  }

  return (
    <div>
      <Header title={title} />
      <style.Wrap>
        <FloatingButton usertype="teacher" />
        <SearchBox />
        <style.TitleBlock>AI 추천 수업</style.TitleBlock>
        {obj.data.map((item) => {
            return (
              <ClassCard
                key={item.id}
                src={item.src}
                className={item.className}
                classDays={item.classDays}
                classTime={item.classTime}
                classExplain={item.classExplain}
                location={item.location}
                starCount={item.starCount}
                registerCount={item.registerCount}
              />
            )
          })}
      </style.Wrap>
      <Footer title={title} />
    </div>
  );
}