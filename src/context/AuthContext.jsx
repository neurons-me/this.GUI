//web.client/src/context/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import Cookies from 'js-cookie'; // Import js-cookie a library to manage cookies in the browser.
/* AuthContext = createContext(); - What is this doing?
This line creates a React Context. 
It’s like a container (or "stateful object") that you can share between components without passing props manually.
It doesn’t have any value by itself until you provide it with one.*/
const AuthContext = createContext();
//Creating the Hook (useAuth) - hook to access the values from AuthContext. 
export const useAuth = () => useContext(AuthContext); // It’s a shorthand way to use useContext(AuthContext).
/* useContext is a built-in (predefined) React hook 
that allows components to access the value of a Context without having to pass props manually.
AuthProvider creates a React Context (AuthContext) to store the shared state for authentication,
 such as user, isLoggedIn, and loading.
Any component inside the AuthProvider can "consume" the authentication state by calling useAuth(). 
This is achieved via React Context, which enables state sharing without having to pass props manually.*/
export const AuthProvider = ({ children }) => { // children represents whatever is wrapped by the AuthProvider component.
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Tracks if the user is logged in (true or false).
  const [user, setUser] = useState(null); // user: Stores the user data object.
  const [loading, setLoading] = useState(true); // Indicates whether the app is still loading authentication data.
  useEffect(() => {
    /* Load user data from the cookie on initial load.
    Runs once when the AuthProvider mounts to initialize the authentication state from the cookie.*/
    const usrCookie = Cookies.get('usr'); // Leer la cookie 'usr'
    if (usrCookie) {
      try {
        const parsedUsr = JSON.parse(usrCookie); // Parsear JSON
        setUser(parsedUsr); // Actualizar estado del usuario
        setIsLoggedIn(true); // Marcar al usuario como logeado
      } catch (error) {
        console.error("Failed to parse 'usr' from cookie:", error);
      }
    }
    setLoading(false); // Finaliza la carga
  }, []);

  /* Key Point:
  This function is client-side logic. 
  It handles the app's perception of whether the user is logged in. 
  However, the actual authentication is maintained by the server using the JWT in the HTTP-only cookie.
  This ensures that protected resources are still secured even if someone tampers with the cookie.*/
  const login = (usr) => { // login(usr): Takes the raw user data (usr) and updates both the user state and the cookie.
    // This sets the isLoggedIn state to true, signaling that the user is now logged in.
    setIsLoggedIn(true); // Any component relying on isLoggedIn (e.g., to show/hide routes or elements) will re-render accordingly.
    setUser(usr); // This updates the user state with the provided usr data 
    /* The usr data is serialized and saved in a cookie so it persists 
    even if the page is refreshed or the browser is closed and reopened.*/
    Cookies.set('usr', JSON.stringify(usr), {
      domain: '.cleaker.me', // Compartir entre dominio y subdominios
      secure: true, // Solo HTTPS
      sameSite: 'lax', // Protege contra CSRF
    });
  };

  const logout = async (callback) => {
    try {
      /* Sends a logout request to the backend.
      credentials: 'include' ensures that cookies are sent and received properly. */
      const response = await fetch('/logout', { method: 'GET', credentials: 'include' });
      if (response.ok) {
        setIsLoggedIn(false); // Reset authentication state
        setUser(null); // Clear user state
        Cookies.remove('usr', { domain: '.cleaker.me' }); // Elimina la cookie 'usr'
        if (callback) callback(); // Invoke callback for post-logout actions (e.g., navigation)
      } else {
        console.error('Logout failed:', await response.json());
      }
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  return (
    /* Using cookies for user state:
    The cookie 'usr' holds the raw user data, particularly the object saved by the backend.
    It represents the user's data as stored on the client side, before it's used to update the app's React state.
    user:
    This is the actual React state that tracks the logged-in user's information.
    It allows your components to reactively re-render when the user's data changes.*/
    <AuthContext.Provider value={{ isLoggedIn, user, login, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
