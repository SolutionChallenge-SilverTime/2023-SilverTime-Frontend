import React from "react";
import { useNavigate } from "react-router-dom";
import * as style from "./style";

export default function Footer() {
    const navigate = useNavigate();

    return (
        <style.Wrap>
            <style.Menu>
                <style.BtnLink>
                    <img 
                        src={process.env.PUBLIC_URL + "/images/Footer/MainIcon.svg"}
                        onClick={() => {navigate("../main")}}
                    />
                </style.BtnLink>
                <style.BtnLink>
                    <img 
                        src={process.env.PUBLIC_URL + "/images/Footer/SearchIcon.svg"}
                        onClick={() => {navigate("../search")}}
                    />
                </style.BtnLink>
                <style.BtnLink>
                    <img 
                        src={process.env.PUBLIC_URL + "/images/Footer/MyClassIcon.svg"}
                        onClick={() => {navigate("../myClass")}}
                    />
                </style.BtnLink>
                <style.BtnLink>
                    <img 
                        src={process.env.PUBLIC_URL + "/images/Footer/NoticeIcon.svg"}
                        onClick={() => {navigate("../notice")}}
                    />
                </style.BtnLink>
                <style.BtnLink>
                    <img 
                        src={process.env.PUBLIC_URL + "/images/Footer/MyPageIcon.svg"}
                        onClick={() => {navigate("../myPage")}}
                    />
                </style.BtnLink>
            </style.Menu>
        </style.Wrap>
    );
}