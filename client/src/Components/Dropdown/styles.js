import styled from "styled-components";

export const DropdownTitle = styled.div`
    font-weight: 600;
    font-size: 16px;
    color: #141414;
`
export const DropdownContainer = styled.div`
    position: relative;
    height: 22px;
    text-align: left;
    border: 2px solid #e0e0e0;
    border-radius: 10px;
    padding: 12px 15px;
    font-weight: 400;
    font-size: 18px;
    :hover,
    :focus-visible {
      border: 2px solid #FF7F00;
      outline: none;
      transition: 0.5
`
export const DropdownInput = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
`

export const DropdownMenu = styled.div`
    margin-top: 5px;
    border: 1px solid #e0e0e0;
    border-radius: 10px;
    overflow: auto;
    max-height: 150px;
    background-color: #f8efec;
    text-align: center;
`
export const DropdownItem = styled.div`
    border-bottom: 1px solid #e0e0e0;
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #FFB800;
    }
` 
