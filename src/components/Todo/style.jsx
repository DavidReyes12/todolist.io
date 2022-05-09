import styled from "styled-components";
import { CloseOutlined } from "@mui/icons-material";

export const Container = styled.div`
    height: calc(100% - 7rem);
    display: flex;
    justify-content: center;
    align-items: center;
    @media (max-width: 768px) {
        height: calc(100% - 13rem);
    }
`;

export const CardCont = styled.div`
    background: #d1e3f6;
    width: 45rem;
    height: 30rem;
    border-radius: 1rem;
    padding: 1rem;
    justify-content: center;
`;

export const AddTaskCont = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const InputCont = styled.input`
    width: 80%;
    border: 2px solid #3b7bd5;
    border-top-left-radius: 0.3rem;
    border-bottom-left-radius: 0.3rem;
    border-right: none;
    outline: none;
    padding: 0.5rem;
    font-size: x-large;
    color: grey;
`;

export const Button = styled.button`
    height: 3.6rem;
    width: 4rem;
    border: 2px solid #3b7bd5;
    padding: 0.5rem 0.5rem 0.8rem 0.5rem;
    background: #3b7bd5;
    color: white;
    font-size: xxx-large;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top-right-radius: 0.3rem;
    border-bottom-right-radius: 0.3rem;
    cursor: pointer;
    transition: ease all 0.5s;
    :hover {
        background: #3064ad;
    }
`;

export const TaskListCont = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    max-height: 23rem;
    overflow: auto;
`;

export const ItemList = styled.div`
    width: 80%;
    background: ${({ $done }) => $done ? "#bfbfbf" : "white" };
    text-decoration: ${({ $done }) => $done ? "line-through" : "none" };
    padding: 0.5rem;
    border-radius: 0.3rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #3b7bd5;
    font-size: large;
    font-weight: 500;
    margin-bottom: 0.5rem;
    cursor: pointer;
    transition: ease all 0.5s;
    :hover {
        background: #e2e2e2;
    }
`;

export const CloseIcon = styled(CloseOutlined)`
    && {
        width: 1.5rem;
        height: 1.5rem;
        color: #1d75bd;
        transition: ease all 0.5s;
        :hover {
            color: #ad3030;
        }
    }
`;