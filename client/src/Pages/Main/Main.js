import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as style from "./styles";
import FullButton from "../../Components/Button/FullButton";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import FloatingButton from "../../Components/Button/FloatingButton";
import SearchBox from "../../Components/SearchBox/SearchBox";

export default function Main() {
  const title = "실버타임";
  const navigate = useNavigate();
  const location = useLocation();
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (sessionStorage.getItem("token") === null) {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 없다면
      console.log("isLogin ?? :: ", isLogin);
    } else {
      // sessionStorage 에 name 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogin(true);
      console.log("isLogin ?? :: ", isLogin);
    }
  });

  return (
    <div>
      <Header title={title} />
      <style.Wrap>
      <FloatingButton usertype={location.state.usertype} />
        <SearchBox />
        <FullButton
          fontSize={"40px"}
          btnName={"전체"}
          onClick={() => navigate("../classCategory", { state: { category: "전체", usertype: location.state.usertype},})}
          src={process.env.PUBLIC_URL + "Images/Main/All.svg"}
        />
        <FullButton
          fontSize={"40px"}
          btnName={"교육"}
          onClick={() => navigate("../classCategory", { state: { category: "교육", usertype: location.state.usertype},})} 
          src={process.env.PUBLIC_URL + "Images/Main/EducationIcon.svg"}
        />
        <FullButton
          fontSize={"40px"}
          btnName={"취미"}
          onClick={() => navigate("../classCategory", { state: { category: "취미", usertype: location.state.usertype},})} 
          src={process.env.PUBLIC_URL + "Images/Main/InterestIcon.svg"}
        />
        <FullButton
          fontSize={"40px"}
          btnName={"건강"}
          onClick={() => navigate("../classCategory", { state: { category: "건강", usertype: location.state.usertype},})}
          src={process.env.PUBLIC_URL + "Images/Main/HealthIcon.svg"}
        />
        <FullButton
          fontSize={"40px"}
          btnName={"친목"}
          onClick={() => navigate("../classCategory", { state: { category: "친목", usertype: location.state.usertype},})}
          src={process.env.PUBLIC_URL + "Images/Main/AmityIcon.svg"}
        />
      </style.Wrap>
      <Footer title={title} />
    </div>
  );
}
