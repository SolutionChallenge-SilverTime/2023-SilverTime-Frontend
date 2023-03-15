import React from "react";
import * as style from "./styles";

export default function ClassCard(props) {
    return (
        <style.Wrap>
            <img src={props.src || process.env.PUBLIC_URL + "/Images/ClassCard/ClassImg.svg"}></img>
            <style.TopBlock>
                <span>{props.className || "뜨개질 수업"}</span>
                <style.TimeBlock>
                    <span>{props.classDays || "매주 화"}</span>
                    <span>{props.classTime || "14:00 ~ 16:00"}</span>
                </style.TimeBlock>
                </style.TopBlock>
            <style.ExplainBlock>{props.classExplain || "뜨개질 수업을 통해 치매를 예방해 보세요!"}</style.ExplainBlock>
            <style.ClassInfoBlock>
                <style.IconBlock>
                    <img src={process.env.PUBLIC_URL + "/Images/ClassCard/MapIcon.svg"}/>
                    <span>{props.location || "정릉 3동 주민센터"}</span>
                </style.IconBlock>
                <style.BottomBlock>
                    <style.IconBlock>
                        <img src={process.env.PUBLIC_URL + "/Images/ClassCard/StarIcon.svg"}/>
                        <span>{props.starCount || 1}</span>
                    </style.IconBlock>
                    <style.IconBlock>
                        <img src={process.env.PUBLIC_URL + "/Images/ClassCard/MenIcon.svg"}/>
                        <span>{props.registerCount || "2명 / 6명"}</span>
                    </style.IconBlock>
                </style.BottomBlock>
            </style.ClassInfoBlock>
        </style.Wrap>
    );
}