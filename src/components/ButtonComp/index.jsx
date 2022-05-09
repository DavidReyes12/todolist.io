import React, { useContext } from 'react'
import { message } from 'antd';
import { SessionContext } from '../../config/State';

export const ButtonComp = ({ render }) => {
    
    const { setSession } = useContext(SessionContext);

    const onSetSession = (value) => {
        if (value) {
            const { userName, password } = value;
            if ( userName === "David Reyes" && password === "123" ) {
                setSession({ userName, id: 1, welcomeMsg: `Bienvenido ${userName}` });
            } else {
                message.error("username or password invalid");
            };
        } else {
            setSession(value);
        };
    };

    return (
        <div data-testid="buttonTest">
            {render( onSetSession )}
        </div>
    );
};

export default ButtonComp
