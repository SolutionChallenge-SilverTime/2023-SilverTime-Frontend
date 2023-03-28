import React from "react";
import { useLocation } from "react-router-dom";
import * as style from "./styles";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import SearchBox from "../../../Components/SearchBox/SearchBox";
import Dropdown from "../../../Components/Dropdown/Dropdown";
import ClassCard from "../../../Components/ClassCard/ClassCard";
import YellowFullButton from "../../../Components/Button/YellowFullButton";

export default function ClassCategory() {
  const location = useLocation();
  const title="수업";
  
  const categoryOptions = [
    {
      id: 1,
      label: "전체",
    },
    {
      id: 2,
      label: "교육",
    },
    {
      id: 3,
      label: "취미",
    },
    {
      id: 4,
      label: "건강",
    },
    {
      id: 5,
      label: "친목",
    },
  ]

  const orderOptions = [
    {
      id: 1,
      label: "인기순",
    },
    {
      id: 2,
      label: "최신순",
    },
    {
      id: 3,
      label: "추천순",
    },
  ]

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
        <SearchBox />
        <style.TopBlock>
          <Dropdown
            options={categoryOptions}
            placeholder={location.state.category}
            backgroundColor={"#FF7F00"}
          />
          <Dropdown
              options={orderOptions}
              placeholder={"인기순"}
              backgroundColor={"#D3D3D3"}
          />
        </style.TopBlock>
        <YellowFullButton 
          btnName={"정릉 3동 주민센터"} 
          height={"30px"}
        />
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