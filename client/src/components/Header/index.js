import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Switch from '../../utils/Switch';

const Header = () => {
  const authState = useSelector(st => st.auth);
  
  const [authLabel, setAuthLabel] = useState('');
  
  useEffect(() => {
    if (!authState) {
      setAuthLabel('Login with Google');
    } else {
      setAuthLabel('Welcome');
    }
  }, [authState]);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Emaily
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/auth/google">{authLabel}</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
