import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Dropdown from "../../Components/Dropdown/Dropdown";
import ClassCard from "../../Components/ClassCard/ClassCard";
import FloatingButton from "../../Components/Button/FloatingButton";

export default function MyClass() {
  const title = "내 수업";
  const identity = sessionStorage.getItem("identity");

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
        <style.TopBlock>
          <Dropdown
            width={"200px"}
            options={stateOptions}
            placeholder={"진행중인 수업"}
            backgroundColor={"#ffb800"}
          />
        </style.TopBlock>
        <ClassCard />
      </style.Wrap>
      <Footer title={title} />
    </div>
  );
}
