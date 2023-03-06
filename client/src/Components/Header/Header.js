import React from "react";
import * as style from "./styles";

export default function Header(props) {
  return (
    <style.Wrap>
        <style.Title>
            {props.title === "실버타임" 
            ? (<img 
                    src={process.env.PUBLIC_URL + "/images/Header/HeartIcon.svg"}
                />
            ) 
            : (<img
                    src={process.env.PUBLIC_URL + "/images/Header/BackIcon.svg"}
                />
            )}
            <span>{props.title}</span>
        </style.Title>
        
    </style.Wrap>
  );
}