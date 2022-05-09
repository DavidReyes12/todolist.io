import React, { useContext, useState } from 'react'
import { Navigate, Route, Routes } from 'react-router-dom';

import { SessionContext } from '../../config/State';
import { routes } from '../../routes';
import ButtonComp from "../ButtonComp";

import { 
    LayoutCont, 
    Container, 
    Logo, 
    NavCont, 
    Button, 
    UserIcon, 
    UserCont, 
    AccountCont, 
    UserNameCont, 
    LinksCont, 
    Link,
    LogoCont,
    MenuCont,
    MenuIcon,
    AccountContResponsive,
    LinkCont
} from "./style";

export const Layout = () => {

    const { session: { userName } } = useContext(SessionContext);
    const [showMenu, setShowMenu] = useState(false)

    return (
        <LayoutCont data-testid="LayoutTest">
            <Container>

                <LogoCont>
                    <MenuIcon data-testid="MenuIconTest" onClick={() => setShowMenu( prevVal => !prevVal)} />
                    <Logo>ToDoList.io</Logo>
                </LogoCont>

                <MenuCont $showMenu={showMenu}>
                    <AccountContResponsive>
                        <UserCont>
                            <UserIcon />
                            <UserNameCont> {userName} </UserNameCont>
                        </UserCont>
                        <ButtonComp
                            render={ ( onSetSession ) => (
                                <Button onClick={() => onSetSession(null)}>
                                    Logout
                                </Button>
                            )}
                        />
                    </AccountContResponsive>    
                    <LinksCont>
                        {
                            routes.map( ({ to, name }) => (
                                <LinkCont key={to}>
                                    <Link to={to} >
                                        { name }
                                    </Link>
                                </LinkCont>
                            ))
                        }
                    </LinksCont>
                </MenuCont>

                <NavCont $showMenu={showMenu}>
                    <LinksCont>
                        {
                            routes.map( ({ to, name }) => (
                                <div key={to}>
                                    <Link to={to} >
                                        { name }
                                    </Link>
                                </div>
                            ))
                        }
                    </LinksCont>

                    <AccountCont>
                        <UserCont>
                            <UserIcon />
                            <UserNameCont> {userName} </UserNameCont>
                        </UserCont>
                        <ButtonComp
                            render={ ( onSetSession ) => (
                                <Button onClick={() => onSetSession(null)}>
                                    Logout
                                </Button>
                            )}
                        />
                    </AccountCont>
                </NavCont>

            </Container>

            
            <Routes>
                {
                    routes.map( ({ path, Component }) => (
                        <Route key={path} path={path} element={ <Component /> } />
                    ))
                }
                <Route path="/*" element={ <Navigate to="/home/todolist" replace /> } />
            </Routes>
            
        </LayoutCont>
    )
}


export default Layout;
