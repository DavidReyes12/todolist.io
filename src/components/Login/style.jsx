import styled from "styled-components";
import { AccountCircleRounded } from "@mui/icons-material";

export const Container = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const LoginCont = styled.div`
    display: flex;
    flex-direction: column;
    background: #f5f5f5;
    width: 29rem;
    height: 25rem;
    border-radius: 1.5rem;
    box-shadow: 0px 0px 13px 0px rgb(0 0 0 / 75%);
    justify-content: center;
    align-items: center;
    @media (max-width: 425px) {
        width: 80%;
    }
    @media (min-width: 425px) and (max-width: 768px) {
        width: 60%;
    }
`;

export const Title = styled.div`
    margin-bottom: 1rem;
    font-size: x-large;
    color: #1d75bd;
    font-weight: 500;
`;

export const Input = styled.input`
    border: none;
    margin-bottom: 0.5rem;
    color: grey;
    width: 13rem;
    height: 2rem;
    padding: 0.2rem;
    border-radius: 0.3rem;
    font-size: medium;
    outline: none;
`;

export const Button = styled.button`
    background: #1d75bd;
    width: 8rem;
    height: 2rem;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    margin-top: 1rem;
    transition: all ease 0.5s;
    :hover {
        background: #18629e;
    }
`;

export const LoginIcon = styled(AccountCircleRounded)`

    && {
        width: 6rem;
        height: 6rem;
        color: #1d75bd;
    }
    
`;