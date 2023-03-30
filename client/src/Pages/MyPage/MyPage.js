import React from "react";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import OrangeFullButton from "../../Components/Button/OrangeFullButton";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";

export default function MyPage() {
  const title = "내 정보";

  return (
    <div>
      <Header title={title} />
      <style.Wrap>
        <style.LogoBlock>
          <img
            className="userImg"
            alt="로고 이미지"
            src={process.env.PUBLIC_URL + "/Images/Join/UserImgIcon.svg"}
          />
        </style.LogoBlock>
        <h2>회원 정보</h2>
        <Input name={"nickname"} title={"닉네임"} plcaeholder={""} />
        <Input name={"pw"} title={"비밀번호"} placeholder={""} />
        <Input name={"name"} title={"이름"} placeholder={""} />
        <Input name={"gender"} title={"성별"} placeholder={""} />
        <Input name={"birth"} title={"생년월일"} placeholder={""} />
        <Input name={"email"} title={"이메일"} placeholder={""} />
        <Input name={"phone"} title={"전화번호"} placeholder={""} />
        <Input name={"area"} title={"교육활동지"} placeholder={""} />
        <Input name={"explain"} title={"소개"} placeholder={""} />
        <style.ButtonBlock>
          <OrangeFullButton
            btnName={"수정하기"}
            onClick={() => {
              alert("정보를 수정하시겠습니까?");
            }}
          />
        </style.ButtonBlock>
      </style.Wrap>
      <Footer title={title} />
    </div>
  );
}
