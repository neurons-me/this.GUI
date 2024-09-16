//this.GUI/src/stories/Profile/ProfilePageContext.jsx
import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '../../Atoms/Button/Button/';
import './Header.css';

export const Header = ({ user, onLogin, onLogout, onCreateAccount }) => (
  <header>
    <div className="storybook-header">
      <div>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120" width="49" height="55">
  {/* Outer Circle */}
  <circle cx="60" cy="60" r="45" fill="none" stroke="black" strokeWidth="4" />

  {/* Quadrants */}
  <path d="M15,60 A45,45 0 0 1 60,15 L60,60 Z" fill="#FFDD67" />
  <path d="M60,15 A45,45 0 0 1 105,60 L60,60 Z" fill="#F87060" />
  <path d="M60,60 L105,60 A45,45 0 0 1 60,105 Z" fill="#5BC8AF" />
  <path d="M60,60 L60,105 A45,45 0 0 1 15,60 Z" fill="#1DA1F2" />

  {/* Face: Eyes */}
  <circle cx="45" cy="50" r="5" fill="#333" />
  <circle cx="75" cy="50" r="5" fill="#333" />

  {/* Face: Smile */}
  <path d="M45 70 Q60 85 75 70" stroke="#333" strokeWidth="3" fill="transparent" />

  {/* Floating Atoms */}
  <circle cx="20" cy="20" r="5" fill="#1DA1F2" />
  <circle cx="100" cy="20" r="5" fill="#FFDD67" />
  <circle cx="110" cy="80" r="5" fill="#F87060" />
  <circle cx="20" cy="100" r="5" fill="#5BC8AF" />
  <circle cx="80" cy="110" r="5" fill="#1DA1F2" />
  <circle cx="10" cy="80" r="5" fill="#FFDD67" />
  <circle cx="50" cy="10" r="5" fill="#5BC8AF" />

  {/* Dots around the main circle */}
  <circle cx="25" cy="60" r="3" fill="#1DA1F2" />
  <circle cx="95" cy="60" r="3" fill="#F87060" />
  <circle cx="45" cy="25" r="3" fill="#FFDD67" />
  <circle cx="75" cy="95" r="3" fill="#5BC8AF" />
</svg>

        <h1  style={{marginTop: '21px'}} >GUI.navbar</h1>
      </div>
      <div>
        {user ? (
          <>
            <span className="welcome">
              Welcome, <b>{user.name}</b>!
            </span>
            <Button size="small" onClick={onLogout} label="Log out" />
          </>
        ) : (
          <>
            <Button size="small" onClick={onLogin} label="Log in" />
            <Button primary size="small" onClick={onCreateAccount} label="Sign up" />
          </>
        )}
      </div>
    </div>
  </header>
);

Header.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  onLogin: PropTypes.func.isRequired,
  onLogout: PropTypes.func.isRequired,
  onCreateAccount: PropTypes.func.isRequired,
};

Header.defaultProps = {
  user: null,
};
