import React from "react";
import * as style from "./styles";
import FullButton from "../../Components/Button/FullButton";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Search from "../../Components/Search/Search";
import { useNavigate } from "react-router-dom";
import FloatingButton from "../../Components/Button/FloatingButton";
import ClassCard from "../../Components/ClassCard/ClassCard";

export default function Main() {
  const title = "실버타임";
  const navigate = useNavigate();

  return (
    <div>
      <Header title={title} />
      <style.Wrap>
        <FloatingButton usertype="teacher" />
        <Search />
        <FullButton
            fontSize={"40px"}
            btnName={"교육"}
            onClick={() => navigate("../Education")}
            src={process.env.PUBLIC_URL + "Images/Main/EducationIcon.svg"}
        />
        <FullButton
            fontSize={"40px"}
            onClick={() => navigate("../Interest")}
            btnName={"취미"}
            src={process.env.PUBLIC_URL + "Images/Main/InterestIcon.svg"}
        />
        <FullButton
            fontSize={"40px"}
            btnName={"건강"}
            onClick={() => navigate("../Health")}
            src={process.env.PUBLIC_URL + "Images/Main/HealthIcon.svg"}
        />
        <FullButton
            fontSize={"40px"}
            btnName={"친목"}
            onClick={() => navigate("../Amity")}
            src={process.env.PUBLIC_URL + "Images/Main/AmityIcon.svg"}
        />
        <style.TitleBlock>최근 등록 수업</style.TitleBlock>
        <ClassCard />
        <style.TitleBlock>AI 추천 수업</style.TitleBlock>
        <ClassCard />
      </style.Wrap>
      <Footer title={title} />
    </div>
  );
}
