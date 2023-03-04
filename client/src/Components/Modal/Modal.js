
import { React, useState } from "react";
import * as style from "./style";
import CloseButton from "../Button/CloseButton";
import OrangeFullButton from "../Button/OrangeFullButton";
import OrangeStrokeButton from "../Button/OrangeStrokeButton";
import YellowFullButton from "../Button/YellowFullButton";
import StrokeButton from "../Button/StrokeButton";

export default function NewModal() {
    const [usertype, setUsertype] = useState("");
    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = (e) => {
        setIsOpen(!isOpen);
    }

    const onClickSenior = () => {
        setUsertype("senior");
    }
    const onClickProtector = () => {
        setUsertype("protector");
    }
    const onClickTeacher = () => {
        setUsertype("teacher");
    }

    return (
        <div>
            <StrokeButton className="bottomButton" onClick={toggleModal} btnName={"회원가입"} isOpen={true}></StrokeButton>
                <style.TypeModal
                    isOpen={isOpen}
                    onBackgroundClick={toggleModal}
                    onEscapeKeyDown={toggleModal}
                >
                    <style.HeaderBlock>
                        <span>회원가입</span>
                        <CloseButton onClick={toggleModal} btnName={"X"} />
                    </style.HeaderBlock>
                    <span>회원가입을 진행할 사용자 유형을 선택해주세요.</span>
                    <style.TypeButtonBlock>
                        {usertype === "senior" ? (<OrangeFullButton onClick={onClickSenior} btnName={"어르신"}></OrangeFullButton>) : (<OrangeStrokeButton onClick={onClickSenior} btnName={"어르신"}></OrangeStrokeButton>)}
                        {usertype === "protector" ? (<OrangeFullButton onClick={onClickProtector} btnName={"보호자"}></OrangeFullButton>) : (<OrangeStrokeButton onClick={onClickProtector} btnName={"보호자"}></OrangeStrokeButton>)}
                        {usertype === "teacher" ? (<OrangeFullButton onClick={onClickTeacher} btnName={"선생님"}></OrangeFullButton>) : (<OrangeStrokeButton  onClick={onClickTeacher} btnName={"선생님"}></OrangeStrokeButton>)}
                    </style.TypeButtonBlock>
                    <YellowFullButton className="bottomButton" btnName={"확인"}></YellowFullButton>           
                </style.TypeModal>
        </div>
    );
}