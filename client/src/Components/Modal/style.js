import styled from "styled-components";
import Modal from "styled-react-modal";

export const HeaderBlock = styled.div`
  margin-bottom: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  > span {
    font-size: 26px;
    font-weight: 700;
  }
`;

export const TypeModal = Modal.styled`
    padding:  20px;
    height: 30%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    border-radius: 20px;
    background-color: #f8efec;
    transition : all 0.3s ease-in-out;
    > span {
        font-size: 19px;
    }
`;

export const TypeButtonBlock = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: row;
  gap: 12px;
`;
