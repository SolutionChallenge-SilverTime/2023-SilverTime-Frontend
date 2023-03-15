import React from "react";
import Input from "../Input/Input";
import * as style from "./styles";

export default function SearchBox() {
    return (
        <style.Wrap>
            <Input
                top={"0px"}
                stroke={"#D9D9D9"}
                fontWeight={"500"}
                fontSize={"37px"}
                backgroundColor={"#D9D9D9"}
                placeholder={"단어를 검색해 보세요."}
                src={process.env.PUBLIC_URL + "/Images/Search/SearchIcon.svg"}    
            />
        </style.Wrap>
    );
}