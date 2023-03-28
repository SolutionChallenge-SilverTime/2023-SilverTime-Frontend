import React, { useState } from "react";
import * as style from "./styles";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import ClassIntro from "../../../Components/ClassDetail/ClassIntro/ClassIntro";
import Curriculum from "../../../Components/ClassDetail/Curriculum/Curriculum";
import TeacherIntro from "../../../Components/ClassDetail/TeacherIntro/TeacherIntro";
import Review from "../../../Components/ClassDetail/Review/Review";
import FloatingButton from "../../../Components/Button/FloatingButton";

export default function Class(props) {
  const title = "수업";
  const [current, setCurrent] = useState("classIntro");
  const [classIntroTextBold, setClassTextBold] = useState(700);
  const [curriculumTextBold, setCurriculumTextBold] = useState(200);
  const [teacherIntroTextBold, setTeacherIntroTextBold] = useState(200);
  const [reviewTextBold, setReviewTextBold] = useState(200);

  const onClickClassIntro = () => {
    setCurrent("classIntro");

    if (current === "classIntro") {
      setClassTextBold(700);
    } else {
      setClassTextBold(200);
    }
  };

  const onClickCurriculum = () => {
    setCurrent("curriculum");

    if (current === "curriculum") {
      setCurriculumTextBold(700);
    } else {
      setCurriculumTextBold(200);
    }
  };

  const onClickTeacherIntro = () => {
    setCurrent("teacherIntro");

    if (current === "teacherIntro") {
      setTeacherIntroTextBold(700);
    } else {
      setTeacherIntroTextBold(200);
    }
  };

  const onClickReview = () => {
    setCurrent("review");

    if (current === "review") {
      setReviewTextBold(700);
    } else {
      setReviewTextBold(200);
    }
  };

  return (
    <div>
      <Header title={title} />
      <FloatingButton />
      <style.Wrap>
        <style.SpanBlock>
          <span>
            {"선생님 이름" + " | " + "카테고리명" + " | " + "6명 모집"}
          </span>
        </style.SpanBlock>
        <style.NameBlock>
          <span>{"뜨개질 수업(집중력 향상에 도움이 되는 뜨개질 수업)"}</span>
        </style.NameBlock>
        <style.IconBlock>
          <img
            src={process.env.PUBLIC_URL + "/Images/ClassCard/StarIcon.svg"}
          />
          <style.DetailBlock>
            <span>{"이 글에 관심이 있어요"}</span>
            <span>{1}</span>
          </style.DetailBlock>
        </style.IconBlock>
        <style.IconBlock>
          <img src={process.env.PUBLIC_URL + "/Images/ClassCard/MenIcon.svg"} />
          <style.DetailBlock>
            <span>{"현재 신청 인원"}</span>
            <span>{"2명 / 6명"}</span>
          </style.DetailBlock>
        </style.IconBlock>
        <style.BottomBlock>
          <style.IconBlock>
            <img src={process.env.PUBLIC_URL + "/Images/Class/LinkIcon.svg"} />
            <span>{"공유하기"}</span>
          </style.IconBlock>
          <style.IconBlock>
            <img src={process.env.PUBLIC_URL + "/Images/Class/MapIcon.svg"} />
            <span>{"위치정보"}</span>
          </style.IconBlock>
          <style.IconBlock>
            <img src={process.env.PUBLIC_URL + "/Images/Class/CheckIcon.svg"} />
            <span>{"신청하기"}</span>
          </style.IconBlock>
        </style.BottomBlock>
      </style.Wrap>
      <style.NavigateBlock>
        <style.Wrap>
          <style.SpanBlock textBold={classIntroTextBold}>
            <span onClick={onClickClassIntro}>수업 소개 </span>
          </style.SpanBlock>
          <style.SpanBlock textBold={curriculumTextBold}>
            <span onClick={onClickCurriculum}>교육과정 </span>
          </style.SpanBlock>
          <style.SpanBlock textBold={teacherIntroTextBold}>
            <span onClick={onClickTeacherIntro}>선생님 소개 </span>
          </style.SpanBlock>
          <style.SpanBlock textBold={reviewTextBold}>
            <span onClick={onClickReview}>후기</span>
          </style.SpanBlock>

          {current === "classIntro" && (
            <ClassIntro
              explain={"부드러운 실을 이용하여 총 4개의 작품을 만들어요."}
              src1={process.env.PUBLIC_URL + "/Images/ClassCard/ClassImg.svg"}
              src2={process.env.PUBLIC_URL + "/Images/ClassCard/ClassImg.svg"}
              src3={process.env.PUBLIC_URL + "/Images/ClassCard/ClassImg.svg"}
              src4={process.env.PUBLIC_URL + "/Images/ClassCard/ClassImg.svg"}
            />
          )}
          {current === "curriculum" && (
            <Curriculum
              week={"1주차"}
              src={process.env.PUBLIC_URL + "/Images/ClassCard/ClassImg.svg"}
              explain={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          )}
          {current === "teacherIntro" && (
            <TeacherIntro
              src={process.env.PUBLIC_URL + "/Images/ClassCard/ClassImg.svg"}
              name={"홍길동"}
              gender={"여"}
              age={"33세"}
              explain={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          )}
          {current === "review" && (
            <Review
              nickname={"만두"}
              review={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
              }
            />
          )}
        </style.Wrap>
      </style.NavigateBlock>
      <Footer title={title} />
    </div>
  );
}
