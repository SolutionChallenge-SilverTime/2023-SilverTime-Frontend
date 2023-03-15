import styled from "styled-components";

export const Wrap = styled.div`
    margin-bottom: 50px;
    padding: 30px;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 30px;
    background-color: #FFE9D0;
    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.1);
    > img {
        width: 400px;
        height: 250px;
        border-radius: 30px;
    }
`;

export const TopBlock = styled.div`
    width: 100%;
    margin-top: 20px;
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    max-width: 370px;
    > span {
        &:first-child {
            // margin-right: 70px;
            font-weight: 700;
            font-size: 32px;
        }
    }
`;

export const TimeBlock = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 20px;
`;

export const ExplainBlock = styled.div`
    margin-top: 20px; 
    display: flex;
    justify-content: center;
    max-width: 370px;
    font-weight: 300px;
    font-size: 25px;
`;

export const IconBlock = styled.div`
    display: flex;
    align-items: center;
    > img {
        margin-right: 10px;
    }
    > span {
        margin-right: 20px;
        font-weight: 700;
        font-size: 20px;
    }
`;

export const BottomBlock = styled.div`
    margin-top: 20px;
    display: flex;
`;

export const ClassInfoBlock = styled.div`
    margin-left: auto;
`;


