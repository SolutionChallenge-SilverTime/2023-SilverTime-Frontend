import React, { useState } from "react";
import { useNavigate } from "react-router";
import axios from "axios";
import * as style from "./styles";
import Input from "../../Components/Input/Input";
import OrangeFullButton from "../../Components/Button/OrangeFullButton";
import OrangeStrokeButton from "../../Components/Button/OrangeStrokeButton";
import FullButton from "../../Components/Button/FullButton";
import NewModal from "../../Components/Modal/Modal";
import { ModalProvider } from "styled-react-modal";

const User = {
  usertype: "senior",
  nickname: "test@example.com",
  pw: "test2323@@@",
};

export default function Login() {
  const navigate = useNavigate();

  const [usertype, setUsertype] = useState("");
  const [nickname, setNickname] = useState("");
  const [pw, setPw] = useState("");

  const onClickSenior = () => {
    setUsertype("senior");
  };
  const onClickProtector = () => {
    setUsertype("protector");
  };
  const onClickTeacher = () => {
    setUsertype("teacher");
  };
  const handleNickname = (e) => {
    setNickname(e.target.value);
  };

  const handlePw = (e) => {
    setPw(e.target.value);
  };

  const onClickLoginButton = () => {
    axios
      .post(
        "http://localhost:8080/auth/signin",
        JSON.stringify({ identity: 2, nickName: nickname, password: pw }),
        {
          headers: { "Content-Type": `application/json` },
        }
      )
      .then(function (resp) {
        console.log(resp.data);
        if (resp.data !== null && resp.data != "") {
          console.log("로그인 성공");
          navigate("/main", {
            state: {
              usertype: usertype,
            },
          });
        } else {
          alert("로그인 실패", "아이디나 비밀번호를 확인하세요.");
          setNickname("");
          setPw("");
        }
      })
      .catch(function (err) {
        console.log(`Error Message: ${err}`);
      });
    // if(usertype === User.usertype && nickname === User.nickname && pw === User.pw) {
    //     alert('로그인에 성공했습니다.');

    // }   else {
    //     alert("등록되지 않은 회원입니다.");
    // }
  };

  return (
    <ModalProvider>
      <style.Wrap>
        <style.LogoBlock>
          <button
            className="logoImg"
            alt="로고 이미지"
            src=""
            style={{ width: "300px", height: "300px", borderRadius: "20px" }}
          />
        </style.LogoBlock>
        <span
          className="type"
          style={{ fontWeight: "600", fontSize: "16px", color: "#141414" }}
        >
          사용자 유형
        </span>
        <style.TypeButtonBlock>
          {usertype === "senior" ? (
            <OrangeFullButton
              onClick={onClickSenior}
              btnName={"어르신"}
            ></OrangeFullButton>
          ) : (
            <OrangeStrokeButton
              onClick={onClickSenior}
              btnName={"어르신"}
            ></OrangeStrokeButton>
          )}
          {usertype === "protector" ? (
            <OrangeFullButton
              onClick={onClickProtector}
              btnName={"보호자"}
            ></OrangeFullButton>
          ) : (
            <OrangeStrokeButton
              onClick={onClickProtector}
              btnName={"보호자"}
            ></OrangeStrokeButton>
          )}
          {usertype === "teacher" ? (
            <OrangeFullButton
              onClick={onClickTeacher}
              btnName={"선생님"}
            ></OrangeFullButton>
          ) : (
            <OrangeStrokeButton
              onClick={onClickTeacher}
              btnName={"선생님"}
            ></OrangeStrokeButton>
          )}
        </style.TypeButtonBlock>
        <Input
          name={"nickname"}
          onChange={handleNickname}
          title={"닉네임"}
          value={nickname}
          placeholder={"닉네임을 입력해주세요."}
        />
        <Input
          name={"password"}
          onChange={handlePw}
          title={"비밀번호"}
          value={pw}
          placeholder={"비밀번호를 입력해주세요."}
        />
        <style.ButtonBlock>
          <div>
            <FullButton
              onClick={onClickLoginButton}
              btnName={"로그인"}
            ></FullButton>
            <NewModal />
          </div>
        </style.ButtonBlock>
      </style.Wrap>
    </ModalProvider>
  );
}
