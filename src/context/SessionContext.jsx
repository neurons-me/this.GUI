import React, { createContext, useContext, useEffect, useState } from 'react';

const SessionContext = createContext();

export function useSession() {
    return useContext(SessionContext);
}

export function SessionProvider({ children }) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const storedSession = localStorage.getItem('session');
        if (storedSession) {
            setSession(JSON.parse(storedSession));
        }
    }, []);

    const login = (userData) => {
        setSession(userData);
        localStorage.setItem('session', JSON.stringify(userData));
    };

    const logout = () => {
        setSession(null);
        localStorage.removeItem('session');
    };

    return (
        <SessionContext.Provider value={{ session, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
}