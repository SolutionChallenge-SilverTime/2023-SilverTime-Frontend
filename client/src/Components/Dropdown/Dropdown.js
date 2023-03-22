import React, { useEffect, useState } from "react";
import * as style from "./styles";

export default function Dropdown(props) {
    const [showMenu, setShowMenu] = useState(false);
    const [selectedValue, setSelectedValue] = useState(null);

    useEffect(() => {
        const handler = () => setShowMenu(false);
        window.addEventListener("click", handler);
        return () => {
            window.removeEventListener("click", handler);
        };
    });

    const handleInputClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (selectedValue) {
            return selectedValue.label;
        }
        return props.placeholder;
    };

    const onItemClick = (option) => {
        setSelectedValue(option);
    };

    return (
        <div>
            <style.DropdownTitle>{props.title}</style.DropdownTitle>
            <style.DropdownContainer>
                <style.DropdownInput 
                    onClick={handleInputClick} 
                    backgroundColor={props.backgroundColor}
                >
                    <div>{getDisplay()}</div>
                    <div>
                        <img src={process.env.PUBLIC_URL + "/Images/Dropdown/DropdownIcon.svg"} />
                    </div>
                </style.DropdownInput>
            </style.DropdownContainer>    
            {showMenu && (
                    <style.DropdownMenu>
                        {props.options.map((option) => (
                            <style.DropdownItem
                                onClick={() => onItemClick(option)}
                                key={option.value}
                            >
                                {option.label}
                            </style.DropdownItem>
                        ))}
                    </style.DropdownMenu>
                )}
        </div>
    );
}
