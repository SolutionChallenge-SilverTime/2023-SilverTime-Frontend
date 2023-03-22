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
      key: 1,
      label: "전체",
    },
    {
      key: 2,
      label: "교육",
    },
    {
      key: 3,
      label: "취미",
    },
    {
      key: 4,
      label: "건강",
    },
    {
      key: 5,
      label: "친목",
    },
  ]

  const orderOptions = [
    {
      key: 1,
      label: "인기순",
    },
    {
      key: 2,
      label: "최신순",
    },
    {
      key: 3,
      label: "추천순",
    },
  ]


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
        <YellowFullButton btnName={"정릉 3동 주민센터"} />
        <ClassCard />
      </style.Wrap>
      <Footer title={title} />
    </div>
  );
}