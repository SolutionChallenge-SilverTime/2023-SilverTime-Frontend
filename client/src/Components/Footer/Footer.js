import React from "react";
import * as style from "./style";

export default function Footer() {
    return (
        <style.Wrap>
            <style.Menu>
                <style.BtnLink><img src={process.env.PUBLIC_URL + "/images/Footer/MainIcon.svg"}/></style.BtnLink>
                <style.BtnLink><img src={process.env.PUBLIC_URL + "/images/Footer/Group 320 (1).svg"}/></style.BtnLink>
                <style.BtnLink><img src={process.env.PUBLIC_URL + "/images/Footer/MyClassIcon.svg"}/></style.BtnLink>
                <style.BtnLink><img src={process.env.PUBLIC_URL + "/images/Footer/NoticeIcon.svg"}/></style.BtnLink>
                <style.BtnLink><img src={process.env.PUBLIC_URL + "/images/Footer/MyPageIcon.svg"}/></style.BtnLink>
            </style.Menu>
        </style.Wrap>
    );
}