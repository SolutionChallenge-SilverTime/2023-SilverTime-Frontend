import styled from "styled-components";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: ${(props) => props.top || "20px"};
  background-color: ${(props) => props.backgroundColor || "#FFFFFF"};
  > span {
    font-weight: 600;
    font-size: 16px;
    color: #141414;
  }
`;

export const InputBlock = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  > input {
    background-color: ${(props) => props.backgroundColor || "#FFFFFF"};
    width: 100%;
    border: 2px solid ${(props) => props.stroke || "#E0E0E0"};
    border-radius: 17px;
    padding: 12px 15px;
    font-weight: ${(props) => props.fontWeight || "400"};
    font-size: ${(props) => props.fontSize || "18px"};
    :hover,
    :focus-visible {
      border: 2px solid ${(props) => props.stroke || "#FF7F00"};
      outline: none;
      transition: 0.5s ease;
    }
  }
`;