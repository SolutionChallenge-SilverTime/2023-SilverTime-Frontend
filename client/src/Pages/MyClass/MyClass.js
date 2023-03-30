import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Dropdown from "../../Components/Dropdown/Dropdown";
import ClassCard from "../../Components/ClassCard/ClassCard";
import FloatingButton from "../../Components/Button/FloatingButton";
import YellowFullButton from "../../Components/Button/YellowFullButton";

export default function MyClass() {
  const title = "내 수업";
  const identity = sessionStorage.getItem("identity");
  const navigate = useNavigate();

  const stateOptions = [
    {
      id: 1,
      label: "진행중인 수업",
    },
    {
      id: 2,
      label: "진행완료 수업",
    },
  ];

  return (
    <div>
      <Header title={title} />
      <style.Wrap>
        {identity != 0 && <FloatingButton />}
          <Dropdown
            width={"280px"}
            options={stateOptions}
            placeholder={"진행중인 수업"}
          />
        <ClassCard />
        <style.ButtonBlock>
          <YellowFullButton
            width={"170px"}
            btnName={"수강생 목록 보기"}
            onClick={() => {
              navigate("../studentList")
            }}
          />
        </style.ButtonBlock>
      </style.Wrap>
      <Footer title={title} />
    </div>
  );
}
