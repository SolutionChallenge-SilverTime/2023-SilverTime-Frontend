import React, { useEffect, useState } from "react";
import * as style from "./style";
import Input from "../../Components/Input/Input";
import OrangeFullButton from "../../Components/Button/OrangeFullButton";
import OrangeStrokeButton from "../../Components/Button/OrangeStrokeButton";
import FullButton from "../../Components/Button/FullButton";
import YellowFullButton from "../../Components/Button/YellowFullButton";
import StrokeButton from "../../Components/Button/StrokeButton";
import NewModal from "../../Components/Modal/Modal";
import { ModalProvider } from "styled-react-modal";

const User = {
    nickname: 'test@example.com',
    pw: 'test2323@@@'
}

export default function Login() {
    const [usertype, setUsertype] = useState("");
    const [nickname, setNickname] = useState("");
    const [pw, setPw] = useState("");

    const [usertypeValid, setUsertypeValid] = useState(false);
    const [nicknameValid, setNicknameValid] = useState(false);
    const [pwValid, setPwValid] = useState(false);
    const [notAllow, setNotAllow] = useState(true);

    useEffect(() => {
        if(nicknameValid && pwValid) {
            setNotAllow(false);
            return;
        }
        setNotAllow(true);
    }, [nicknameValid, pwValid]);

    const onClickSenior = () => {
        setUsertype("senior");
    }
    const onClickProtector = () => {
        setUsertype("protector");
    }
    const onClickTeacher = () => {
        setUsertype("teacher");
    }
    const handleNickname = (e) => {
        setNickname(e.target.value);
        const regex = /[ㄱ-ㅎ|ㅏ-ㅣ|가-힣|0-9]/;
        if (regex.test(e.target.value)) {
            setNicknameValid(true);
        } else {
            setNicknameValid(false);
        }
    };
    const handlePw = (e) => {
        setPw(e.target.value);
        const regex = /^[A-Za-z0-9]{8,20}$/;
        if (regex.test(e.target.value)) {
            setPwValid(true);
        } else {
            setPwValid(false);
        }
    };
    const onClickLoginButton = () => {
        if(nickname === User.nickname && pw === User.pw) {
            alert('로그인에 성공했습니다.');
        }   else {
            alert("등록되지 않은 회원입니다.");
        }
    };

    return (
        <ModalProvider>
            <style.Wrap>
                <style.LogoBlock>
                    <button className="logoImg" alt="로고 이미지" src="" style={{ width: "300px", height: "300px", borderRadius: "20px" }} />
                </style.LogoBlock>
                <span className="type" style={{ fontWeight: "600", fontSize: "16px", color: "#141414" }}>사용자 유형</span>
                <style.TypeButtonBlock>
                    {usertype === "senior" ? (<OrangeFullButton onClick={onClickSenior} btnName={"어르신"}></OrangeFullButton>) : (<OrangeStrokeButton onClick={onClickSenior} btnName={"어르신"}></OrangeStrokeButton>)}
                    {usertype === "protector" ? (<OrangeFullButton onClick={onClickProtector} btnName={"보호자"}></OrangeFullButton>) : (<OrangeStrokeButton onClick={onClickProtector} btnName={"보호자"}></OrangeStrokeButton>)}
                    {usertype === "teacher" ? (<OrangeFullButton onClick={onClickTeacher} btnName={"선생님"}></OrangeFullButton>) : (<OrangeStrokeButton  onClick={onClickTeacher} btnName={"선생님"}></OrangeStrokeButton>)}
                </style.TypeButtonBlock>
                <Input
                    name={"nickname"}
                    onChange={handleNickname}
                    title={"닉네임"} 
                    value={nickname}
                />
                <Input
                    name={"password"}
                    onChange={handlePw}
                    title={"비밀번호"}
                    value={pw}
                />
                <style.ButtonBlock>
                    <div>
                        <FullButton className="bottomButton" onClick={onClickLoginButton} btnName={"로그인"}></FullButton>
                        <NewModal />
                    </div>
                </style.ButtonBlock>
            </style.Wrap>
        </ModalProvider>
     );    
}
