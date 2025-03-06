import React, { createContext, useContext, useEffect, useState } from 'react';
import Cookies from 'js-cookie';  // ✅ Importación correcta

const SessionContext = createContext();

export function useSession() {
    return useContext(SessionContext);
}

export function SessionProvider({ children }) {
    const [session, setSession] = useState(null);

    useEffect(() => {
        const cleakerSession = Cookies.get('cleaker_session');
        
        if (cleakerSession) {
            fetchUserDataFromCleaker(cleakerSession)
                .then(userData => setSession(userData))
                .catch(() => setSession(null));
        } else {
            const storedSession = localStorage.getItem('session');
            setSession(storedSession ? JSON.parse(storedSession) : null);
        }
    }, []);

    const login = (userData) => {
        setSession(userData);
        localStorage.setItem('session', JSON.stringify(userData));
    };

    const logout = () => {
        setSession(null);
        localStorage.removeItem('session');
        Cookies.remove('cleaker_session');  // También limpiamos la cookie
    };

    return (
        <SessionContext.Provider value={{ session, login, logout }}>
            {children}
        </SessionContext.Provider>
    );
}

// Simulación de llamada a Cleaker
async function fetchUserDataFromCleaker(token) {
    const response = await fetch('https://api.cleaker.me/session', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` },
        credentials: 'include'
    });
    if (!response.ok) throw new Error('Failed to fetch session data');
    return await response.json();
}