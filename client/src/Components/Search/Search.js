import React from "react";
import * as style from "./styles";

export default function Search() {
    
    return (
        <style.Wrap>
            <style.SearchBlock>
                <img src={process.env.PUBLIC_URL + "/Images/Search/SearchIcon.svg"} />
                <span>단어를 검색해보세요</span>
            </style.SearchBlock>
        </style.Wrap>
    );   
}