import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./styles";

export default function Header(props) {
    const navigate = useNavigate();

    return (
    <style.Wrap>
        <style.Title>
            {props.title === "실버타임" 
            ? (<img 
                    src={process.env.PUBLIC_URL + "/Images/Header/HeartIcon.svg"}
                    width={"30px"}
                    height={"30px"}
                />
            )
            : (<img
                    src={process.env.PUBLIC_URL + "/Images/Header/BackIcon.svg"}
                    onClick={() => {props.title === "회원가입" ? navigate("../login") : navigate(-1);}}
                    width={"30px"}
                    height={"30px"}
                />
            )}
            <span>{props.title}</span>
            {props.title === "내 정보"
            ? (<img
                    src={process.env.PUBLIC_URL + "/Images/Header/SettingIcon.svg"}
                    onClick={() => {navigate("../setting");}}
                    width={"35px"}
                    height={"35px"}
                />
            ) : <span></span>}
        </style.Title>
    </style.Wrap>
  );
}