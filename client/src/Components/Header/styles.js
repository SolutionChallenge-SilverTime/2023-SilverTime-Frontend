import styled from "styled-components";

export const Wrap = styled.div`
    position: sticky;
    width: 100%;
    max-width: 480px;
    top: 0;
    background-color: #ffffff;
`;

export const Title = styled.div`
    height: 50px;
    display: flex;
    align-items: center;
    border-bottom: 3px solid #f1f1f5;
    font-weight: 600;
    font-size: 30px;
    text-align: center;
    > img {
        position: fixed;
        left: 20px;
        width: 35px;
        height: 35px;
    }
    > span {
        display: table;
        margin: auto;
        text-align: center;
    }
`;