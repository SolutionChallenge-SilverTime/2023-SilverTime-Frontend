import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Dropdown from "../../Components/Dropdown/Dropdown";
import ClassCard from "../../Components/ClassCard/ClassCard";

export default function MyClass() {
  const title = "내 수업";

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
