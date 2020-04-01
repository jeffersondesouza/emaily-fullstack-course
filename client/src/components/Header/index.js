import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Switch from '../../utils/Switch';

const Header = () => {
  const authState = useSelector(st => st.auth);

  const [authLabel, setAuthLabel] = useState('');

  const renderAction = () =>
    Switch.of(authState)
      .case(null, '')
      .case(authState === false, <a href="/auth/google">Login with Google</a>)
      .default(<a href="/api/logout">Logout</a>);

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">
          Emaily
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>{renderAction()}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
