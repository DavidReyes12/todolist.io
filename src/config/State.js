import React, { useState, useEffect } from 'react'
import { loadFromLocalStorage, saveToLocalStorage } from "./Helpers";

export const SessionContext = React.createContext(null);

export const State = ({ children }) => {

    const [session, setSession] = useState(loadFromLocalStorage());

    useEffect(() => {
        saveToLocalStorage(session);
    }, [session]);
    

    return (
        <SessionContext.Provider value={{ session, setSession }}>
            { children }
        </SessionContext.Provider>
    );
};

