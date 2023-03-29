import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import * as style from "./styles";
import Header from "../../../Components/Header/Header";
import Footer from "../../../Components/Footer/Footer";
import ClassIntro from "../../../Components/ClassDetail/ClassIntro/ClassIntro";
import Curriculum from "../../../Components/ClassDetail/Curriculum/Curriculum";
import TeacherIntro from "../../../Components/ClassDetail/TeacherIntro/TeacherIntro";
import Review from "../../../Components/ClassDetail/Review/Review";
import FloatingButton from "../../../Components/Button/FloatingButton";
import Modal from "../../../Components/Modal/Modal";
import { ModalProvider } from "styled-react-modal";

export default function Class(props) {
  const title = "수업";
  const location = useLocation();
  const userId = sessionStorage.getItem("userId");
  const id = location.state.key;
  const [adata, setData] = useState([]);
  const [current, setCurrent] = useState("classIntro");

  useEffect(() => {
    const url = `http://localhost:8080/user-lecture/information?lectureId=${location.state.key}&userId=${userId}`;
    axios
      .get(url)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [userId]);

  const handleTagClick = (tag) => {
    setCurrent(tag);
  };

  const lectureImageArray = adata.lectureIntroImagesUrl.map((item) => ({
    src: item,
  }));

  const curriculumContentArray = adata.curriculumContents.map((item) => ({
    content: item,
  }));

  const curriculumImageUrlArray = adata.curriculumImagesUrl.map((item) => ({
    src: item,
  }));

  const obj = {
    data: [
      lectureImageArray,
      curriculumContentArray,
      curriculumImageUrlArray,
    ]
  };

  return (
    <ModalProvider>
      <Header title={title} />
      <FloatingButton />
      <style.Wrap>
        <style.SpanBlock>
          {`${adata.tutorName}` +
            " | " +
            `${adata.category}` +
            " | " +
            `${adata.maxPeople}명 모집`}
        </style.SpanBlock>
        <style.NameBlock>
          <span>{adata.title}</span>
        </style.NameBlock>
        <style.IconBlock>
          <img
            src={process.env.PUBLIC_URL + "/Images/ClassCard/StarIcon.svg"}
          />
          <style.DetailBlock>
            <span>{"이 글에 관심이 있어요"}</span>
            <span>{adata.likeCount}</span>
          </style.DetailBlock>
        </style.IconBlock>
        <style.IconBlock>
          <img src={process.env.PUBLIC_URL + "/Images/ClassCard/MenIcon.svg"} />
          <style.DetailBlock>
            <span>{"현재 신청 인원"}</span>
            <span>{`${adata.presentPeople}명 / ${adata.maxPeople}명`}</span>
          </style.DetailBlock>
        </style.IconBlock>
        <style.BottomBlock>
          <style.IconBlock>
            <img src={process.env.PUBLIC_URL + "/Images/Class/LinkIcon.svg"} />
            <span>{"공유하기"}</span>
          </style.IconBlock>
          <Modal />
          <style.IconBlock>
            <img src={process.env.PUBLIC_URL + "/Images/Class/CheckIcon.svg"} />
            <span onClick={() => alert("이 수업을 신청하시겠습니까?")}>
              {"신청하기"}
            </span>
          </style.IconBlock>
        </style.BottomBlock>
      </style.Wrap>
      <style.ContentBlock>
        <style.Wrap>
          <style.NavigateBlock>
            <style.SpanBlock textBold={current === "classIntro" ? 700 : 400}>
              <span
                onClick={() => {
                  handleTagClick("classIntro");
                }}
              >
                수업 소개
              </span>
            </style.SpanBlock>
            <style.SpanBlock textBold={current === "curriculum" ? 700 : 400}>
              <span
                onClick={() => {
                  handleTagClick("curriculum");
                }}
              >
                교육과정
              </span>
            </style.SpanBlock>
            <style.SpanBlock textBold={current === "teacherIntro" ? 700 : 400}>
              <span
                onClick={() => {
                  handleTagClick("teacherIntro");
                }}
              >
                선생님 소개
              </span>
            </style.SpanBlock>
            <style.SpanBlock textBold={current === "review" ? 700 : 400}>
              <span
                onClick={() => {
                  handleTagClick("review");
                }}
              >
                후기
              </span>
            </style.SpanBlock>
          </style.NavigateBlock>
          {current === "classIntro" && (
            <ClassIntro
              startDate={"2023.03.29"}
              endDate={"2023.04.29"}
              classDate={"목요일"}
              classTime={"14:00 ~ 16:00"}
              explain={adata.lectureIntro}
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
              src={adata.profileUrl}
              name={adata.tutorName}
              gender={adata.tutorGender}
              age={adata.tutorBirth.substr(0, 10)}
              explain={adata.tutorIntro}
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
      </style.ContentBlock>
      <Footer title={title} />
    </ModalProvider>
  );
}
