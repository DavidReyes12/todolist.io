import { message } from 'antd';
import React, { useContext, useEffect, useState } from 'react'
import Layout from '../../components/Layout'
import { SessionContext } from '../../config/State';

export const Home = () => {

    const { session, setSession } = useContext(SessionContext);
    const [isMount, setIsMount] = useState(true);

    useEffect(() => {
        if (session.welcomeMsg) { 
            if (isMount) {
                setSession({ ...session, welcomeMsg: "" });
                setIsMount(false);
                return message.success(session.welcomeMsg);
            }
        };

        return () => {
            setIsMount(false);
        };
        
        /* eslint-disable */
    }, []);

    return (
        <div data-testid="homeTest" style={{ height: "100%" }}>
            <Layout />
        </div>
    );
};

export default Home;
