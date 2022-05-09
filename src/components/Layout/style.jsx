import styled from "styled-components";
import { Person, Menu } from "@mui/icons-material";
import { NavLink } from "react-router-dom";

export const LayoutCont = styled.div`
    height: 100%;
`;

export const Container = styled.div`
    background: #f5f5f5;
    display: flex;
    align-items: center;
    padding: 0.5rem;
    box-shadow: 0px 1px 15px 0px rgba(0,0,0,0.75);
    margin-bottom: 1rem;
    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const Logo = styled.div`
    font-family: cursive;
    font-size: xx-large;
    color: #1d75bd;
    margin-right: 2rem;
    @media (max-width: 768px) {
        margin-right: 2rem;
    }
`;

export const NavCont = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: end;
    @media (max-width: 768px) {
        display: none;
    }
`;

export const Button = styled.button`
    background: #1d75bd;
    width: 6rem;
    height: 2rem;
    border: none;
    outline: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    transition: all ease 0.5s;
    :hover {
        background: #18629e;
    }
`;

export const UserIcon = styled(Person)`

    && {
        width: 2rem;
        height: 2rem;
    }
    
`;

export const UserCont = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

export const AccountCont = styled.div`
    margin: 0rem 2rem 0rem 4rem;
    @media (max-width: 768px) {
        margin: 0rem;
    }
`;

export const UserNameCont = styled.div`
    font-size: larger;
    width: 4rem;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
`;

export const LinksCont = styled.div`
    width: -webkit-fill-available;
    display: flex;
    justify-content: flex-end;
    height: 5rem;
    align-items: center;
    @media (max-width: 768px) {
        align-items: flex-start;
        justify-content: flex-end;
        flex-direction: column;
        height: auto;
        margin: 0rem 0rem 1rem 1rem; 
    }
`;

export const Link = styled(NavLink)`
    text-decoration: none;
    color: black;
    font-size: medium;
    font-weight: 500;
    margin: 0rem 0.5rem;
    :hover {
        border-bottom: 2px solid black;
        color: black;
    }
    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const LinkCont = styled.div`
    width: 100%;
    transition: all ease 0.5s;
    margin: 0.3rem 0rem;
    :hover {
        background: #c1dbe7;
    }
`;

export const LogoCont = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
`;

export const MenuIcon = styled(Menu)`
    && {
        display: none;
        @media (max-width: 768px) {
            display: block;
            width: 2rem;
            height: 2rem;
            margin-right: 1.5rem;
            cursor: pointer;
        }
    } 
`;

export const MenuCont = styled.div`
    display: ${({ $showMenu }) => $showMenu ? "flex" : "none" };
    transition: all ease 0.5s;
    width: 100%;
    flex-direction: column;
    @media (min-width: 768px) {
            display: none;
        }
`;

export const AccountContResponsive = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;
`;
