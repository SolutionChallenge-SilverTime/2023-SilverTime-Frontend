import React from "react";
import * as style from "./styles";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import StudentItem from "../../Components/StudentItem/StudentItem";

export default function StudentList() {
  const title = "수강생 목록";

  return (
    <div>
      <Header title={title} />
      <style.TitleBlock>
        <span>{"뜨개질 수업"}</span>
      </style.TitleBlock>
      <StudentItem
        className={"뜨개질 수업"}
        src={process.env.PUBLIC_URL + "/Images/Float/ChatbotIcon.svg"}
        seniorName={"이복자"}
        age={"67세"}
        gender={"여"}
        location={"서울특별시 성북구"}
      />
      <Footer title={title} />
    </div>
  );
}
