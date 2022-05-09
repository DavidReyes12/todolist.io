import React, { useState } from 'react'

import ButtonComp from '../ButtonComp';
import { Container, LoginCont, Input, Button, Title, LoginIcon } from "./style";

export const Login = () => {

    const [loginState, setLoginState] = useState({
        userName: "",
        password: ""
    });

    let disabledButton = !loginState.password || !loginState.userName;

    const handleOnChange = ({ target: { value, name } }) => {
        setLoginState( prevVal => ({
            ...prevVal,
            [name]: value
        }));
    };

    return (
        <Container data-testid="LoginTest">

            <LoginCont>

                <LoginIcon />

                <Title>Bienvenido</Title>
            
                <Input 
                    type="text" 
                    name="userName" 
                    id="user"
                    placeholder="Username"
                    data-testid="usernameInputTest"
                    value={loginState.userName}
                    onChange={handleOnChange}
                />
                <Input 
                    type="password" 
                    name="password" 
                    id="password"
                    placeholder="Password"
                    data-testid="passwordInputTest"
                    value={loginState.password}
                    onChange={handleOnChange}
                />
                <ButtonComp render={ (onSetSession) => (
                    <Button disabled={disabledButton} onClick={() => onSetSession(loginState)}>Login</Button>
                )} 
                />

            </LoginCont>
            

        </Container>
    );
}


export default Login;
