import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import Switch from '../../utils/Switch';
import Payments from '../Payments';

const Header = () => {
  const [logoLink, setLogoLink] = useState('/');

  const authState = useSelector(st => st.auth);

  useEffect(() => {
    const link = Switch.of(authState)
      .case(null || false, '/')
      .default('/surveys');

    setLogoLink(link);
  }, [authState]);

  const renderAction = () =>
    Switch.of(authState)
      .case(null, '')
      .case(false, <a href="/auth/google">Login with Google</a>)
      .default(<a href="/api/logout">Logout</a>);

  return (
    <nav>
      <div className="nav-wrapper">
        <NavLink to={logoLink} className="brand-logo">
          Emaily
        </NavLink>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {authState && authState.isLoggedIn && (
            <>
              <li style={{ margin: '0 10px' }}>
                <Payments />
              </li>
              <li>Credits: {authState.credits}</li>
            </>
          )}
          <li>{renderAction()}</li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
