import styled from "styled-components";

export const Wrap = styled.div`
  position: absolute;
  width: 100%;
  display: flex;
  bottom: 0;
  background-color: #ffffff;
`;

export const Menu = styled.div`
  width: 100%;
  height: 60px;
  display: grid;
  align-items: center;
  grid-template-columns: repeat(5, 1fr);
  border-top: 3px solid #f1f1f5;
`;

export const BtnLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  > img {
    width: 35px;
    cursor: pointer;
  }
`;
